import GoalItem from "./GoalItem";

const GoalSection = ({ goal }) => {
  if (goal.t === "hr") {
    return <hr className="mt-10 mb-10 w-full" style={{ border: `2px dashed ${'var(--story-bg-color)'}`}} />;
  }
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
