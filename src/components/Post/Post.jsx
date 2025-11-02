import ImagesSlider from "../ImagesSlider";
import PostTitle from "./PostTitlle";
import PostBody from "./PostBody";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import AdminControls from "./AdminControls";

export default function Post({
  postId,
  title,
  body,
  images,
  special,
  secret,
  fromAdmin = false,
}) {
  const { user } = useContext(UserContext);
  return (
    <div
      className="flex items-center justify-center md:p-10 py-15"
      style={secret && !user?.role ? { display: "none" } : {}}
    >
      <div
        className="post w-full md:w-[80%] lg:w-[80%] xl:w-fit xl:max-w-[1200px] flex-col p-5 md:rounded-2xl relative"
        style={
          special
            ? {
                borderColor: "var(--gold-story-border-color)",
                backgroundColor: "var(--gold-story-bg-color)",
              }
            : secret && user?.role
            ? {
                backgroundColor: "#2e050c",
                color: "#f7deb6",
                borderColor: "#f7deb6",
              }
            : {}
        }
      >
        {user?.role === 1 && !fromAdmin && <AdminControls postId={postId} />}
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
