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

export default function Content({ toType = null }: { toType?: string | null }) {
  const [stories, setStories] = useState<Story[] | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);

  const [currentYear, setCurrentYear] = useState<number>(2026);

  const [loadingStories, setLoadingStories] = useState<boolean>(true);
  const [storiesError, setStoriesError] = useState(false);

  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [postsError, setPostsError] = useState(false);

  const { type, storyid } = useParams();

  const { isAdmin } = useAuth();
  const { user } = useAuth();

  function onDeleteStory(id: number) {
    setStories((stories) => stories?.filter((s) => s.count !== id) ?? null);
  }

  useEffect(() => {
    const allowedTypes = ["week", "blog", "goal", "special", "highlight"];

    async function getStories() {
      try {
        setLoadingStories(true);
        const res = await fetch(
          `${API}/stories?type=${toType ? toType : type}&year=${currentYear}`,
        );
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
    if (toType) {
      if (allowedTypes.includes(toType)) {
        getStories();
      }
    }
    if (!toType && type && allowedTypes.includes(type)) {
      getStories();
    }
  }, [type, toType, currentYear]);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoadingPosts(true);
        const res = await fetch(
          `${API}/posts?type=${toType ? toType : type}&storyid=${storyid}`,
        );
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
          setPostsError(false);

          if (!isAdmin())
            await logger(
              user?.username ?? "guest",
              `${toType ? toType : type} - ${storyid}`,
            );
        }
      } catch {
        setPostsError(true);
      } finally {
        setLoadingPosts(false);
      }
    }

    async function getHighlights() {
      console.log(`${API}/posts?type=week&year=${storyid}&special=true`);
      try {
        setLoadingPosts(true);
        const res = await fetch(
          `${API}/posts?type=week&year=${storyid}&special=true`,
        );
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
          setPostsError(false);

          if (!isAdmin())
            await logger(
              user?.username ?? "guest",
              `${toType ? toType : type} - ${storyid}`,
            );
        }
      } catch {
        setPostsError(true);
      } finally {
        setLoadingPosts(false);
      }
    }

    if (storyid !== undefined && type !== "highlight") getPosts();
    if (storyid !== undefined && type === "highlight") getHighlights();
  }, [type, storyid, isAdmin, user?.username, toType, user, currentYear]);

  const allowedTypes = ["week", "blog", "goal", "special", "highlight"];

  if (toType && !allowedTypes.includes(toType)) {
    return <NotFoundPage />;
  }

  if (!toType && type && !allowedTypes.includes(type)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        {storiesError && <h1></h1>}
        {loadingStories && (
          <div className="flex items-center justify-center p-40">
            <span className="h-20 w-20 animate-spin rounded-xl border-2 border-white/20 bg-white/20"></span>
          </div>
        )}
        {!loadingStories && (
          <Stories
            type={toType ? toType : (type ?? "")}
            stories={stories ?? []}
            onDeleteStory={onDeleteStory}
            currentYear={currentYear}
            setCurrentYear={(year: string) => setCurrentYear(parseInt(year))}
          />
        )}
        {loadingPosts && !loadingStories && storyid !== undefined && (
          <LoadingPosts />
        )}
        {!loadingStories && storyid === undefined && (
          <Land type={stories?.[0]?.type as string | undefined} />
        )}
        {postsError && <h1></h1>}
        {!loadingPosts && storyid !== undefined && (
          <Posts
            posts={posts ?? []}
            type={!toType && type !== undefined ? type : toType ? toType : ""}
            storyid={storyid !== undefined ? parseInt(storyid) : 0}
            isHighlights={type === "highlight"}
          />
        )}
      </div>
    </>
  );
}
