import { useState } from "react";
import { API } from "../../variables/globals";

import useAuth from "../../hooks/useAuth";

import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function AddStoryForm({
  type,
  count,
  year,
}: {
  type: string | number;
  count: number;
  year: number | string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Story data..
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [special, setSpecial] = useState(false);
  const [newYear, setNewYear] = useState("");

  const { user } = useAuth();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch(API + "/stories/" + type, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer: ${user?.apikey}`,
        },
        body: JSON.stringify({
          title,
          summary,
          year: newYear.trim() === "" ? year : newYear,
          count,
          special,
        }),
      });
      if (res.ok) {
        setFeedback("Story added successfully");
      }
      if (!res.ok) {
        setFeedback("Error while adding story");
      }

      console.log({
        title,
        summary,
        year: newYear.trim() === "" ? year : newYear,
        count,
        special,
        type,
      });
    } catch {
      setFeedback("Error while adding story.");
    }
  }

  if (!isVisible) {
    return (
      <button
        className="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 p-8 shadow-xl shadow-black/10 transition-all duration-200 hover:brightness-150"
        onClick={() => setIsVisible(true)}
      >
        <FaPlus size={30} />
      </button>
    );
  }

  if (isVisible) {
    return (
      <div className="flex w-full flex-col gap-2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 rounded-lg border-2 border-white/20 bg-white/10 p-2 **:disabled:opacity-35 [&_input]:rounded [&_input]:border-2 [&_input]:border-white/20 [&_input]:bg-white/20 [&_input]:p-1 [&_input]:focus:outline-0"
        >
          <label dir="ltr" htmlFor="title">
            Title:
          </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />

          <label dir="ltr" htmlFor="summary">
            Summary:
          </label>
          <input value={summary} onChange={(e) => setSummary(e.target.value)} />

          <label dir="ltr" htmlFor="newYear">
            Year:
          </label>
          <input
            dir="ltr"
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
          />

          <div
            className={`flex w-fit items-center justify-center gap-2 rounded p-1 ${special === true ? "bg-green-500/30" : "bg-red-500/30"}`}
          >
            <label htmlFor="special" dir="ltr">
              Special?
            </label>
            <input
              id="special"
              type="checkbox"
              className="opacity-30"
              checked={special}
              onChange={(e) => setSpecial(e.target.checked)}
            />
          </div>
          <p>{feedback}</p>
          <button
            type="submit"
            className="cursor-pointer bg-linear-to-b from-[#5a36e9] via-[#805afe] to-[#5a36e9] p-1 px-2 font-bold hover:brightness-105 focus:outline-0"
          >
            Add
          </button>
        </form>
        <button
          className="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 p-8 shadow-xl shadow-black/10 transition-all duration-200 hover:brightness-150"
          onClick={() => setIsVisible(false)}
        >
          <FaTimes size={30} />
        </button>
      </div>
    );
  }
}
