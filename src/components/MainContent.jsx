import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Stories from "./Stories";
import Week from "./Week";
import Goal from "./Goal";
import ErrorPage from "./ErrorPage";
import StatsPage from "./StatsPage";

// import logger from "./logger";

import PasswordLocked from "./PasswordLocked";

import { dataCenter } from "../model/center";

const MainContent = () => {
  const {
    weeks,
    latestWeek,
    goals,
    latestGoal,
    special,
    latestSpecial,
    posts,
    latestPost,
    stats,
    latestStat,
  } = dataCenter;
  const reversedWeeks = [...weeks].reverse();
  const reversedGoals = [...goals].reverse();
  const reversedSpecial = [...special].reverse();
  const reversedPosts = [...posts].reverse();
  const reversedStats = [...stats].reverse();
  const { type, id } = useParams();

  useEffect(() => {
    document.title = `${type} | ${id}`;
    // async function log() {
    //   await logger(document.title);
    // }

    // console.log(import.meta.env.MODE);
    // if (import.meta.env.MODE !== "development") {
    //   log();
    // }
  }, [id, type]);

  const data =
    type === "weeks"
      ? reversedWeeks[+id - 1]
      : type === "goals"
      ? reversedGoals[+id - 1]
      : type === "special"
      ? reversedSpecial[+id - 1]
      : type === "posts"
      ? reversedPosts[+id - 1]
      : type === "stats"
      ? reversedStats[+id - 1]
      : null;

  if (type === "weeks" && +id > latestWeek) {
    return <ErrorPage />;
  } else if (type === "goals" && +id > latestGoal) {
    return <ErrorPage />;
  } else if (type === "special" && +id > latestSpecial) {
    return <ErrorPage />;
  } else if (type === "posts" && +id > latestPost) {
    return <ErrorPage />;
  } else if (type === "stats" && +id > latestStat) {
    return <ErrorPage />;
  }
  return (
    <div>
      <Stories type={type} />
      {type === "weeks" ? (
        <Week data={data} />
      ) : type === "goals" ? (
        <Goal data={data} />
      ) : type === "special" ? (
        <PasswordLocked>
          <Week data={data} />
        </PasswordLocked>
      ) : type === "posts" ? (
        <Week data={data} />
      ) : type === "stats" ? (
        <StatsPage data={data} />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default MainContent;
