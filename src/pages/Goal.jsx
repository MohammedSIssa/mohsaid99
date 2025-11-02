import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

import LoadingEvents from "../components/Loaders/LoadingEvents";
import ErrorLoadingEvents from "../components/Errors/ErrorLoadingStories";
import ScrollToTopButton from "../components/Layout/ScrollToTop";

import { API } from "../scripts/globals";

import AddPost from "./Admin/AddPost";
import Post from "../components/Post/Post";

import { fetchWithCache } from "../scripts/cache";

const Goal = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const API_CALL = API + "/goal/" + id;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const raw = await fetchWithCache(API_CALL);

        setData(raw);
      } catch {
        setData(null);
        setError("Error Getting data");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [id, API_CALL]);

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
        {user?.role === 1 && <AddPost id={id} fromType={"goal"} />}
        <ScrollToTopButton />
      </>
    );
};

export default Goal;
