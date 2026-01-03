import { useParams } from "react-router";
import StatLand from "./Lands/StatLand";
import { stats } from "./stats-data";
import Charts from "../components/Stat";
import Stories from "../components/Stories";

import { logger } from "../variables/logger";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

export default function Stats() {
  const { statid } = useParams();
  let data = null;

  const [statsData, setStatsData] = useState(stats);

  const [currentYear, setCurrentYear] = useState<number>(2026);
  const { isAdmin, user } = useAuth();
  if (statid) {
    data = stats.find((s) => s.count === +statid);
  }

  useEffect(() => {
    function setter() {
      setStatsData(stats.filter((s) => s.year === currentYear));
    }

    setter();
  }, [currentYear]);

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
        type="stats"
        stories={statsData.map((s) => ({
          ...s,
          year: s.year.toString(),
          summary: s.summary ?? undefined,
        }))}
        onDeleteStory={() => {}}
        currentYear={currentYear}
        setCurrentYear={(year) => setCurrentYear(+year)}
      />
      {!data && <StatLand />}
      {data && <Charts data={data} />}
    </div>
  );
}
