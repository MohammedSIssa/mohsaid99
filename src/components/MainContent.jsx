import { useParams } from "react-router-dom";
import Stories from "./Stories";
import Week from "./Week";
import Goal from "./Goal";
import ErrorPage from "./ErrorPage";

import PasswordLocked from "./PasswordLocked";

import { dataCenter } from "../model/center";

const MainContent = () => {
  const { weeks, latestWeek, goals, latestGoal, special, latestSpecial } =
    dataCenter;
  const reversedWeeks = [...weeks].reverse();
  const reversedGoals = [...goals].reverse();
  const reversedSpecial = [...special].reverse();
  const { type, id } = useParams();

  const data =
    type === "weeks"
      ? reversedWeeks[+id - 1]
      : type === "goals"
      ? reversedGoals[+id - 1]
      : type === "special"
      ? reversedSpecial[+id - 1]
      : null;

  if (type === "weeks" && +id > latestWeek) {
    return <ErrorPage />;
  } else if (type === "goals" && +id > latestGoal) {
    return <ErrorPage />;
  } else if (type === "special" && +id > latestSpecial) {
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
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default MainContent;
