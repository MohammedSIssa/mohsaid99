import Story from "../Story";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import AddStoryBox from "../../pages/Admin/AddStoryBox";

const Stories = ({ data }) => {
  const { user } = useContext(UserContext);
  return (
    <div
      className="stories mt-8 md:mt-18 border-0 border-b h-47 flex gap-8 items-center p-5 py-10 overflow-x-auto scroll-snap-x snap-mandatory scroll-smooth w-full"
      dir="rtl"
    >
      {user?.role === 1 && <AddStoryBox />}

      {[...data].reverse().map((item, idx) => (
        <Story item={item} idx={idx} key={idx} />
      ))}
    </div>
  );
};

export default Stories;
