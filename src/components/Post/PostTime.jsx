import { formatTimeAgo } from "../../scripts/utils";

export default function PostTime({ postedAt }) {
  return <p className="text-zinc-500 text-sm">{formatTimeAgo(postedAt)}</p>;
}
