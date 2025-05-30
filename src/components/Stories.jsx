import { dataCenter } from "../model/center";
import Story from "./Story";

const Stories = ({ type }) => {
  const { weeks, goals } = dataCenter;
  return (
    <div className="stories mt-8 md:mt-25 border-0 border-b-1 h-47 flex gap-8 items-center p-5 py-10">
      {type === "weeks" ? (
        weeks.map((week, i) => (
          <Story type={type} data={week.meta} id={week.id} key={i} isSpecial={week?.isSpecial} />
        ))
      ) : type === "goals" ? (
        goals.map((goal, i) => (
          <Story type={type} data={goal.meta} id={goal.id} key={i} />
        ))
      ) : (
        <h1 className="w-full text-center text-2xl">تأكد من عنوان الرابط!</h1>
      )}
    </div>
  );
};

export default Stories;
