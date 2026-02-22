import type { Log } from "../types/Log";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { API } from "../variables/api";
import Spinner from "../assets/icons/spinner.svg";

export default function Logs() {
  const [data, setData] = useState<Log[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { token } = useAuth();
  const { isMobile, isDesktop } = useMediaQuery();

  useEffect(() => {
    async function getLogs() {
      try {
        setLoading(true);
        const res = await fetch(API + "/log", {
          method: "GET",
          headers: { authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const logs: Log[] = await res.json();
          setData(logs);
        }
        if (!res.ok) {
          if (res.status >= 400 && res.status < 500) {
            setError(true);
          }
          if (res.status >= 500) {
            setError(true);
          }
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getLogs();
  }, [token]);

  if (error) return <h1>Error loading logs</h1>;
  if (loading)
    return (
      <div className="h-dvh flex items-center justify-center">
        <img src={Spinner} width={27} height={27} className="animate-spin" />
      </div>
    );
  if (data)
    return (
      <div className="px-0 pb-20">
        <div className="w-full overflow-hidden border-t border-r-0 border-l-0 border-(--border-color) bg-(--darker-bg-color)">
          {/* Mobile Card View */}
          {isMobile && (
            <div>
              {data.map((log, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-200/40 p-4 last:border-b-0 dark:border-gray-700/40"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex flex-row-reverse items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-sm font-medium text-white">
                        {log.username?.charAt(0)?.toUpperCase() || "?"}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {log.username || "Unknown"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        Details
                      </p>
                      <p
                        className="text-center text-sm"
                        dir="rtl"
                        title={log.details}
                      >
                        {log.details}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        URL
                      </p>
                      <code className="rounded-md bg-gray-100 px-2 py-1 font-mono text-xs break-all text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        {log.visited}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Desktop Table View */}
          {isDesktop && (
            <div className="overflow-x-auto">
              <table className="w-full" dir="ltr">
                <thead>
                  <tr className="border-b bg-(--darker-bg-color) border-(--border-color)">
                    <th className="px-6 py-4 text-center text-sm font-semibold ">
                      Username
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold ">
                      Details
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold ">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/40 dark:divide-gray-700/40">
                  {data.map((log, idx) => (
                    <tr
                      key={idx}
                      className="transition-colors duration-150 hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-sm font-medium text-white">
                            {log.username?.charAt(0)?.toUpperCase() || "?"}
                          </div>
                          <span className="text-sm font-medium ">
                            {log.username || "Unknown"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p
                          className="text-center text-sm"
                          dir="rtl"
                          title={log.details}
                        >
                          {log.details}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <code className="rounded-md bg-gray-100 px-2 py-1 font-mono text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                          {log.visited}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {data.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">No logs found</p>
            </div>
          )}
        </div>
      </div>
    );
}
