import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorLoadingStories from "../components/Errors/ErrorLoadingStories";
import LoadingStories from "../components/Loaders/LoadingStories";

import { fetchWithCache } from "../scripts/cache";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { logger } from "../scripts/logger";

import Stories from "../components/Layout/Stories";

import { API } from "../scripts/globals";

const API_CALL = API + "/goal";

const Goals = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getData() {
      try {
        const raw = await fetchWithCache(API_CALL);
        setData(raw);

        if (import.meta.env.MODE !== "development") {
          await logger(user?.username, "Goals");
        }
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [user?.username]);

  if (isLoading) return <LoadingStories />;
  if (error) return <ErrorLoadingStories />;
  if (data)
    return (
      <div className="flex flex-col gap-5">
        <Stories data={data} />
        <Outlet />
      </div>
    );
};

export default Goals;
