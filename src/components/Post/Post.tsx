import PostTitle from "./PostTitle";
import PostDate from "./PostDate";
import PostMedia from "./PostMedia";
import PostBody from "./PostBody";
import Goals from "../Goals";

import type { Post } from "../../types/Post";

import Sparkle from "../../assets/icons/sparkle.svg";
import Secret from "../../assets/icons/lock.svg";
import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import EditPost from "../EditPost";
import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import { API } from "../../variables/api";

export default function PostBox({
  title,
  id,
  time,
  images,
  body,
  dir,
  type,
  special,
  secret,
  storyid,
  isEditting = false,
  isCreating = false,
  handleEditPost,
  handleDeletePost,
}: {
  title: string;
  id?: number;
  time?: string;
  images: string[];
  body: string;
  dir: string;
  type: string;
  special: boolean;
  secret: boolean;
  storyid: number;
  isEditting?: boolean;
  isCreating?: boolean;
  handleDeletePost: (id: number) => void;
  handleEditPost?: (post: Post) => void;
}) {
  const [showEditPost, setShowEditPost] = useState(false);
  const { isAdmin, token } = useAuth();

  async function deletePostById(id: number) {
    if (!confirm("Delete post?")) return;
    const res = await fetch(`${API}/posts/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      handleDeletePost(id);
      alert("Deleted!");
    }
  }

  return (
    <div
      className={`${special ? "text-yellow-200" : ""} 
       ${secret ? "text-fuchsia-200" : ""} 
       flex post relative px-3 flex-col items-start 
       justify-start gap-4 w-full 
       md:max-w-4xl border-b-2 h-fit
       border-(--border-color) py-5 pt-10`}
    >
      {isAdmin && !isEditting && !isCreating && (
        <div className="absolute left-2 top-8 bg-(--darker-bg-color) rounded-full p-2 px-4 border border-(--border-color)/50 flex gap-2">
          <button
            className="cursor-pointer p-2 bg-(--accent-color) text-black rounded-full hover:brightness-95 transition"
            onClick={() => setShowEditPost(true)}
          >
            <img src={Edit} width={20} height={20} />
          </button>
          <button
            className="cursor-pointer p-2 bg-red-300 text-black rounded-full hover:brightness-95 transition"
            onClick={() => {
              deletePostById(id ?? 0);
            }}
          >
            <img src={Delete} width={20} height={20} />
          </button>
        </div>
      )}
      {showEditPost && isAdmin && (
        <EditPost
          id={id ?? 0}
          storyid={storyid}
          post={{
            storyid,
            title,
            body,
            images,
            dir,
            type,
            special,
            secret,
          }}
          handleEditPost={handleEditPost || (() => {})}
          setShowEditPost={setShowEditPost}
        />
      )}
      {title.trim() !== "" && <PostTitle title={title} />}
      <div className="flex gap-2 items-center justify-center">
        {id && id > 436 && <PostDate time={time ? time : ""} />}

        {special && (
          <span className="bg-yellow-300/10 border-2 border-yellow-300/20 rounded-full p-2">
            <img src={Sparkle} width={26} />
          </span>
        )}
        {secret && (
          <span className="bg-fuchsia-300/10 border-2 border-fuchsia-300/20 rounded-full p-2">
            <img src={Secret} width={26} />
          </span>
        )}
      </div>
      {type === "goal" ? (
        <Goals goals={body.split("\n")} />
      ) : isCreating || isEditting || (id && id >= 676) ? (
        <PostBody body={body} dir={dir} />
      ) : (
        <pre>{body}</pre>
      )}
      {images && images.length > 0 && <PostMedia images={images} />}
    </div>
  );
}
