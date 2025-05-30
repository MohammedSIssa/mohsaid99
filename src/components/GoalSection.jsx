const GoalSection = ({ goal }) => {
  const isDone = goal.isDone != null && Boolean(goal?.isDone);
  const isFail = goal.isFailed != null && Boolean(goal?.isFailed);
  return (
    <div
      className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 md:mb-5"
      style={{ color: isDone ? "var(--finsied-goal-color)" : isFail ? 'var(--failed-goal-color)' : 'var(--font-color)' }}
    >
      {goal.name}
    </div>
  );
};

export default GoalSection;
