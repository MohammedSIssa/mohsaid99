import GoalItem from "./GoalItem";

const GoalSection = ({ goal }) => {
  return (
    <div className="flex flex-col gap-5 items-center mt-10">
      <h1 className="font-bold px-5 text-center text-2xl md:text-3xl lg:text-4xl">
        {goal.c}
      </h1>
      {goal.g &&
        goal.g.map((goalItem) => (
          <GoalItem key={goalItem.name} goal={goalItem} />
        ))}
    </div>
  );
};

export default GoalSection;
