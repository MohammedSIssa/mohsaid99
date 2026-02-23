import { useState } from "react";
import type { Story } from "../types/Story";
import { API } from "../variables/api";
// import useAuth from "../hooks/useAuth";

type CreateStoryPopupProps = {
  onClose: () => void;
  onCreate: (story: Story) => void;
  latestStory: number;
  fromType: string;
};

export default function CreateStoryPopup({
  onClose,
  onCreate,
  latestStory,
  fromType,
}: CreateStoryPopupProps) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(fromType);
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [count, setCount] = useState(latestStory);
  const [summary, setSummary] = useState("");
  const [special, setSpecial] = useState(false);

  // const { token } = useAuth();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newStory: Story = {
      title,
      type,
      year,
      count,
      summary,
      special,
    };

    async function createStory() {
      try {
        const res = await fetch(`${API}/stories`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify(newStory),
        });

        if (res.ok) {
          const data = await res.json();
          onCreate(data);
          onClose();
        } else {
          alert("Failed to create story.");
        }
      } catch (err) {
        console.error(err);
        alert("Server error. Please try again later.");
      }
    }

    createStory();
  }

  return (
    <div className="fixed inset-0 bg-(--bg-color) flex items-center justify-center z-950">
      <form
        onSubmit={handleSubmit}
        className="bg-(--darker-bg-color) p-6 rounded-lg w-96 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold">فورم إضافة ستوري جديد</h2>

        <input
          dir="rtl"
          type="text"
          placeholder="العنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded border border-(--border-color) focus:outline-0"
          required
        />

        <select
          dir="rtl"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 rounded border border-(--border-color) focus:outline-0"
          required
        >
          <option className="bg-(--darker-bg-color)" value="">
            اختر النوع
          </option>
          <option className="bg-(--darker-bg-color)" value="week">
            أسبوع
          </option>
          <option className="bg-(--darker-bg-color)" value="blog">
            مدونة
          </option>
          <option className="bg-(--darker-bg-color)" value="goal">
            هدف
          </option>
          <option className="bg-(--darker-bg-color)" value="special">
            خاصة
          </option>
        </select>

        <input
          type="number"
          dir="rtl"
          placeholder="العدد"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="p-2 rounded border border-(--border-color) focus:outline-0"
          min={1}
          required
        />

        <input
          dir="rtl"
          type="text"
          placeholder="السنة"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2 rounded border border-(--border-color) focus:outline-0"
          required
        />

        <textarea
          dir="rtl"
          placeholder="الملخص"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="p-2 rounded border border-(--border-color) focus:outline-0"
        />

        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setSpecial(!special)}
        >
          <div
            className={`w-10 h-5 rounded-full transition-colors duration-300 ${
              special ? "bg-(--accent-color)" : "bg-gray-400/50"
            } relative`}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 absolute top-0.5 ${
                special ? "left-5" : "left-0.5"
              }`}
            ></span>
          </div>
          <span className="font-semibold text-sm">
            {special ? "Special" : "Normal"}
          </span>
        </div>

        <div className="flex justify-end gap-2 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border border-(--border-color) cursor-pointer"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-(--accent-color) text-white cursor-pointer hover:brightness-105 transition"
          >
            أنشئ ستوري
          </button>
        </div>
      </form>
    </div>
  );
}
