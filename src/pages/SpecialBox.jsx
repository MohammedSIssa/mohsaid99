import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingEvents from "../components/Loaders/LoadingEvents";
import ErrorLoadingEvents from "../components/Errors/ErrorLoadingStories";
import ScrollToTopButton from "../components/Layout/ScrollToTop";

import { useOutletContext } from "react-router-dom";

import AddPost from "./Admin/AddPost";

import { API, DEV_API } from "../scripts/globals";
import { logger } from "../scripts/logger";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import Post from "../components/Post/Post";

import { fetchWithCache, fetchWithLocalStorageCache } from "../scripts/cache";

export default function SpecialBox() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { latestStory } = useOutletContext();

  const { user } = useContext(UserContext);

  const { id } = useParams();

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/special/${id}`
      : `${DEV_API}/special/${id}`;
  useEffect(() => {
    async function getSpecials() {
      const isLatestStory = latestStory === +id;
      try {
        setLoading(true);
        // const raw = await fetchWithCache(API_CALL);
        const raw = isLatestStory
          ? await fetchWithCache(API_CALL)
          : await fetchWithLocalStorageCache(API_CALL);
        setData(raw);

        if (
          import.meta.env.MODE !== "development" &&
          user?.username !== "mohsaid99"
        ) {
          await logger(user?.username, `Special | ${id}`);
        }
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getSpecials();
  }, [id, user?.username, API_CALL, latestStory]);

  if (loading) return <LoadingEvents />;
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
        {user?.role === 1 && <AddPost id={id} fromType={"special"} />}
        <ScrollToTopButton />
      </>
    );
}
