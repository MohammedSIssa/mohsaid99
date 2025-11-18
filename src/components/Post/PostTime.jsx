import { formatTimeAgo } from "../../scripts/utils";

export default function PostTime({ postedAt }) {
  return <p dir="ltr" className="text-slate-500 text-sm time-ago">{formatTimeAgo(postedAt)}</p>;
}
