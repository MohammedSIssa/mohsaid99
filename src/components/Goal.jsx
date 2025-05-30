import GoalSection from "./GoalSection";
import PageTransitionWrapper from "../PageTransitionWrapper";

export default function Goal({ data }) {
  return (
    <PageTransitionWrapper>
      <div className="flex flex-col p-5 md:p-20 items-center">
        {data.goals.map((goal, index) => (
          <GoalSection goal={goal} key={index} />
        ))}
      </div>
    </PageTransitionWrapper>
  );
}
