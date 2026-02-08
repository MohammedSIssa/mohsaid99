import { useEffect, useRef, useState } from "react";

export default function YouTubePlayer({
  type,
  videoId,
}: {
  type: string | null;
  videoId: string | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoad(true);
        obs.disconnect();
      }
    });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  if (!videoId) return null;

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}&mute=1`;

  return (
    <div ref={ref} className={`${type} rounded-2xl`}>
      {load && (
        <iframe
          className="h-full w-full rounded-2xl"
          src={src}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}
