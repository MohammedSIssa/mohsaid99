import { useParams } from "react-router";
import StatLand from "./Lands/StatLand";
import { stats } from "./stats-data";
import Charts from "../components/Stat";
import Stories from "../components/Stories";

export default function Stats() {
  const { statid } = useParams();
  let data = null;

  if (statid) {
    data = stats.find((s) => s.count === +statid);
  }
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
