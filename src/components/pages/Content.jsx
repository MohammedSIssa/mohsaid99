import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { useOutletContext } from "react-router-dom";

import { API, DEV_API } from "../../scripts/globals";
import { logger } from "../../scripts/logger";

import LoadingEvents from "../Loaders/LoadingEvents";
import ErrorLoadingEvents from "../Errors/ErrorLoadingStories";
import ScrollToTopButton from "../Layout/ScrollToTop";

import AddPost from "./Admin/AddPost";
import Post from "../Post/Post";

import { fetchWithCache } from "../../scripts/cache";

const Content = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const { type } = useOutletContext();

  let API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/${type}/${id}`
      : `${DEV_API}/${type}/${id}`;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    getData();
  }, [id, API_CALL, user?.username, type]);

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
            special={item.special}
            secret={item.secret}
          />
        ))}
        {user?.role === 1 && <AddPost id={id} type={type} />}
        <ScrollToTopButton />
      </>
    );
};

export default Content;
