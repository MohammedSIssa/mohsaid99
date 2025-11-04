import { useState, useEffect } from "react";
import Post from "../../../components/Post/Post";

import { useParams } from "react-router-dom";

import { API, DEV_API } from "../../../scripts/globals";

export default function UpdatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [storyid, setStoryid] = useState(0);
  const [images, setImages] = useState("");
  const [type, setType] = useState("week");
  const [special, setSpecial] = useState(false);
  const [secret, setSecret] = useState(false);

  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/posts/${id}`
      : `${DEV_API}/posts/${id}`;

  useEffect(() => {
    async function fetchPostData() {
      setFeedback("Fetching post from database..");
      setIsLoading(true);

      const res = await fetch(API_CALL);
      const data = await res.json();

      setTitle(data.title);
      setBody(data.body);
      setStoryid(data.storyid);
      setType(data.type);
      setSpecial(data.special);
      setSecret(data.secret);

      setFeedback("Fetched Post!");
      setIsLoading(false);
      setImages(data.images.join(" "));
    }

    fetchPostData();
  }, [id, API_CALL]);

  async function updatePost(e) {
    e.preventDefault();
    setFeedback("Updating post..");
    setIsLoading(true);
    console.log({
      title,
      body,
      storyid,
      type,
      images: images.trim() !== "" ? images.split(" ") : [],
    });
    const API_CALL =
      import.meta.env.MODE !== "development"
        ? `${API}/update/posts/${id}`
        : `${DEV_API}/update/posts/${id}`;
    const res = await fetch(API_CALL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        body,
        storyid,
        type,
        images: images.trim() !== "" ? images.split(" ") : [],
        special,
        secret,
      }),
    });

    if (!res.ok) {
      setFeedback("Error happened");
      throw new Error("Unable to update post");
    } else {
      setFeedback("Post updated successfully!");
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <form
        onSubmit={updatePost}
        className="flex flex-col gap-4 p-10 min-w-[300px] border border-zinc-700 bg-zinc-900 rounded-xl max-w-[600px]"
        style={{
          backgroundColor: "var(--story-bg-color)",
          borderColor: "var(--story-border-color)",
        }}
      >
        <p className="text-xl text-green-200 font-bold">فورم تحديث المنشورات</p>
        <hr style={{ borderColor: "var(--story-border-color)" }} />
        <div className="flex gap-5 items-center flex-wrap" dir="ltr"></div>

        <label htmlFor="post_type" dir="ltr">
          Type: {type}
        </label>
        <select
          id="post_type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-zinc-800 text-zinc-50 p-2 focus:border focus:outline-0 focus:border-zinc-600"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          disabled={isLoading}
        >
          <option value="week">Week</option>
          <option value="goal">Goal</option>
          <option value="blog">Blog</option>
          <option value="special">Special</option>
          <option value="stat">Stats</option>
        </select>

        <label htmlFor="story_id" dir="ltr">
          Story ID:{" "}
        </label>
        <input
          type="number"
          id="story_id"
          value={storyid}
          onChange={(e) => setStoryid(e.target.value)}
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30"
          disabled={isLoading}
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
        />

        <label htmlFor="post_title" dir="ltr">
          Title:{" "}
        </label>
        <input
          type="text"
          name="title"
          id="post_title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30 font-bold text-xl"
          disabled={isLoading}
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
        />
        <label htmlFor="post_body" dir="ltr">
          Body:{" "}
        </label>
        <textarea
          type="text"
          name="body"
          id="post_body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30 min-h-fit"
          disabled={isLoading}
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
        ></textarea>

        <label htmlFor="post_images" dir="ltr">
          Images:{" "}
        </label>
        <textarea
          dir="ltr"
          type="text"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30 min-h-fit"
          disabled={isLoading}
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          id="post_images"
        ></textarea>
        <div className="flex gap-4 items-center justify-center" dir="ltr">
          <label htmlFor="add_story_isSpecial" dir="ltr">
            Golden Post?
          </label>
          <input
            type="checkbox"
            id="add_post_special"
            name="special"
            checked={special ?? false}
            value={special ?? false}
            onChange={(e) => setSpecial(e.target.checked)}
          />
        </div>
        <div className="flex gap-4 items-center justify-center" dir="ltr">
          <label htmlFor="add_story_isSpecial" dir="ltr">
            Secret Post?
          </label>
          <input
            type="checkbox"
            id="add_post_secret"
            name="special"
            checked={secret ?? false}
            value={secret ?? false}
            onChange={(e) => setSecret(e.target.checked)}
          />
        </div>
        <hr className="border-zinc-800" />
        <button
          onClick={updatePost}
          disabled={isLoading}
          className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border border-zinc-950 hover:border hover:border-zinc-700 hover:cursor-pointer transition-all duration-100"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
        >
          Update
        </button>
        <p dir="ltr">{feedback}</p>
      </form>

      <p className="text-xl text-green-200 font-bold">المنشور بعض التعديلات</p>
      <hr className="border-zinc-800" />

      {isLoading || (
        <Post
          title={title}
          body={body}
          images={images.trim() !== "" ? images.split(" ") : []}
          fromAdmin={true}
        />
      )}
    </div>
  );
}
