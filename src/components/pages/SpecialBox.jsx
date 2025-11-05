import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingEvents from "../../components/Loaders/LoadingEvents";
import ErrorLoadingEvents from "../../components/Errors/ErrorLoadingStories";
import ScrollToTopButton from "../../components/ScrollToTop";
import AddPost from "./Admin/AddPost";

import { useOutletContext } from "react-router-dom";

import { API, DEV_API } from "../../scripts/globals";
import { logger } from "../../scripts/logger";

import Post from "../../components/Post/Post";

import { fetchWithCache } from "../../scripts/cache";

import { useAuth } from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";

export default function SpecialBox({ latest = false }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useAuth();
  const { id } = useParams();

  const navigate = useNavigate();

  const { latestStory } = useOutletContext();

  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/special/${id}`
      : `${DEV_API}/special/${id}`;

    useEffect(() => {
    if (latest) {
      navigate(`/special/${latestStory}`);
    }
  }, [latest, latestStory, navigate]);

  useEffect(() => {
    async function getSpecials() {
      try {
        setLoading(true);
        const raw = await fetchWithCache(API_CALL);
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

    if (!latest) {
      getSpecials();
    }
  }, [id, user?.username, API_CALL, latest]);

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
        {user?.role === 1 && (
          <AddPost id={latest ? latestStory : id} fromType={"special"} />
        )}
        <ScrollToTopButton />
      </>
    );
}
