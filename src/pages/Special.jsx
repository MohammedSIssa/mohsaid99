import { useState, useEffect } from "react";
import { fetchWithCache } from "../scripts/cache";
import Stories from "../components/Layout/Stories";

import ErrorLoadingStories from "../components/Errors/ErrorLoadingStories";
import LoadingStories from "../components/Loaders/LoadingStories";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { API } from "../scripts/globals";

import { logger } from "../scripts/logger";

const API_CALL = API + "/special";

import { Outlet } from "react-router-dom";

const Special = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getSpecials() {
      try {
        const raw = await fetchWithCache(API_CALL);
        setData(raw);
        if (import.meta.env.MODE !== "development") {
          await logger(user?.username, "Special");
        }
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getSpecials();
  }, [user?.username]);

  if (loading) return <LoadingStories />;
  if (error) return <ErrorLoadingStories />;

  return (
    <div className="flex flex-col gap-5">
      <Stories data={data} />
      <Outlet />
    </div>
  );
};

export default Special;
