import type { Story } from "../types/Story";
import { NavLink } from "react-router";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import EditStoryPopup from "./EditStoryPopup";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { API } from "../variables/globals";

// Todo:
// Make the edit story show input fields
// making it the same size of the story

export default function StoryBox({
  story,
  handleLinkClick,
  onToggleEditPopup,
  onDeleteStory,
}: {
  story: Story;
  handleLinkClick: () => void;
  onToggleEditPopup: () => void;
  onDeleteStory: (id: number) => void;
}) {
  const special = story.special;
  const [showPopup, setShowPopup] = useState(false);
  const { isAdmin, user } = useAuth();

  async function handleDeleteStory() {
    const sure = window.confirm(
      "Are you sure you want to delete story " + story.type + " " + story.count,
    );
    if (sure) {
      try {
        const res = await fetch(
          API + "/stories/" + story.type + "/" + story.count,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer: ${user?.apikey}`,
            },
          },
        );

        if (res.ok) {
          alert("Deleted story successfully");
          onDeleteStory(story.count);
        }
      } catch {
        alert("Could not delete story..");
      }
    }
  }

  return (
    <>
      <NavLink
        className={`${special ? "border-yellow-400/20 bg-yellow-400/40 text-yellow-100 shadow-xl shadow-yellow-400/10" : "border-white/20 bg-white/10 shadow-xl shadow-black/10"} relative w-full min-w-[300px] rounded-lg border-2 p-3 pb-8 md:max-w-70`}
        to={`/${story.type}/${story.count}`}
        onClick={handleLinkClick}
      >
        <h1 className="text-xl font-bold">{story.title}</h1>
        <p
          className={`text-[14px] ${special ? "text-yellow-100/70" : "text-white/80"}`}
        >
          {story?.summary === "" ? "🔴" : story?.summary}
        </p>
        <div
          className="year absolute bottom-0 left-1 flex gap-2 font-bold"
          dir="ltr"
        >
          <span>{story.year}</span>
          <span>#{story.count}</span>
          <div className="admin-controls flex gap-2 pb-1">
            {isAdmin() && story.type !== "stats" && (
              <button
                onClick={() => {
                  setShowPopup(true);
                  onToggleEditPopup();
                }}
                className="rounded bg-blue-500 p-1 px-2"
              >
                <FaEdit />
              </button>
            )}
            {isAdmin() && story.type !== "stats" && (
              <button
                onClick={handleDeleteStory}
                className="rounded bg-red-500 p-1 px-2"
              >
                <MdDeleteForever />
              </button>
            )}
          </div>
        </div>
      </NavLink>

      {isAdmin() && showPopup && (
        <EditStoryPopup story={story} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
