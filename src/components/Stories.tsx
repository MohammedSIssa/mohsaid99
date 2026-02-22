import { useType } from "../hooks/useType";
import { useEffect, useState } from "react";
import type { Story } from "../types/Story";
import { API } from "../variables/api";
import { NavLink } from "react-router";
import CreateStoryPopup from "./CreateStory";
import useAuth from "../hooks/useAuth";
import EditStoryPopup from "./EditStory";

import Spinner from "../assets/icons/spinner.svg";
import Create from "../assets/icons/create.svg";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

export default function Stories({ showNav }: { showNav: boolean }) {
  const { type } = useType();
  const [stories, setStories] = useState<Story[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [showPopup, setShowPopup] = useState(false);
  const [editingStory, setEditingStory] = useState<Story | null>(null);
  const [latestStory, setLatestStory] = useState(1);

  const { isAdmin, token } = useAuth();

  useEffect(() => {
    if (!type) return setStories(null);

    setLoading(true);
    fetch(`${API}/stories?type=${type}&year=${year}`, {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setStories(data);
        setLatestStory(data[0]?.count + 1 || 1);
      })
      .catch(() => setStories(null))
      .finally(() => setLoading(false));
  }, [type, year]);

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this story?",
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API}/stories/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setStories((prev) =>
          prev ? prev.filter((story) => story.id !== id) : prev,
        );
      } else {
        alert("Failed to delete story.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  }

  if (!type) return null;

  if (loading)
    return (
      <div className="flex justify-center h-10 mt-4">
        <img className="animate-spin w-7 h-7" src={Spinner} alt="loading" />
      </div>
    );

  return (
    <div
      className={`flex-1 overflow-y-auto stories ${
        showNav
          ? "border-2 border-(--border-color) bg-(--darker-bg-color) rounded-lg py-3"
          : ""
      } flex flex-col gap-2 p-2 m-1`}
    >
      {/* Year selector or label */}
      {showNav ? (
        <div className="flex items-center justify-between px-1 mb-2">
          <select
            className="year font-bold bg-(--darker-bg-color) p-2 rounded border border-(--border-color) focus:outline-0"
            value={year}
            onChange={(e) => setYear(+e.target.value)}
          >
            {[2026, 2025].map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          {/* Add New Story Button */}
          {isAdmin && (
            <button
              onClick={() => setShowPopup(true)}
              className="px-3 py-1 rounded bg-(--accent-color) cursor-pointer hover:brightness-110 transition"
            >
              <img src={Create} width={20} />
            </button>
          )}
        </div>
      ) : (
        <div className="year text-center font-bold text-xs mb-2">{year}</div>
      )}

      {/* Stories List */}
      {stories?.map((story, idx) => {
        const linkClasses = showNav
          ? `${story.special ? "border-yellow-400/70 bg-yellow-900/50 text-yellow-200" : "border-(--border-color)"} p-2 h-fit min-h-16 relative transition-transform duration-300 opacity-100 max-w-full border-2  rounded-lg`
          : `${story.special ? "border-yellow-400/70 bg-yellow-900/50 text-yellow-200" : "border-(--border-color)"} p-1 py-2 year bg-(--darker-bg-color) rounded font-semibold text-center`;

        return (
          <NavLink
            key={idx}
            to={`${story.type}/${story.count}`}
            className={linkClasses}
          >
            {showNav ? (
              <>
                <h1 className="font-bold">{story.title}</h1>
                <small
                  className={`${story.special ? "text-yellow-500" : "text-(--accent-color)"} text-xs`}
                >
                  {story.type !== "special"
                    ? story.summary?.trim() || "🔴"
                    : story.summary}
                </small>
                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // prevent NavLink navigation
                      setEditingStory(story);
                    }}
                    className="absolute bottom-1 left-2 text-xs bg-(--accent-color) p-0.5 text-white rounded"
                  >
                    <img src={Edit} width={18} height={18} />
                  </button>
                )}
                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (story.id !== undefined) handleDelete(story.id);
                    }}
                    className="absolute bottom-1 left-9 text-xs bg-red-300 p-0.5 text-white rounded hover:bg-red-700 transition"
                  >
                    <img src={Delete} width={18} height={18} />
                  </button>
                )}
                <div className="flex gap-1 absolute top-2 left-2">
                  <small
                    className={`${story.special ? "bg-yellow-200 text-yellow-900" : "bg-(--accent-color) text-white"} year font-bold rounded-full p-1 px-2 text-xs`}
                  >
                    {story.type === "special" || story.type === "blog"
                      ? story.year
                      : `#${story.count}`}
                  </small>
                  {story.type === "special" || story.type === "blog" ? (
                    <small className="year bg-(--accent-color) font-bold text-white rounded-full p-1 px-2 text-xs">
                      #{story.count}
                    </small>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <span className="text-xs">#</span>
                {story.count}
              </>
            )}
          </NavLink>
        );
      })}

      {editingStory && (
        <EditStoryPopup
          story={editingStory}
          onClose={() => setEditingStory(null)}
          onUpdate={(updatedStory) =>
            setStories((prev) =>
              prev
                ? prev.map((s) => (s.id === updatedStory.id ? updatedStory : s))
                : prev,
            )
          }
        />
      )}
      {/* Create Story Popup */}
      {showPopup && (
        <CreateStoryPopup
          latestStory={latestStory}
          fromType={type}
          onClose={() => setShowPopup(false)}
          onCreate={(newStory) =>
            setStories((prev) => (prev ? [newStory, ...prev] : [newStory]))
          }
        />
      )}
    </div>
  );
}
