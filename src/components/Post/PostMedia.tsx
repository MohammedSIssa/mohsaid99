import { lazy } from "react";

import { LazyImage } from "./LazyImage";
const YouTubePlayer = lazy(() => import("./VideoPlayer"));

export default function PostMedia({ images }: { images: string[] }) {
  const isVideo = images[0].startsWith("video:");
  const videoId = isVideo ? images[0].split(":")[2] : null;
  const videoType = isVideo ? images[0].split(":")[1] : null;

  return (
    <div className="slider w-full md:w-fit flex max-h-full min-h-[200px] md:min-w-[200px] max-w-full items-start justify-start gap-2 overflow-x-auto overflow-y-hidden rounded-2xl border-2 border-(--border-color) bg-(--darker-bg-color) p-4">
      {!isVideo && images.map((img, idx) => <LazyImage src={img} key={idx} />)}
      {isVideo && <YouTubePlayer type={videoType} videoId={videoId} />}
    </div>
  );
}
