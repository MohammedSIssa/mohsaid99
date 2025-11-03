import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { API, DEV_API } from "../scripts/globals";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function Story({ item, idx }) {
  const goldStory = item.special;
  const { user } = useContext(UserContext);

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? API + "/delete/story/" + item.id
      : DEV_API + "/delete/story/" + item.id;

  async function deleteStory() {
    const confirmDelete = window.confirm(`Delete story?`);
    if (confirmDelete) {
      const res = await fetch(API_CALL, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Deleted story successfully");
      }
      if (!res.ok) {
        alert("Could not delete the story");
      }
    }
  }

  return (
    <>
      <NavLink
        className={`story w-60 min-w-60 h-full border rounded-lg p-3 px-4 relative snap-start ${
          goldStory ? "gold" : ""
        }`}
        key={idx}
        to={`/${item.type}${item.type !== "special" ? "s" : ""}/${item.count}`}
      >
        <h1 className="text-lg font-bold">{item.title}</h1>
        <p className="text-xs mt-1">{item?.summary ? item.summary : "🔴"}</p>
        <p className="italic absolute bottom-1 left-3 story-count font-bold">
          #{item.count}
        </p>
        <p
          className={`italic absolute top-[-21px] left-3 story-year skew-x-2 font-bold p-px px-2.5 rounded-md ${
            goldStory
              ? "bg-yellow-400 text-yellow-900"
              : "bg-rose-700 text-zinc-50"
          }`}
        >
          {item.year}
        </p>
      </NavLink>
      {user?.role === 1 && (
        <>
          ↔️
          <div className="w-5 flex flex-col gap-2 items-center justify-center">
            <NavLink
              to={`/admin/update/story/${item.id}`}
              className={
                "bg-blue-700 p-1 rounded hover:bg-white hover:text-blue-700 transition-all duration-300 hover:cursor-pointer"
              }
            >
              <MdEdit />
            </NavLink>
            <button
              onClick={deleteStory}
              className={
                "bg-red-500 p-1 rounded hover:bg-white hover:text-red-500 transition-all duration-300 hover:cursor-pointer"
              }
            >
              <MdDelete />
            </button>
          </div>
        </>
      )}
    </>
  );
}
