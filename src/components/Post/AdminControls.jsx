import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { NavLink } from "react-router-dom";

import { API, DEV_API, API_KEY } from "../../scripts/globals";

export default function AdminControls({ postId }) {
  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/posts/delete/${postId}`
      : `${DEV_API}/posts/delete/${postId}`;
  async function deletePostById() {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete post ${postId}`
    );
    console.log(confirmDelete);
    if (confirmDelete) {
      const res = await fetch(API_CALL + API_KEY, {
        method: "delete",
      });
      if (res.ok) {
        location.reload();
      }
    }
  }
  return (
    <p className="absolute left-2 px-3 py-1 top-[-50px] story-year flex gap-2 items-center">
      <NavLink
        to={`/admin/update/post/${postId}`}
        className={"bg-blue-700 rounded-lg p-2"}
      >
        <MdEdit />
      </NavLink>
      <button
        onClick={deletePostById}
        className="hover:cursor-pointer hover:brightness-120 px-2 bg-red-500 text-white rounded-lg p-2"
      >
        <MdDelete />
      </button>
    </p>
  );
}
