import { useParams } from "react-router";
import StatLand from "./Lands/StatLand";
import { stats } from "./stats-data";
import Charts from "../components/Stat";
import Stories from "../components/Stories";

import { logger } from "../variables/logger";
import useAuth from "../hooks/useAuth";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useEffect, useState, useMemo } from "react";

export default function Stats() {
  const { statid } = useParams();
  let data = null;

  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );
  const { isAdmin, user } = useAuth();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const statsData = useMemo(
    () => stats.filter((s) => s.year === currentYear),
    [currentYear],
  );

  const storiesData = useMemo(
    () =>
      statsData.map((s) => ({
        ...s,
        year: s.year.toString(),
        summary: s.summary ?? undefined,
      })),
    [statsData],
  );
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
    <div
      className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center justify-center gap-2`}
    >
      <Stories
        type="stats"
        stories={storiesData}
        onDeleteStory={() => {}}
        currentYear={currentYear}
        setCurrentYear={(year) => setCurrentYear(+year)}
      />
      {!data && <StatLand />}
      {data && <Charts data={data} />}
    </div>
  );
}
