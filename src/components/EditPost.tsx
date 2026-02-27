// Todo: Add switching post type and count.

import { API } from "../variables/api";
import useAuth from "../hooks/useAuth";
import PostBox from "./Post/Post";
import { useState, type SetStateAction } from "react";
import type { Post } from "../types/Post";
import { useType } from "../hooks/useType";
import Exit from "../assets/icons/exit.svg";

export default function EditPost({
  id,
  storyid,
  post,
  handleEditPost,
  setShowEditPost,
}: {
  id: number;
  storyid: number;
  post: Post;
  handleEditPost: (post: Post) => void;
  setShowEditPost: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [body, setBody] = useState(post?.body ?? "");
  const [images, setImages] = useState<string[] | null>(post?.images ?? null);
  const [special, setSpecial] = useState(post?.special ?? false);
  const [secret, setSecret] = useState(post?.secret ?? false);
  const [dir, setDir] = useState(post?.dir ?? "rtl");
  const [submitting, setSubmitting] = useState(false);

  const { token } = useAuth();
  const { type } = useType();

  const typess: Record<string, string> = {
    "": "",
    week: "الأسابيع",
    blog: "المدونة",
    projects: "المشاريع",
    special: "الخاص",
    goal: "الأهداف",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newPost: Post = {
      id,
      title,
      body,
      images,
      storyid,
      type: type ?? "week",
      special,
      secret,
      dir,
    };

    try {
      setSubmitting(true);
      const res = await fetch(`${API}/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newPost,
        }),
      });

      if (res.ok) {
        setTitle("");
        setBody("");
        handleEditPost(newPost);
        setShowEditPost(false);
      } else {
        alert("Failed to edit post.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex edit-post flex-col overflow-y-auto z-900 md:flex-row md:justify-center pt-10 bg-(--darker-bg-color) gap-5 fixed top-0 left-0 h-dvh w-full">
      <form
        onSubmit={handleSubmit}
        className="flex relative min-w-[450px] max-w-full min-h-fit overflow-y-auto pt-15 border border-(--border-color) h-fit bg-(--bg-color) flex-col gap-4 p-5"
      >
        <small>سكشن {typess[type ?? ""]}</small>

        <button
          className="absolute top-4 right-4 cursor-pointer hover:brightness-110 transition"
          onClick={() => setShowEditPost(false)}
        >
          <img src={Exit} width={25} height={25} />
        </button>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="العنوان"
          className="p-2 rounded border border-(--border-color)"
          disabled={submitting}
        />
        <select
          value={dir}
          className="p-2 rounded border border-(--border-color)"
          onChange={(e) => setDir(e.target.value)}
        >
          <option className="bg-(--darker-bg-color)" value="rtl">
            Arabic
          </option>
          <option className="bg-(--darker-bg-color)" value="ltr">
            English
          </option>
        </select>
        <textarea
          dir={dir}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="المحتوى"
          className="p-2 rounded border border-(--border-color)"
          rows={5}
          disabled={submitting}
        />
        <textarea
          dir={"ltr"}
          value={images && images.length > 0 ? images.join(", ") : ""}
          onChange={(e) =>
            setImages(e.target.value.split(", ").map((img) => img))
          }
          placeholder="Images (comma separated)"
          className="p-2 rounded border border-(--border-color)"
          rows={5}
          disabled={submitting}
        />
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setSpecial(!special)}
        >
          ✨
          <div
            className={`w-10 h-5 rounded-full transition-colors duration-300 ${
              special ? "bg-(--accent-color)" : "bg-gray-400/50"
            } relative`}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 absolute top-0.5 ${
                special ? "left-5" : "left-0.5"
              }`}
            ></span>
          </div>
          <span className="font-semibold text-sm">
            {special ? "Special" : "Normal"}
          </span>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setSecret(!secret)}
        >
          🔒
          <div
            className={`w-10 h-5 rounded-full transition-colors duration-300 ${
              secret ? "bg-(--accent-color)" : "bg-gray-400/50"
            } relative`}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 absolute top-0.5 ${
                secret ? "left-5" : "left-0.5"
              }`}
            ></span>
          </div>
          <span className="font-semibold text-sm">
            {secret ? "Secret" : "Normal"}
          </span>
        </div>
        <button
          type="submit"
          className={`bg-(--accent-color) font-bold p-2 rounded hover:brightness-95 text-black cursor-pointer transition ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={submitting}
        >
          {submitting ? "جار الحفظ.." : "حفظ"}
        </button>
      </form>
      <PostBox
        title={title}
        body={body}
        dir={dir}
        storyid={storyid}
        images={images ? images : []}
        type={type ? type : ""}
        special={special}
        secret={secret}
        isEditting={true}
        handleDeletePost={() => {}}
      />
    </div>
  );
}
