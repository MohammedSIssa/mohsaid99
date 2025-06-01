const GoalSection = ({ goal }) => {
  const isDone = goal.isDone != null && Boolean(goal?.isDone);
  const isFail = goal.isFailed != null && Boolean(goal?.isFailed);
  return (
    <div
      className={`text-lg sm:text-xl text-center md:text-2xl lg:text-3xl mb-3 md:mb-5 p-2 px-5 rounded-xl font-bold ${
        isDone
          ? "bg-green-400 shadow-2xl shadow-green-800"
          : isFail
          ? "bg-red-400 shadow-2xl shadow-red-800"
          : "bg-slate-300 shadow-2xl shadow-slate-600"
      }`}
      style={{
        color: isDone
          ? "var(--finsied-goal-color)"
          : isFail
          ? "var(--failed-goal-color)"
          : "var(--bg-color)",
      }}
    >
      {goal.name}
    </div>
  );
};

export default GoalSection;
