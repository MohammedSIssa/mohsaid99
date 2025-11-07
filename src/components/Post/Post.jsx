import ImagesSlider from "../ImagesSlider";
import PostTitle from "./PostTitlle";
import PostBody from "./PostBody";

import { useAuth } from "../hooks/useAuth";

import PostTime from "./PostTime";

import AdminControls from "./AdminControls";

export default function Post({
  postId,
  title,
  body,
  images,
  special,
  secret,
  postedAt,
  fromAdmin = false,
}) {
  const { user } = useAuth();
  return (
    <div
      className="flex items-center justify-center md:p-10 py-15"
      style={secret && !user?.role ? { display: "none" } : {}}
    >
      <div
        className="post w-full border border-l-0 border-r-0 md:border-l md:border-r md:w-[80%] lg:w-[80%] xl:w-fit xl:max-w-[1200px] flex-col p-5 md:rounded-2xl relative"
        style={
          special
            ? {
                borderColor: "var(--gold-story-border-color)",
                backgroundColor: "var(--gold-story-bg-color)",
              }
            : secret && user?.role
            ? {
                backgroundColor: "var(--secret-post-bg-color)",
                color: "var(--secret-post-font-color)",
                borderColor: "var(--secret-post-border-color)",
              }
            : {}
        }
      >
        {user?.role === 1 && !fromAdmin && <AdminControls postId={postId} />}
        {postId > 436 && <PostTime postedAt={postedAt} />}
        {title.trim() !== "" && <PostTitle text={title} />}
        {body.trim() !== "" && (
          <PostBody body={body} showAllText={images.length === 0} />
        )}
        {images.length > 0 && (
          <ImagesSlider images={images} showImageSrcUnder={fromAdmin} />
        )}
      </div>
    </div>
  );
}
