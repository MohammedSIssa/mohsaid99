import { useEffect, useState } from "react";

import { API, DEV_API } from "../../../scripts/globals";

import { useAuth } from "../../hooks/useAuth";

import { useLocation } from "react-router-dom";

export default function AddStory() {
  const [period, setPeriod] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");
  const [weekCount, setWeekCount] = useState("");
  const [isSpecial, setIsSpecial] = useState(false);
  const [type, setType] = useState();

  const location = useLocation();

  useEffect(() => {
    setType(location.state.type);
    setWeekCount(location.state.count);
  }, [location.state]);

  const { user } = useAuth();

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/${type}`
      : `${DEV_API}/${type}`;

  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setFeedback("Adding data..");
      const res = await fetch(API_CALL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.apikey}`,
        },
        body: JSON.stringify({
          title: period,
          year,
          type,
          summary,
          count: weekCount,
          special: isSpecial,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save data.");
      }

      console.log("Saved data.");
      setPeriod("");
      setYear("");
      setSummary("");
      setIsSpecial(false);
      setFeedback("Saved Data.");
    } catch (err) {
      console.error(err);
      setFeedback("Error saving data..");
    }
  }

  return (
    <form
      method="POST"
      className="flex flex-col gap-4 p-10 min-w-[300px] border border-zinc-700 bg-zinc-900 rounded-xl"
      onSubmit={handleSubmit}
    >
      <p className="text-xl text-green-200 font-bold">فورم اضافة الستوري</p>
      <hr className="border-zinc-800" />
      <label htmlFor="add_story_type" dir="ltr">
        Type:
      </label>
      <select
        className="bg-zinc-800 text-zinc-50 p-2 focus:border focus:outline-0 focus:border-zinc-600"
        onChange={(e) => setType(e.target.value)}
        id="add_story_type"
        value={type}
      >
        <option value={"week"}>Week</option>
        <option value={"goal"}>Goal</option>
        <option value={"blog"}>Blog</option>
        <option value={"stat"}>Stats</option>
        <option value={"special"}>Special</option>
      </select>

      <label htmlFor="add_story_count" dir="ltr">
        Count:
      </label>
      <input
        name="week_count"
        id="add_story_count"
        value={weekCount}
        onChange={(e) => setWeekCount(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border"
        autoComplete="off"
        dir="ltr"
        required
      />
      <label htmlFor="add_story_period" dir="ltr">
        Title:{" "}
      </label>
      <input
        name="period"
        id="add_story_period"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border"
        autoComplete="off"
        required
      />
      <label htmlFor="add_story_year" dir="ltr">
        Year:
      </label>
      <input
        name="year"
        id="add_story_year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border"
        autoComplete="off"
        dir="ltr"
        required
      />
      <label htmlFor="add_story_summary" dir="ltr">
        Summary:
      </label>
      <input
        name="summary"
        id="add_story_summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border"
        autoComplete="off"
      />
      <div className="flex gap-4 items-center justify-center" dir="ltr">
        <label htmlFor="add_story_isSpecial" dir="ltr">
          Golden Story?
        </label>
        <input
          type="checkbox"
          id="add_story_isSpecial"
          name="special"
          checked={isSpecial}
          value={isSpecial}
          onChange={(e) => setIsSpecial(e.target.checked)}
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border border-zinc-950 hover:border hover:border-zinc-700 hover:cursor-pointer transition-all duration-100"
      >
        Add Story
      </button>
      <p
        className={
          feedback === "Saved Data." ? "text-green-500" : "text-red-500"
        }
      >
        {feedback}
      </p>
    </form>
  );
}
