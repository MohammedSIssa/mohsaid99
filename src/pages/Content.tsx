import { useParams } from "react-router";
import { useType } from "../hooks/useType";
import { useEffect, useState } from "react";
import { useFavicon } from "../hooks/useFavicon";
import { API } from "../variables/api";
import type { Post } from "../types/Post";
import Spinner from "../assets/icons/spinner.svg";
import PostBox from "../components/Post/Post";
import useAuth from "../hooks/useAuth";
import CreatePost from "../components/CreatePost";
import Create from "../assets/icons/create.svg";

import InvalidType from "./InvalidType";

import { ALLOWED_TYPES } from "../variables/allowedTypes";

import { logger } from "../variables/logger";

export default function Content() {
  const { type, count } = useParams();
  const { setType } = useType();

  const { isAdmin, user, token } = useAuth();

  const [showCreatePost, setShowCreatePost] = useState(false);

  function handleCreatePost(post: Post) {
    setContent((prev) => {
      if (prev === null) return [post];
      return type === "week" ? [post, ...prev] : [...prev, post];
    });
  }

  useEffect(() => {
    if (!isAdmin && type) {
      async function log() {
        await logger(
          user?.username ?? "guest - ",
          type && count ? `${type} - ${count}` : "Home",
        );
      }
      log();
    }
  }, [type, count]);

  useEffect(() => {
    if (type) {
      setType(type);
    }
  }, [type, setType]);

  const [content, setContent] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState(false);

  // get story posts;
  useEffect(() => {
    // const sleep = (ms: number) =>
    //   new Promise((resolve) => setTimeout(resolve, ms));
    async function getContent() {
      try {
        setLoading(true);
        setContent(null);
        // ⏳ simulate network delay
        // await sleep(2000);
        const res = await fetch(`${API}/posts?type=${type}&count=${count}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setContent(data);
          setLoading(false);
          setError("");
        } else {
          setLoading(false);
          setError("Something went wrong.");
          setContent(null);
        }
      } catch {
        setContent(null);
        setLoading(false);
        setError("Server Error");
      }
    }

    if (ALLOWED_TYPES.includes(type as any)) {
      getContent();
    } else {
      setInvalid(true);
    }
  }, [type, count, token]);

  useFavicon("/mohsaid99/favicons/" + type + ".svg");

  if (invalid) return <InvalidType />;

  if (loading) {
    return (
      <div className="flex flex-1 h-dvh items-center justify-center">
        <div className="animate-spin w-7 h-7">
          <img src={Spinner} alt="spinning animation" width={28} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        Error: {error}
      </div>
    );
  }

  if (content && content.length > 0) {
    return (
      <div className="flex flex-col md:pr-16 min-h-screen items-center justify-center py-25">
        {isAdmin && (
          <button
            className="bg-(--accent-color) rounded-full flex items-center justify-center w-[60px] h-[60px]"
            onClick={() => setShowCreatePost(!showCreatePost)}
          >
            {!showCreatePost ? <img src={Create} width={30} /> : null}
          </button>
        )}

        {showCreatePost && isAdmin && (
          <CreatePost
            setShowCreatePost={setShowCreatePost}
            handleCreatePost={handleCreatePost}
            storyid={content[0].storyid}
          />
        )}

        {!["special", "blog"].includes(content[0].type) && (
          <div
            className={
              content.some((item) => item.title?.trim() !== "")
                ? "p-5 md:p-15 border-b border-(--border-color) w-full mb-30"
                : "hidden"
            }
          >
            <h1 className="text-2xl font-bold mb-8">مخلص الأحداث</h1>

            <div className="flex gap-2 w-full max-w-[320px] flex-wrap">
              {["week", "goal"].includes(content[0].type) &&
                [...content].reverse().map((post) => (
                  <div
                    className={`flex-1 min-w-fit ${post.title?.trim() === "" ? "hidden" : "flex items-center justify-center"} 
                  ${
                    post.special
                      ? "bg-yellow-900 border-2 border-yellow-400 text-yellow-300"
                      : "bg-(--darker-bg-color) border-2 border-(--border-color)"
                  } 
                  p-2 px-3 rounded-md`}
                  >
                    <h1>{post.title}</h1>
                  </div>
                ))}

              {["projects"].includes(content[0].type) &&
                content.map((post) => (
                  <div
                    className={`flex-1 min-w-fit ${post.title?.trim() === "" ? "hidden" : "flex items-center justify-center"} 
                  ${
                    post.special
                      ? "bg-yellow-900 border-2 border-yellow-400 text-yellow-300"
                      : "bg-(--darker-bg-color) border-2 border-(--border-color)"
                  } 
                  p-2 px-3 rounded-md`}
                  >
                    <h1>{post.title}</h1>
                  </div>
                ))}
            </div>
          </div>
        )}

        {content.map((post) => (
          <PostBox
            storyid={post?.storyid ?? 0}
            id={post?.id ?? 0}
            body_html={post?.body_html ?? ""}
            key={post.id}
            title={post.title ?? ""}
            time={post.iat ?? ""}
            images={post?.images ?? []}
            body={post.body ?? ""}
            dir={post.dir}
            type={post.type}
            special={post.special ?? false}
            secret={post.secret ?? false}
            handleEditPost={(updatedPost) =>
              setContent((prev) =>
                prev
                  ? prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
                  : prev,
              )
            }
            handleDeletePost={(id) =>
              setContent(content.filter((p) => p.id !== id))
            }
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      {isAdmin && (
        <button
          className="bg-(--accent-color) rounded-full flex items-center justify-center w-[60px] h-[60px]"
          onClick={() => setShowCreatePost(!showCreatePost)}
        >
          {!showCreatePost ? <img src={Create} width={30} /> : null}
        </button>
      )}
      {showCreatePost && isAdmin && (
        <CreatePost
          setShowCreatePost={setShowCreatePost}
          handleCreatePost={handleCreatePost}
          storyid={Number(count)}
        />
      )}
    </div>
  );
}
