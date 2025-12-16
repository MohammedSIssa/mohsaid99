import { useState, useEffect } from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import { useParams } from "react-router";
import type { Story } from "../types/Story";
import type { Post } from "../types/Post";
import LoadingPosts from "../components/Loaders/LoadingPosts";
import Land from "./Land";
import NotFoundPage from "./NotFoundPage";
import { API } from "../variables/globals";

import useAuth from "../hooks/useAuth";
import { logger } from "../variables/logger";

export default function Content() {
  const [stories, setStories] = useState<Story[] | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);

  const [loadingStories, setLoadingStories] = useState<boolean>(true);
  const [storiesError, setStoriesError] = useState(false);

  const [loadingPosts, setLoadingPosts] = useState<boolean>(true);
  const [postsError, setPostsError] = useState(false);

  const { type, storyid } = useParams();

  const { isAdmin } = useAuth();
  const { user } = useAuth();

  const allowedTypes = ["week", "blog", "goal", "special"];

  function onDeleteStory(id: number) {
    setStories((stories) => stories?.filter((s) => s.count !== id) ?? null);
  }

  useEffect(() => {
    async function getStories() {
      try {
        const res = await fetch(API + "/stories/" + type);
        if (res.ok) {
          const data = await res.json();
          setStories(data);
          setStoriesError(false);
        } else {
          setStoriesError(true);
        }
      } catch {
        setStoriesError(true);
      } finally {
        setLoadingStories(false);
      }
    }
    if (type && ["week", "blog", "goal", "special"].includes(type)) {
      getStories();
    }
  }, [type]);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoadingPosts(true);
        const res = await fetch(API + "/posts/" + type + "/" + storyid);
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
          setPostsError(false);

          if (!isAdmin())
            await logger(user?.username ?? "guest", `${type} - ${storyid}`);
        }
      } catch {
        setPostsError(true);
      } finally {
        setLoadingPosts(false);
      }
    }
    if (storyid !== undefined) getPosts();
  }, [type, storyid]);

  if (type && !allowedTypes.includes(type)) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
      {loadingStories && <h1></h1>}
      {storiesError && <h1></h1>}
      {!loadingStories && (
        <Stories stories={stories ?? []} onDeleteStory={onDeleteStory} />
      )}
      {loadingPosts && storyid !== undefined && <LoadingPosts />}
      {storyid === undefined && (
        <Land
          type={
            stories !== null && typeof stories[0].type === "string"
              ? stories[0].type
              : undefined
          }
        />
      )}
      {postsError && <h1></h1>}
      {!loadingPosts && storyid !== undefined && (
        <Posts
          posts={posts ?? []}
          type={type !== undefined ? type : ""}
          storyid={storyid !== undefined ? parseInt(storyid) : 0}
        />
      )}
    </div>
  );
}
