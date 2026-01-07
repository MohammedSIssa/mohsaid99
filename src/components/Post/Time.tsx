import { formatTimeAgo } from "../../variables/formatData";

export default function PostTime({ time }: { time: string }) {
  return <p className="text-(--font-color)/50">{formatTimeAgo(time)}</p>;
}
