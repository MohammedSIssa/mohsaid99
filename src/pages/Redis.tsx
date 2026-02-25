import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { API } from "../variables/api";
import Delete from "../assets/icons/delete.svg";
import { useType } from "../hooks/useType";

import SuccessAudio from "../assets/auth-success.wav";
import SelectAudio from "../assets/storySelect.wav";

type RedisValue = any;

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-1 rounded-full hover:bg-red-200 transition"
  >
    <img src={Delete} width={20} height={20} alt="Delete" />
  </button>
);

export default function ReactControls() {
  const [keys, setKeys] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [value, setValue] = useState<RedisValue | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const successAudio = new Audio(SuccessAudio);
  const selectAudio = new Audio(SelectAudio);

  const handleSelect = () => {
    selectAudio.currentTime = 0;
    selectAudio.volume = 0.5;
    selectAudio.play();
  };

  const handleSuccess = () => {
    successAudio.currentTime = 0;
    successAudio.volume = 0.35;
    successAudio.play();
  };

  const BASE_URL = `${API}/redis`;
  const { token, isAdmin } = useAuth();

  const { setType } = useType();

  useEffect(() => {
    setType("redis");
  }, []);

  const fetchKeys = async () => {
    try {
      setLoading(true);
      const res = await fetch(BASE_URL, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch keys");
      handleSuccess();
      const data = await res.json();
      setKeys(Array.isArray(data) ? data.flat() : []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchValue = async (key: string) => {
    try {
      setLoading(true);
      setSelectedKey(key);
      const res = await fetch(`${BASE_URL}/${key}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch key value");
      const data = await res.json();
      handleSelect();
      setValue(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteKey = async (key: string) => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/${key}`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete key");
      await fetchKeys();
      if (selectedKey === key) {
        setSelectedKey(null);
        setValue(null);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeys();
  }, []);

  return (
    <div className="p-6 font-sans mx-10 redis" dir="ltr">
      <h2 className="text-2xl font-bold mb-4">Redis Admin Panel</h2>

      <div className="flex gap-6">
        {/* Keys List */}
        <div className="w-1/3 bg-(--darker-bg-color) shadow rounded p-4 max-h-[500px] overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Keys</h3>
            <button
              onClick={fetchKeys}
              className="px-2 py-1 bg-(--bg-color) border-2 cursor-pointer border-(--border-color) rounded transition"
            >
              Refresh
            </button>
          </div>
          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {keys.length === 0 && !loading && (
            <p className="text-gray-400">No keys found.</p>
          )}
          {Array.isArray(keys) && (
            <ul className="flex flex-col gap-2">
              {keys.flat().map((key) => (
                <li
                  key={key}
                  className={`flex justify-between items-center p-2 rounded cursor-pointer transition
        ${selectedKey === key ? "bg-blue-700" : ""}`}
                >
                  <span
                    className="truncate max-w-[180px]"
                    onClick={() => fetchValue(key)}
                    title={key}
                  >
                    {key}
                  </span>
                  {isAdmin && <DeleteButton onClick={() => deleteKey(key)} />}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Selected Key Value */}
        <div
          dir="ltr"
          className="w-2/3 bg-(--darker-bg-color) border-2 border-(--border-color) shadow rounded p-4 max-h-[500px] overflow-auto"
        >
          <h3 dir="ltr" className="text-lg font-semibold mb-2">
            Value
          </h3>
          {selectedKey ? (
            <>
              <p dir="ltr" className="mb-2">
                <strong>Key:</strong> {selectedKey}
              </p>
              <pre
                dir="ltr"
                className="bg-(--bg-color) p-3 rounded overflow-auto"
              >
                {JSON.stringify(value, null, 2)}
              </pre>
            </>
          ) : (
            <p className="text-gray-400">Select a key to view its value.</p>
          )}
        </div>
      </div>
    </div>
  );
}
