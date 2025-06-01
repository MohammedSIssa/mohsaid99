const GoalItem = ({ goal }) => {
  const isDone = goal.isDone != null && Boolean(goal?.isDone);
  const isFail = goal.isFailed != null && Boolean(goal?.isFailed);
  return (
    <div
      className={`text-sm sm:text-md text-center md:text-lg lg:text-xl mb-1 md:mb-3 p-2 px-5 rounded-xl font-semibold ${
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

export default GoalItem;
