import { stats } from "./stats-data";
import Stories from "../../components/Layout/Stories";
import { Outlet } from "react-router-dom";

const Stats = () => {
  return (
    <div className="flex flex-col gap-5">
      <Stories data={[...stats].reverse()} />
      <Outlet />
    </div>
  );
};

export default Stats;
