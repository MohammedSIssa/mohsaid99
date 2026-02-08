/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayer({
  type,
  videoId,
}: {
  type: string | null;
  videoId: string | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [load, setLoad] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  // Lazy-load iframe
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoad(true);
        obs.disconnect();
      }
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // Load YouTube API dynamically
  useEffect(() => {
    if (!load) return;

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        if (iframeRef.current) {
          const ytPlayer = new window.YT.Player(iframeRef.current, {
            events: { onReady: () => setPlayer(ytPlayer) },
          });
        }
      };
    } else {
      if (iframeRef.current) {
        const ytPlayer = new window.YT.Player(iframeRef.current, {
          events: { onReady: () => setPlayer(ytPlayer) },
        });
      }
    }
  }, [load]);

  // Pause/play only when fully visible
  useEffect(() => {
    if (!player || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      },
      { threshold: [1] },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [player]);

  // Toggle play/pause on click
  const handleClick = () => {
    if (!player) return;

    const state = player.getPlayerState();
    if (state === 1) {
      // playing
      player.pauseVideo();
    } else {
      // paused or ended
      player.playVideo();
    }
  };

  if (!videoId) return null;

  const src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&controls=0&loop=1&playlist=${videoId}&mute=0`;

  return (
    <div
      ref={containerRef}
      className={`${type} rounded-2xl`}
      onClick={handleClick} // ← click toggles play/pause
    >
      {load && (
        <iframe
          ref={iframeRef}
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
