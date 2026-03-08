import { API } from "../variables/api";
import useAuth from "../hooks/useAuth";
import PostBox from "./Post/Post";
import { useState, type SetStateAction } from "react";
import type { Post } from "../types/Post";
import { useType } from "../hooks/useType";
import Exit from "../assets/icons/exit.svg";
import Marked from "./Marked";

import Preview from "../assets/icons/preview.svg";
import Text from "../assets/icons/text.svg";
import ShowPost from "../assets/icons/post.svg";
import Edit from "../assets/icons/edit.svg";

export default function CreatePost({
  storyid,
  handleCreatePost,
  setShowCreatePost,
}: {
  storyid: number;
  handleCreatePost: (post: Post) => void;
  setShowCreatePost: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [images, setImages] = useState<string[] | null>(null);
  const [special, setSpecial] = useState(false);
  const [secret, setSecret] = useState(false);
  const [dir, setDir] = useState("rtl");
  const [submitting, setSubmitting] = useState(false);

  const [preview, setPreview] = useState(false);
  const [showPost, setShowPost] = useState(false);

  const { token } = useAuth();
  const { type } = useType();

  const typess: Record<string, string> = {
    "": "",
    week: "الأسبوع",
    blog: "المدونة",
    projects: "المشروع",
    special: "الخاص",
    goal: "الهدف",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newPost: Post = {
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
      const res = await fetch(`${API}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newPost,
        }),
      });

      if (res.ok) {
        const theNewPost = await res.json();
        setTitle("");
        setBody("");
        handleCreatePost(theNewPost.rows[0]);
        setShowCreatePost(false);
      } else {
        alert("Failed to create post.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    } finally {
      setSubmitting(false);
    }
  }

  if (showPost) {
    return (
      <div className="z-999 pr-24 px-5 bg-(--bg-color) fixed overflow-y-auto inset-0">
        <div className="absolute flex gap-2 top-4 left-4">
          <button
            className="bg-(--bg-color) p-2 border-2 border-(--border-color) rounded-lg cursor-pointer"
            onClick={() => setShowPost(false)}
          >
            <img src={Edit} alt="Preview" width={20} />
          </button>
          <button
            className="bg-(--bg-color) p-2 border-2 border-(--border-color) rounded-lg cursor-pointer"
            onClick={() => setShowCreatePost(false)}
          >
            <img src={Exit} alt="Exit" width={20} />
          </button>
        </div>
        <PostBox
          title={title}
          body={body}
          storyid={storyid}
          dir={dir}
          images={images ? images : []}
          type={type ? type : ""}
          special={special}
          secret={secret}
          isCreating={true}
          handleDeletePost={() => {}}
        />
      </div>
    );
  }

  return (
    <div className="flex px-0 md:px-5 overflow-y-auto z-999 md:flex-row md:justify-center bg-(--darker-bg-color) gap-5 fixed inset-0 w-full">
      <form
        className="flex relative flex-col lg:flex-row min-h-[500px] w-full h-full max-w-full overflow-y-auto gap-4 p-5"
        onSubmit={handleSubmit}
      >
        <div className="w-full lg:w-1/4 h-full md:h-full border-2 border-(--border-color) bg-(--bg-color) rounded-lg p-2 md:p-4 lg:p-6 flex flex-col gap-2">
          <small>
            {typess[type ?? ""]} رقم {storyid}
          </small>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="العنوان"
            className="p-1 px-2 focus:outline-0 focus:border-(--accent-color) rounded-md border-2 border-(--border-color)"
            disabled={submitting}
          />

          <select
            value={dir}
            className="p-1 px-2 rounded border-2 focus:outline-0 focus:border-(--accent-color) border-(--border-color)"
            onChange={(e) => setDir(e.target.value)}
          >
            <option className="bg-(--darker-bg-color)" value="rtl">
              عربي
            </option>
            <option className="bg-(--darker-bg-color)" value="ltr">
              انجلش
            </option>
          </select>

          <textarea
            dir={"ltr"}
            value={images && images.length > 0 ? images.join(", ") : ""}
            onChange={(e) =>
              setImages(e.target.value.split(", ").map((img) => img))
            }
            placeholder="Images (comma separated)"
            className="p-1 px-2 rounded flex-1 focus:outline-0 focus:border-(--accent-color) border-2 border-(--border-color)"
            rows={5}
            disabled={submitting}
          />

          <div className="flex gap-2 justify-between">
            <div
              className="flex flex-1 justify-center bg-(--darker-bg-color) p-2 px-3 border-2 border-(--border-color) rounded-lg items-center gap-3 cursor-pointer select-none"
              onClick={() => setSpecial(!special)}
            >
              ✨
              <div
                className={`w-10 h-5 rounded-lg transition-colors duration-300 ${
                  special ? "bg-(--accent-color)" : "bg-gray-400/50"
                } relative`}
              >
                <span
                  className={`block w-4 h-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 absolute top-0.5 ${
                    special ? "left-5" : "left-0.5"
                  }`}
                ></span>
              </div>
              <span className="font-semibold text-sm">
                {special ? "Special" : "Not"}
              </span>
            </div>
            <div
              className="flex flex-1 justify-center bg-(--darker-bg-color) p-2 px-3 border-2 border-(--border-color) rounded-lg items-center gap-3 cursor-pointer select-none"
              onClick={() => setSecret(!secret)}
            >
              🔒
              <div
                className={`w-10 h-5 rounded-lg transition-colors duration-300 ${
                  secret ? "bg-(--accent-color)" : "bg-gray-400/50"
                } relative`}
              >
                <span
                  className={`block w-4 h-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 absolute top-0.5 ${
                    secret ? "left-5" : "left-0.5"
                  }`}
                ></span>
              </div>
              <span className="font-semibold text-sm">
                {secret ? "Secret" : "Not"}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className={`bg-(--accent-color) font-bold p-2 rounded hover:brightness-95 text-black cursor-pointer transition ${
              submitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={submitting}
          >
            {submitting ? "جار الإنشاء.." : "أنشئ المنشور"}
          </button>
        </div>

        <div className="w-full  min-h-[650px] relative overflow-y-auto lg:w-3/4 h-full md:h-full border-2 border-(--border-color) bg-(--bg-color) rounded-lg p-2 md:p-4 lg:p-6 flex flex-col gap-2">
          <div
            onClick={() => setPreview(!preview)}
            className="absolute select-none top-2.5 right-6 p-2 bg-(--darker-bg-color) flex items-center justify-center rounded-lg border-2 border-(--border-color)"
          >
            <img
              src={preview ? Text : Preview}
              title={`${preview ? "عرض النص الأصلي" : "عرض النص مارك داون"}`}
              width={17}
              height={17}
            />
          </div>

          <div
            onClick={() => setShowPost(true)}
            className="absolute top-2.5 right-16.5 p-2 bg-(--darker-bg-color) flex items-center justify-center rounded-lg border-2 border-(--border-color)"
          >
            <img
              src={ShowPost}
              title="عرض كيف سيبدو المنشور بعد الإنشاء"
              width={17}
              height={17}
            />
          </div>

          {!preview && (
            <textarea
              dir={dir}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={`${dir === "rtl" ? "المحتوى" : "Content"}`}
              className="p-2 rounded-lg mt-8 bg-(--darker-bg-color) focus:outline-0 w-full h-full"
              rows={5}
              disabled={submitting}
            />
          )}
          {preview && (
            <div className="w-full h-full p-2 py-6">
              <div className={`not-prose block w-full ${dir}`} dir={dir}>
                <Marked content={body} dir={dir} />
              </div>
            </div>
          )}
        </div>

        <button
          className="absolute top-8 left-8 cursor-pointer hover:brightness-110 transition"
          onClick={() => setShowCreatePost(false)}
        >
          <img src={Exit} width={25} height={25} />
        </button>
      </form>
    </div>
  );
}
