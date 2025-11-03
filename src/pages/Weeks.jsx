import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorLoadingStories from "../components/Errors/ErrorLoadingStories";
import LoadingStories from "../components/Loaders/LoadingStories";

import { API, DEV_API } from "../scripts/globals";

import { fetchWithCache } from "../scripts/cache";
import Stories from "../components/Layout/Stories";

const Weeks = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let API_CALL =
    import.meta.env.MODE !== "development" ? API + "/week" : DEV_API + "/week";

  useEffect(() => {
    async function getData() {
      try {
        const raw = await fetchWithCache(API_CALL);
        setData(raw);
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [API_CALL]);

  if (isLoading) return <LoadingStories />;
  if (error) return <ErrorLoadingStories />;
  if (data)
    return (
      <div className="flex flex-col gap-5">
        <Stories data={data} />
        <Outlet context={{ latestStory: data.length }} />
      </div>
    );
};

export default Weeks;
