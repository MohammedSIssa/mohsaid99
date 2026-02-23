// EditStory.tsx
import { useState } from "react";
import type { Story } from "../types/Story";
import { API } from "../variables/api";
// import useAuth from "../hooks/useAuth";

type EditStoryPopupProps = {
  story: Story;
  onClose: () => void;
  onUpdate: (story: Story) => void;
};

export default function EditStoryPopup({
  story,
  onClose,
  onUpdate,
}: EditStoryPopupProps) {
  const [title, setTitle] = useState(story.title);
  const [type, setType] = useState(story.type);
  const [year, setYear] = useState(story.year);
  const [count, setCount] = useState(story.count);
  const [summary, setSummary] = useState(story.summary || "");
  const [special, setSpecial] = useState(story.special);

  const [submitting, setSubmitting] = useState(false);

  // const { token } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setSubmitting(true);
      const res = await fetch(`${API}/stories/${story.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          title,
          type,
          year,
          count,
          summary,
          special,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        onUpdate(data);
        onClose();
        setSubmitting(false);
      } else {
        setSubmitting(false);
        alert("Failed to update story.");
      }
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      alert("Server error. Please try again later.");
    }
  }

  return (
    <div className="fixed inset-0 bg-(--bg-color) flex items-center justify-center z-950">
      <form
        onSubmit={handleSubmit}
        className="bg-(--darker-bg-color) p-6 rounded-lg w-96 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold">تعديل الستوري</h2>

        <input
          dir="rtl"
          type="text"
          value={title}
          disabled={submitting}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded border border-(--border-color)"
          required
        />

        <select
          dir="rtl"
          disabled={submitting}
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 rounded border border-(--border-color)"
          required
        >
          <option value="week">أسبوع</option>
          <option value="blog">مدونة</option>
          <option value="goal">هدف</option>
          <option value="special">خاصة</option>
        </select>

        <input
          type="number"
          value={count}
          disabled={submitting}
          onChange={(e) => setCount(Number(e.target.value))}
          className="p-2 rounded border border-(--border-color)"
          min={1}
          required
        />

        <input
          type="text"
          disabled={submitting}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2 rounded border border-(--border-color)"
          required
        />

        <textarea
          disabled={submitting}
          dir="rtl"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="p-2 rounded border border-(--border-color)"
        />

        {/* Special Toggle */}

        <div
          className={`${submitting ? "pointer-events-none opacity-45" : ""} flex items-center gap-3 cursor-pointer`}
          onClick={() => setSpecial(!special)}
        >
          <div
            className={`w-10 h-5 rounded-full transition ${
              special ? "bg-(--accent-color)" : "bg-gray-400/50"
            } relative`}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
                special ? "left-5" : "left-0.5"
              }`}
            />
          </div>
          <span className="text-sm font-semibold">
            {special ? "Special" : "Normal"}
          </span>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-(--border-color) rounded"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-(--accent-color) text-white rounded"
          >
            حفظ التعديلات
          </button>
        </div>
      </form>
    </div>
  );
}
