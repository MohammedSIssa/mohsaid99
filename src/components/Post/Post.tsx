import PostBody from "./Body";
import PostTime from "./Time";
import PostTitle from "./Title";
import PostImages from "./Images";
import type { Post } from "../../types/Post";
import useAuth from "../../hooks/useAuth";
import Goals from "../Goals";

import { API } from "../../variables/globals";

import { TbEdit } from "react-icons/tb";

import { FaTimes } from "react-icons/fa";

import { HiTrash } from "react-icons/hi2";

import EditPost from "../../pages/Admin/EditPost";

import { useState } from "react";

export default function PostBox({
  post,
  isPerview = false,
}: {
  post: Post;
  isPerview?: boolean;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { isAdmin, isMonmon, user } = useAuth();
  const isVisible = post.secret && (isAdmin() || isMonmon());

  async function deletePost() {
    try {
      const confirm = window.confirm(
        `Are you sure you want to fetch(${"/posts/" + post.type + "/" + post.storyid + "/" + post.id})`,
      );
      if (confirm) {
        const res = await fetch(
          `${API}/posts?type=${post.type}&storyid=${post.storyid}&id=${post.id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer: ${user?.apikey}`,
            },
          },
        );

        if (res.ok) {
          alert("Deleted post!");
        }
      }
    } catch {
      alert("Could not delete post!");
    }
  }

  return (
    <div
      className={`${isVisible ? "flex" : !post.secret ? "flex" : "hidden"} ${post.special ? "special border-yellow-300/30 bg-yellow-300/20 text-yellow-200" : ""} ${post.secret ? "secret text-fuchsia-300" : ""} post relative w-full max-w-full flex-col gap-2 border-t-2 border-b-2 border-white/20 bg-white/10 p-3 py-5 shadow-xl shadow-black/10 backdrop-blur-2xl md:w-fit md:max-w-[700px] md:min-w-[350px] md:rounded-xl md:border-2 lg:max-w-[900px]`}
    >
      {!isEditing && (
        <>
          <PostTitle title={post?.title ?? ""} />
          {(post?.id ?? 500) > 436 && !isPerview && post?.type !== "goal" && (
            <PostTime time={post.iat ?? ""} />
          )}
          {post.type !== "goal" && (
            <PostBody
              body={post?.body ?? ""}
              showAllText={post?.images?.length === 0}
            />
          )}
          {post.type === "goal" && <Goals goals={post.body.split("\n")} />}
          {post?.images && post?.images.length > 0 && (
            <PostImages images={post?.images ?? []} />
          )}
        </>
      )}
      {isEditing && <EditPost post={post} />}
      {isAdmin() && !isPerview && (
        <div className="absolute -top-15 left-2 flex gap-2 rounded-lg border-2 border-white/20 bg-black/20 p-2 px-3 shadow-xl shadow-black/10 [&_button]:cursor-pointer [&_button]:transition-all [&_button]:duration-200 [&_button]:hover:brightness-90">
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
