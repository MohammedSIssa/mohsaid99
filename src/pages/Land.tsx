import { useParams } from "react-router";
import { useType } from "../hooks/useType";
import { lazy, useEffect } from "react";
import { useFavicon } from "../hooks/useFavicon";
// import { API } from "../variables/api";

const WeekLand = lazy(() => import("./Lands/WeekLand"));
const GoalLand = lazy(() => import("./Lands/GoalLand"));
const SpecialLand = lazy(() => import("./Lands/SpecialLand"));
const BlogLand = lazy(() => import("./Lands/BlogLand"));

export default function Land() {
  const { type } = useParams();
  const { setType } = useType();

  useEffect(() => {
    if (type) {
      setType(type);
    }
  }, [type, setType]);

  useFavicon("/mohsaid99/favicons/" + type + ".svg");

  switch (type) {
    case "week":
      return <WeekLand />;

    case "goal":
      return <GoalLand />;

    case "special":
      return <SpecialLand />;

    case "blog":
      return <BlogLand />;
  }
}
