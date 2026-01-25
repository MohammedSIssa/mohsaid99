import { useState, useEffect, useCallback, useMemo } from "react";
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

  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );

  const [loadingStories, setLoadingStories] = useState<boolean>(true);
  const [storiesError, setStoriesError] = useState(false);

  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [postsError, setPostsError] = useState(false);

  const { type, storyid } = useParams();

  const { isAdmin, user } = useAuth();

  // Memoize complex computations
  const currentType = useMemo(() => toType ?? type ?? "", [toType, type]);

  const shouldShowStories = useMemo(() => !loadingStories, [loadingStories]);
  const shouldShowPosts = useMemo(
    () => !loadingPosts && storyid !== undefined,
    [loadingPosts, storyid],
  );
  const shouldShowLand = useMemo(
    () => !loadingStories && storyid === undefined,
    [loadingStories, storyid],
  );
  const shouldShowPostsLoading = useMemo(
    () => loadingPosts && !loadingStories && storyid !== undefined,
    [loadingPosts, loadingStories, storyid],
  );

  const parsedStoryId = useMemo(
    () => (storyid !== undefined ? parseInt(storyid) : 0),
    [storyid],
  );
  const isHighlightType = useMemo(() => type === "highlight", [type]);

  const onDeleteStory = useCallback((id: number) => {
    setStories((stories) => stories?.filter((s) => s.count !== id) ?? null);
  }, []);

  useEffect(() => {
    const ALLOWED_TYPES = ["week", "blog", "goal", "special", "highlight"];

    async function getStories() {
      try {
        setLoadingStories(true);
        const res = await fetch(
          `${API}/stories?type=${currentType}&year=${currentYear}`,
        );
        if (res.ok) {
          const data = await res.json();
          setStories(data);
          setStoriesError(false);
        } else {
          setStoriesError(true);
        }
      } catch (error) {
        setStoriesError(true);
        console.error("Failed to load stories:", error);
      } finally {
        setLoadingStories(false);
      }
    }

    if (ALLOWED_TYPES.includes(currentType)) {
      getStories();
    }
  }, [currentType, currentYear]);

  useEffect(() => {
    async function fetchPosts(endpoint: string) {
      try {
        setLoadingPosts(true);
        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
          setPostsError(false);

          if (!isAdmin()) {
            await logger(
              user?.username ?? "guest",
              `${currentType} - ${storyid}`,
            );
          }
        }
      } catch (error) {
        setPostsError(true);
        console.error("Failed to load posts:", error);
      } finally {
        setLoadingPosts(false);
      }
    }

    if (storyid === undefined) return;

    const endpoint = isHighlightType
      ? `${API}/posts?type=week&year=${storyid}&special=true`
      : `${API}/posts?type=${currentType}&storyid=${storyid}`;

    fetchPosts(endpoint);
  }, [storyid, currentType, isHighlightType, isAdmin, user?.username]);

  const ALLOWED_TYPES = ["week", "blog", "goal", "special", "highlight"];

  if (toType && !ALLOWED_TYPES.includes(toType)) {
    return <NotFoundPage />;
  }

  if (!toType && type && !ALLOWED_TYPES.includes(type)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        {storiesError && (
          <div className="p-4 text-red-500">Failed to load stories</div>
        )}
        {loadingStories && (
          <div className="flex items-center justify-center p-40">
            <span className="h-20 w-20 animate-spin rounded-xl border-2 border-(--border-color)/20 bg-(--primary-color)/20"></span>
          </div>
        )}
        {shouldShowStories && (
          <Stories
            type={currentType}
            stories={stories ?? []}
            onDeleteStory={onDeleteStory}
            currentYear={currentYear}
            setCurrentYear={(year: string) => setCurrentYear(parseInt(year))}
          />
        )}
        {shouldShowPostsLoading && <LoadingPosts />}
        {shouldShowLand && (
          <Land type={stories?.[0]?.type as string | undefined} />
        )}
        {postsError && (
          <div className="p-4 text-red-500">Failed to load posts</div>
        )}
        {shouldShowPosts && (
          <Posts
            posts={posts ?? []}
            type={currentType}
            storyid={parsedStoryId}
            isHighlights={isHighlightType}
          />
        )}
      </div>
    </>
  );
}
