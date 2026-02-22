export default function Goal({ goal }: { goal: string }) {
  const isDone = goal.startsWith("✅");
  return (
    <h1
      className={`${isDone ? "border-green-400/30 bg-green-700/70 text-green-100" : "border-(--border-color)/70 bg-(--darker-bg-color)/30"} rounded-lg border-2 p-2 px-3`}
    >
      {goal}
    </h1>
  );
}
