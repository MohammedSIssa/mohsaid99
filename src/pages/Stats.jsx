import { stats } from "./stats-data";
import Stories from "../components/Layout/Stories";
import { Outlet } from "react-router-dom";

// import { useContext, useEffect } from "react";
// import { UserContext } from "../context/UserContext";
// import { logger } from "../scripts/logger";

const Stats = () => {
  // const { user } = useContext(UserContext);

  // useEffect(() => {
  //   async function log() {
  //     if (import.meta.env.MODE !== "development") {
  //       await logger(user?.username, "Stats");
  //     }
  //   }

  //   log();
  // }, [user?.username]);
  return (
    <div className="flex flex-col gap-5">
      <Stories data={[...stats].reverse()} />
      <Outlet />
    </div>
  );
};

export default Stats;
