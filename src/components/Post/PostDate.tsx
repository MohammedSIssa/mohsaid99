import { formatTimeAgo } from "../../variables/formatData";

export default function PostDate({ time }: { time: string }) {
  return (
    <p className="border-2 h-full border-(--border-color)/50 bg-(--darker-bg-color) p-2 px-5 rounded-full">
      {formatTimeAgo(time)}
    </p>
  );
}
