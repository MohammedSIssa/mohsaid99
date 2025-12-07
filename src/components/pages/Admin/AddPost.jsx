import { useState } from "react";

import Post from "../../Post/Post";

import { API, DEV_API } from "../../../scripts/globals";

import { useAuth } from "../../hooks/useAuth";

export default function AddPost({ id = null, fromType = null }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [images, setImages] = useState("");
  const [special, setSpecial] = useState(false);
  const [secret, setSecret] = useState(false);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const { user } = useAuth();

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/${fromType}/${id}`
      : `${DEV_API}/${fromType}/${id}`;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setFeedback("Adding to database..");
      setLoading(true);
      if (title.trim() !== "" || body.trim() !== "" || images.trim() !== "") {
        const res = await fetch(API_CALL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.apikey}`,
          },
          body: JSON.stringify({
            title,
            body,
            storyid: +id,
            images: images.trim() !== "" ? images.trim().split(" ") : [],
            type: fromType,
            special,
            secret,
          }),
        });

        if (!res.ok) {
          throw new Error("Error saving data..");
        }
      } else {
        setFeedback("Can't add a post with the current inputs");
      }

      setBody("");
      setTitle("");
      setImages("");
      setLoading(false);
      setFeedback("Saved Data.");
    } catch (error) {
      console.error(error);
      setFeedback("Error saving data");
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <form
        method="POST"
        className="flex flex-col gap-4 p-10 min-w-[300px] border border-l-0 border-r-0 md:border md:rounded-xl max-w-[500px]"
        style={{
          backgroundColor: "var(--story-bg-color)",
          borderColor: "var(--story-border-color)",
        }}
        onSubmit={handleSubmit}
      >
        {id !== null && (
          <h1
            style={{ color: "var(--font-color)" }}
            className="text-2xl font-bold"
            dir="ltr"
          >
            Add a post for {fromType} {id}
          </h1>
        )}
        <hr style={{ borderColor: "var(--story-border-color)" }} />

        <label htmlFor="title" dir="ltr">
          Title:
        </label>
        <input
          disabled={loading}
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30 text-2xl font-bold"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
        />
        <label htmlFor="body" dir="ltr">
          Body:
        </label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          disabled={loading}
        />

        <label htmlFor="images" dir="ltr">
          Images:
        </label>
        <textarea
          name="images"
          id="images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          className="p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          dir="ltr"
          disabled={loading}
        ></textarea>
        <div className="flex gap-4 items-center justify-center" dir="ltr">
          <label htmlFor="add_story_isSpecial" dir="ltr">
            Golden Post?
          </label>
          <input
            type="checkbox"
            id="add_story_isSpecial"
            name="special"
            checked={special}
            value={special}
            onChange={(e) => setSpecial(e.target.checked)}
          />
        </div>
        <div className="flex gap-4 items-center justify-center" dir="ltr">
          <label htmlFor="add_story_isSecret" dir="ltr">
            Secret Post?
          </label>
          <input
            type="checkbox"
            id="add_story_isSecret"
            name="special"
            checked={secret}
            value={secret}
            onChange={(e) => setSecret(e.target.checked)}
          />
        </div>
        <hr className="border-zinc-800" />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border border-zinc-950 hover:border hover:border-zinc-700 hover:cursor-pointer transition-all duration-100 disabled:opacity-30"
        >
          Add Post
        </button>
        <p
          dir="ltr"
          className={
            feedback === "Saved Data."
              ? "text-green-500"
              : feedback === "Adding to database.."
              ? "text-zinc-100"
              : "text-red-500"
          }
        >
          {feedback}
        </p>
      </form>

      <p className="text-xl text-green-200 font-bold">المنشور بعض الإضافة</p>
      <hr className="border-zinc-800" />

      <Post
        title={title}
        body={body}
        images={images.trim() !== "" ? images.split(" ") : []}
        fromAdmin={true}
      />
    </div>
  );
}
