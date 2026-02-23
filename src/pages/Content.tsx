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

import { logger } from "../variables/logger";

export default function Content() {
  const { type, count } = useParams();
  const { setType } = useType();

  const { isAdmin, user, token } = useAuth();

  const [showCreatePost, setShowCreatePost] = useState(false);

  function handleCreatePost(post: Post) {
    setContent((prev) => {
      if (prev === null) return [post];
      return [post, ...prev];
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

    getContent();
  }, [count]);

  useFavicon("/mohsaid99/favicons/" + type + ".svg");

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

        {content.map((post) => (
          <PostBox
            storyid={post?.storyid ?? 0}
            id={post?.id ?? 0}
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
    </div>
  );
}
