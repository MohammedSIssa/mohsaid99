import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API, DEV_API } from "../../../scripts/globals";

import { useAuth } from "../../hooks/useAuth";

export default function UpdateStory() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("week");
  const [special, setSpecial] = useState(false);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");

  const { user } = useAuth();

  const { id } = useParams();

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/story/${id}`
      : `${DEV_API}/story/${id}`;

  useEffect(() => {
    async function fetchStoryData() {
      try {
        setFeedback("Fetching story data..");
        setLoading(true);
        const res = await fetch(API_CALL, {
          headers: {
            Authorization: `Bearer ${user.apikey}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setTitle(data.title);
          setSummary(data.summary);
          setType(data.type);
          setCount(data.count);
          setYear(data.year);
          setSpecial(data.special);
          setFeedback("Fetched!");
        }
      } catch (error) {
        console.error(error);
        setFeedback("Error occurred..");
      } finally {
        setLoading(false);
      }
    }

    fetchStoryData();
  }, [id, API_CALL, user.apikey]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setFeedback("");
      const res = await fetch(`${API}/update/story/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.apikey}`,
        },
        body: JSON.stringify({ title, summary, year, special, type, count }),
      });
      if (!res.ok) {
        setFeedback("Failed to Update");
        throw new Error("Failed to Update");
      }

      setFeedback("Updated Successfully");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-10 min-w-[300px] border border-zinc-700 bg-zinc-900 rounded-xl"
    >
      <p className="text-xl text-green-200 font-bold">فورم تحديث الستوري</p>
      <hr className="border-zinc-800" />
      <label htmlFor="up_story_count" dir="ltr">
        Count:
      </label>
      <div className="flex gap-4 flex-wrap" dir="ltr">
        <input
          type="number"
          id="up_story_count"
          name="count"
          value={count}
          dir="ltr"
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
          onChange={(e) => setCount(e.target.value)}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-zinc-800 text-zinc-50 p-2 focus:border focus:outline-0 focus:border-zinc-600"
        >
          <option value="week">Week</option>
          <option value="goal">Goal</option>
          <option value="blog">Blog</option>
          <option value="special">Special</option>
          <option value="stat">Stat</option>
        </select>
      </div>
      <label htmlFor="up_story_title" dir="ltr">
        Title:
      </label>
      <input
        id="up_story_title"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
        autoComplete="off"
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20 font-bold"
      />
      <label htmlFor="up_story_summary" dir="ltr">
        Summary:
      </label>
      <input
        id="up_story_summary"
        value={summary}
        name="summary"
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
        onChange={(e) => setSummary(e.target.value)}
        disabled={loading}
        autoComplete="off"
      />
      <label htmlFor="up_story_year" dir="ltr">
        Year:
      </label>
      <input
        id="up_story_year"
        value={year ?? ""}
        name="year"
        disabled={loading}
        autoComplete="off"
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
        onChange={(e) => setYear(e.target.value)}
      />
      <div className="flex gap-4 items-center justify-center">
        <input
          type="checkbox"
          id="up_story_isSpecial"
          name="special"
          value={special}
          checked={special}
          disabled={loading}
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
          onChange={(e) => setSpecial(e.target.checked)}
        />
        <label htmlFor="up_story_isSpecial" dir="ltr">
          Golden Story?
        </label>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border border-zinc-950 hover:border hover:border-zinc-700 hover:cursor-pointer transition-all duration-100"
      >
        Update Story
      </button>
      <p
        dir="ltr"
        className={
          feedback === "Updated Successfully"
            ? "text-green-500"
            : feedback === "Failed to Update"
            ? "text-red-500"
            : ""
        }
      >
        {feedback}
      </p>
    </form>
  );
}
