import { API } from "../../variables/globals";
import PostBody from "./Body";
import PostTime from "./Time";
import PostTitle from "./Title";
import PostImages from "./Images";
import type { Post } from "../../types/Post";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Goals from "../Goals";
import EditPost from "../../pages/Admin/EditPost";
import { NavLink } from "react-router";

import { VscSparkleFilled } from "react-icons/vsc";
import { TbEdit } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";
import { FaLock } from "react-icons/fa";

import useSettings from "../../hooks/useSettings";

export default function PostBox({
  post,
  isPerview = false,
  isHighlight,
}: {
  post: Post;
  isPerview?: boolean;
  isHighlight: boolean;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { isAdmin, isMonmon, user } = useAuth();
  const isVisible = post.secret && (isAdmin() || isMonmon());

  const { settings } = useSettings();
  const [theme, setTheme] = useState(
    "border-white/40 from-white/10 to-white/5",
  );

  useEffect(() => {
    function setThemee() {
      if (settings?.isHigh) {
        setTheme("bg-linear-to-b border-white/40 from-white/10 to-white/5");
      } else {
        setTheme("border-white/40 bg-white/10");
      }
    }
    setThemee();
  }, [settings?.isHigh]);
  async function deletePost() {
    try {
      const confirm = window.confirm(
        `Are you sure you want to fetch("/posts?type=${post.type}&storyid=${post.storyid}&id=${post.id}"`,
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
      // prettier-ignore
      className={
        `${isVisible ? "flex" : !post.secret ? "flex" : "hidden"} 
         ${post.special && !isHighlight ? "special bg-linear-to-b border-yellow-200/70 from-yellow-400/20 to-yellow-400/10 text-yellow-200" : ""}
         ${post.secret ? "secret border-fuchsia-300/60 from-fuchsia-300/20 to-fuchsia-300/10 text-fuchsia-300" : ""} 
         ${!post.secret && !post.special ? theme : 
          isHighlight ? theme : ""} 
          post relative w-full max-w-full flex-col gap-2 border-t-2 border-b-2 
           p-3 py-5 
          shadow-xl shadow-black/10 backdrop-blur-xs 
          md:w-fit md:max-w-[700px] md:min-w-[350px] 
          md:rounded-xl md:border-2 lg:max-w-[900px]`
        }
    >
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
        >{`#${post.storyid}`}</NavLink>
      )}
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
      {isAdmin() && !isHighlight && !isPerview && (
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
