import type { Post } from "../types/Post";
import PostBox from "./Post/Post";
import useAuth from "../hooks/useAuth";
import AddPostForm from "./Admin/AddPostForm";

type typesProp = {
  week?: string;
  goal?: string;
  special?: string;
  stat?: string;
  blog?: string;
  [key: string]: string | undefined;
};

const arabicTypes: typesProp = {
  week: "الأسابيع",
  goal: "الأهداف",
  special: "خاص",
  stat: "احصائيات",
  blog: "المدونة",
};

export default function Posts({
  posts,
  type,
  storyid,
}: {
  posts: Post[];
  type: string;
  storyid: number;
}) {
  const { isAdmin } = useAuth();
  return (
    <div className={`flex w-full flex-col items-center pt-20`}>
      <div className="mx-auto mb-2 flex gap-2 md:hidden">
        <p className="rounded border-2 border-white/20 bg-white/10 p-2 px-5 font-bold">
          {arabicTypes[type]}
        </p>
        <p className="counter rounded border-2 border-white/20 bg-white/10 p-2 px-5 font-bold">
          {"#"}
          {storyid}
        </p>
      </div>
      <div className="mb-5">
        {isAdmin() && <AddPostForm type={type} storyid={storyid} />}
      </div>
      {!isAdmin() && posts.length === 0 && (
        <h1 className="text-2xl font-bold">لا توجد منشورات</h1>
      )}
      <div className="flex w-full flex-col items-center gap-17">
        {posts.map((post, idx) => (
          <PostBox key={idx} post={post} />
        ))}
      </div>
    </div>
  );
}
