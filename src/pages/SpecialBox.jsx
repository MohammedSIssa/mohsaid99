import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingEvents from "../components/Loaders/LoadingEvents";
import ErrorLoadingEvents from "../components/Errors/ErrorLoadingStories";
import ScrollToTopButton from "../components/Layout/ScrollToTop";

import AddPost from "./Admin/AddPost";

import { API } from "../scripts/globals";
import { logger } from "../scripts/logger";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import Post from "../components/Post/Post";

import { fetchWithCache } from "../scripts/cache";

export default function SpecialBox() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    async function getSpecials() {
      try {
        setLoading(true);
        const raw = await fetchWithCache(`${API}/special/${id}`);
        setData(raw);

        if (import.meta.env.MODE !== "development") {
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
  }, [id, user?.username]);

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
