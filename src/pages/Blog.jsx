import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useOutletContext } from "react-router-dom";

import LoadingEvents from "../components/Loaders/LoadingEvents";
import ErrorLoadingEvents from "../components/Errors/ErrorLoadingStories";
import ScrollToTopButton from "../components/Layout/ScrollToTop";

import { logger } from "../scripts/logger";

import { API, DEV_API } from "../scripts/globals";

import AddPost from "./Admin/AddPost";
import Post from "../components/Post/Post";

import { fetchWithCache, fetchWithLocalStorageCache } from "../scripts/cache";

const Blog = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const { latestStory } = useOutletContext();

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? API + "/blog/" + id
      : DEV_API + "/blog/" + id;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const isLatestStory = latestStory === +id;

      try {
        setIsLoading(true);
        // const raw = await fetchWithCache(API_CALL);
        const raw = isLatestStory
          ? await fetchWithCache(API_CALL)
          : await fetchWithLocalStorageCache(API_CALL);
        setData(raw);
        if (
          import.meta.env.MODE !== "development" &&
          user?.username !== "mohsaid99"
        ) {
          await logger(user?.username, `Blogs | ${id}`);
        }
      } catch {
        setData(null);
        setError("Error Getting data");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [id, API_CALL, user?.username, latestStory]);

  if (isLoading) return <LoadingEvents />;
  if (error) return <ErrorLoadingEvents />;
  if (data)
    return (
      <>
        {data.map((item, idx) => (
          <Post
            key={idx}
            title={item.title}
            body={item.body}
            images={item.images}
            postId={item.id}
          />
        ))}
        {user?.role === 1 && <AddPost id={id} fromType={"blog"} />}
        <ScrollToTopButton />
      </>
    );
};

export default Blog;
