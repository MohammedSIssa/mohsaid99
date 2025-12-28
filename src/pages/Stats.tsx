import { useParams } from "react-router";
import StatLand from "./Lands/StatLand";
import { stats } from "./stats-data";
import Charts from "../components/Stat";
import Stories from "../components/Stories";

import { logger } from "../variables/logger";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function Stats() {
  const { statid } = useParams();
  let data = null;

  const { isAdmin, user } = useAuth();
  if (statid) {
    data = stats.find((s) => s.count === +statid);
  }

  useEffect(() => {
    async function log() {
      await logger(user?.username ?? "guest", `Stat - ${statid}`);
    }

    if (!isAdmin() && statid) {
      log();
    }
  }, [statid, isAdmin, user?.username]);
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
      <Stories
        stories={stats.map((s) => ({ ...s, year: s.year.toString() }))}
        onDeleteStory={() => {}}
      />
      {!data && <StatLand />}
      {data && <Charts data={data} />}
    </div>
  );
}
