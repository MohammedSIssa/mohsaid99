import { API } from "../../variables/globals";
import PostBody from "./Body";
import PostTime from "./Time";
import PostTitle from "./Title";
import PostImages from "./Images";
import type { Post } from "../../types/Post";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Goals from "../Goals";
import EditPost from "../../pages/Admin/EditPost";
import { NavLink } from "react-router";

import { VscSparkleFilled } from "react-icons/vsc";
import { TbEdit } from "react-icons/tb";
import { FaTimes, FaLock } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";

export default function PostBox({
  post,
  isPerview = false,
  isHighlight,
}: {
  post: Post;
  isPerview?: boolean;
  isHighlight: boolean;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { isAdmin, isMonmon, user } = useAuth();
  const isVisible = post.secret ? isAdmin() || isMonmon() : true;

  async function deletePost() {
    try {
      const confirmed = window.confirm(
        `Are you sure you want to delete post #${post.id}?`,
      );
      if (!confirmed) return;

      const res = await fetch(
        `${API}/posts?type=${post.type}&storyid=${post.storyid}&id=${post.id}`,
        {
          method: "DELETE",
          headers: { authorization: `Bearer ${user?.apikey}` },
        },
      );

      if (res.ok) alert("Deleted post!");
      else alert("Could not delete post!");
    } catch {
      alert("Could not delete post!");
    }
  }

  // === Class Names ===
  const baseClass =
    "post relative w-full max-w-full flex-col gap-2 border-t-2 border-b-2 p-3 py-5 shadow-xl shadow-black/10 backdrop-blur-xs md:w-fit md:max-w-[700px] md:min-w-[350px] md:rounded-xl md:border-2 lg:max-w-[900px]";

  const specialClass =
    post.special && !isHighlight
      ? "special border-yellow-200/70 bg-[var(--golden-post-bg)]/30 text-yellow-200"
      : "";

  const secretClass = post.secret
    ? "secret border-fuchsia-300/60 bg-fuchsia-700/20 text-[var(--font-color)]"
    : "";

  const normalClass =
    !post.secret && !post.special
      ? "border-[var(--border-color)]/50 bg-[var(--primary-color)]/20"
      : isHighlight
        ? "border-[var(--border-color)]/50 bg-[var(--primary-color)]/20"
        : "";

  const containerClass = `${isVisible ? "flex" : "hidden"} ${specialClass} ${secretClass} ${normalClass} ${baseClass}`;

  return (
    <div className={containerClass}>
      {/* Top icons */}
      {post.special && !isHighlight && (
        <span className="absolute top-2 left-2">
          <VscSparkleFilled />
        </span>
      )}
      {post.secret && (
        <span className="absolute top-2 left-2">
          <FaLock />
        </span>
      )}
      {isHighlight && (
        <NavLink
          to={`/week/${post.storyid}`}
          className="year absolute top-2 left-2 font-bold"
        >
          #{post.storyid}
        </NavLink>
      )}

      {/* Post content */}
      {!isEditing ? (
        <>
          {post.title?.trim() && <PostTitle title={post.title} />}
          {post?.id && post?.id > 436 && !isPerview && post.type !== "goal" && (
            <PostTime time={post.iat ?? ""} />
          )}
          {post.type !== "goal" ? (
            <PostBody
              body={post.body ?? ""}
              dir={post.dir ?? ""}
              showAllText={post.images?.length === 0}
            />
          ) : (
            <Goals goals={post.body.split("\n")} />
          )}
          {post?.images && post.images?.length > 0 && (
            <PostImages images={post.images} />
          )}
        </>
      ) : (
        <EditPost post={post} />
      )}

      {/* Admin controls */}
      {isAdmin() && !isHighlight && !isPerview && (
        <div className="absolute -top-15 left-2 flex gap-2 rounded-lg border-2 border-(--border-color)/20 bg-(--primary-color)/20 p-2 px-3 shadow-xl shadow-black/10 [&_button]:cursor-pointer [&_button]:transition-all [&_button]:duration-200 [&_button]:hover:brightness-90">
          <button
            className="place-items-center rounded-lg bg-blue-600 p-2 text-white backdrop-blur-2xl"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <FaTimes size={18} /> : <TbEdit size={18} />}
          </button>
          <button
            className="place-items-center rounded-lg bg-red-500 p-2 text-white backdrop-blur-2xl"
            onClick={deletePost}
          >
            <HiTrash size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
