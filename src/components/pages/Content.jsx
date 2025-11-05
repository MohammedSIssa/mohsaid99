import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useOutletContext } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { API, DEV_API } from "../../scripts/globals";
import { logger } from "../../scripts/logger";

import LoadingEvents from "../Loaders/LoadingEvents";
import ErrorLoadingEvents from "../Errors/ErrorLoadingStories";
import ScrollToTopButton from "../ScrollToTop";

import AddPost from "./Admin/AddPost";
import Post from "../Post/Post";

import { fetchWithCache } from "../../scripts/cache";

import { useAuth } from "../hooks/useAuth";

const Content = ({ latest = false }) => {
  const { user } = useAuth();
  const { id } = useParams();
  const { type, latestStory } = useOutletContext();

  const navigate = useNavigate();

  let API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/${type}/${id}`
      : `${DEV_API}/${type}/${id}`;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (latest) {
      navigate(`/${type}s/${latestStory}`);
    }
  }, [latest, latestStory, navigate, type]);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const raw = await fetchWithCache(API_CALL);
        setData(raw);
        if (
          import.meta.env.MODE !== "development" &&
          user?.username !== "mohsaid99"
        ) {
          await logger(user?.username, `${type} | ${id}`);
        }
      } catch {
        setData(null);
        setError("Error Getting data");
      } finally {
        setIsLoading(false);
      }
    }
    if (!latest) {
      getData();
    }
  }, [id, API_CALL, user?.username, type, latest]);

  if (isLoading) return <LoadingEvents />;
  if (error) return <ErrorLoadingEvents />;
  if (data)
    return (
      <>
        {latestStory}
        {data.map((item, idx) => (
          <Post
            key={idx}
            title={item.title}
            body={item.body}
            images={item.images}
            postId={item.id}
            special={item.special}
            secret={item.secret}
          />
        ))}
        {user?.role === 1 && (
          <AddPost id={latest ? latestStory : id} fromType={type} />
        )}
        <ScrollToTopButton />
      </>
    );
};

export default Content;
