import type { Story } from "../types/Story";
import { NavLink } from "react-router";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import EditStoryPopup from "./EditStoryPopup";
// import { FaEdit } from "react-icons/fa";

import { TbEdit } from "react-icons/tb";
import { HiTrash } from "react-icons/hi2";

// import { MdDeleteForever } from "react-icons/md";
// import { MdNewReleases } from "react-icons/md";

import { API } from "../variables/globals";

// Todo:
// Make the edit story show input fields
// making it the same size of the story

export default function StoryBox({
  story,
  handleLinkClick,
  onToggleEditPopup,
  onDeleteStory,
  currentYear,
}: {
  story: Story;
  handleLinkClick: () => void;
  onToggleEditPopup: () => void;
  onDeleteStory: (id: number) => void;
  currentYear: string | number;
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
          `${API}/stories?type=${story.type}&count=${story.count}&year=${currentYear}&id=${story.id}`,
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
        className={` ${special ? "border-yellow-400/80 bg-linear-to-bl from-yellow-300/60 to-yellow-700 text-yellow-100 shadow-xl shadow-yellow-400/20" : "border-white/50 bg-linear-to-b from-white/30 via-white/10 to-white/0 shadow-xl shadow-black/10"} relative w-full min-w-[300px] rounded-lg border-2 p-3 pb-8 md:max-w-70`}
        to={`/${story.type}/${story.count}`}
        onClick={handleLinkClick}
      >
        {/* {!isAdmin() && !story.seen && (
          <span className="absolute -top-2 -right-1 text-yellow-300">
            <MdNewReleases size={18} />
          </span>
        )} */}
        <h1 className="text-xl font-bold">{story.title}</h1>
        <p
          className={`text-[13px] ${special ? "text-yellow-100/70" : "text-white/70"}`}
        >
          {story?.summary === "" ? "🔴" : story?.summary}
        </p>
        <span
          className={`year absolute -top-4 left-2 flex gap-2 rounded bg-linear-to-b ${special ? "from-yellow-700 to-yellow-900 text-yellow-200 shadow-yellow-900" : "bg-violet-500 text-[#f3f0ff] shadow-black/20"} px-2 font-bold shadow-md`}
        >
          {story.year}
        </span>
        <span className="year absolute bottom-0 left-1 font-bold">
          #{story.count}
        </span>
        {isAdmin() && story.type !== "stats" && (
          <div className="absolute right-1 -bottom-3 flex gap-1 rounded-lg bg-black/30 p-1 text-white [&_button]:cursor-pointer">
            <>
              <button
                onClick={() => {
                  setShowPopup(true);
                  onToggleEditPopup();
                }}
                className="rounded bg-linear-to-b from-blue-400 to-blue-700 p-1 px-2"
              >
                <TbEdit />
              </button>
              <button
                onClick={handleDeleteStory}
                className="rounded bg-linear-to-b from-red-400 to-red-700 p-1 px-2"
              >
                <HiTrash />
              </button>
            </>
          </div>
        )}
      </NavLink>

      {isAdmin() && showPopup && (
        <EditStoryPopup story={story} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
