import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

import { API } from "../scripts/globals";

import LoadingEvents from "../components/Loaders/LoadingEvents";
import ErrorLoadingEvents from "../components/Errors/ErrorLoadingStories";
import ScrollToTopButton from "../components/Layout/ScrollToTop";

import { logger } from "../scripts/logger";

import AddPost from "./Admin/AddPost";

import Post from "../components/Post/Post";

import { fetchWithCache } from "../scripts/cache";

const Week = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const API_CALL = API + "/week/" + id;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const raw = await fetchWithCache(API_CALL);
        setData(raw);

        if (import.meta.env.MODE !== "development") {
          await logger(user?.username, `Weeks | ${id}`);
        }
      } catch {
        setData(null);
        setError("Error Getting data");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [id, API_CALL, user?.username]);

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
        {user?.role === 1 && <AddPost id={id} type={"week"} />}
        <ScrollToTopButton />
      </>
    );
};

export default Week;
