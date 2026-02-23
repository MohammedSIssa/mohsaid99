/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

// Temporarily replace SVG imports with placeholders to ensure no Safari crash
import Mute from "../../assets/icons/mute.svg";
import UnMute from "../../assets/icons/unmute.svg";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
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
  const [isMuted, setIsMuted] = useState(true);

  // Lazy-load when visible
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    obs.observe(containerRef.current);

    return () => obs.disconnect();
  }, []);

  // Load YouTube API safely
  useEffect(() => {
    if (!load || typeof window === "undefined") return;

    const initPlayer = () => {
      if (!iframeRef.current) return;
      if (!window.YT?.Player) return;

      const ytPlayer = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: () => {
            setPlayer(ytPlayer);
            try {
              ytPlayer.mute();
            } catch {
              /* silent fail */
            }
          },
        },
      });
    };

    if (!window.YT?.Player) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }
  }, [load]);

  // Play/pause based on visibility
  useEffect(() => {
    if (!player || !containerRef.current) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        try {
          if (entry.isIntersecting) {
            player.playVideo?.();
          } else {
            player.pauseVideo?.();
          }
        } catch {
          /* Safari may fail silently */
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [player]);

  // Toggle play/pause
  const handleClick = () => {
    if (!player) return;

    try {
      const state = player.getPlayerState?.();
      if (state === 1) player.pauseVideo?.();
      else player.playVideo?.();
    } catch {
      /* ignore Safari crashes */
    }
  };

  // Toggle audio
  const toggleAudio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!player) return;

    try {
      if (player.isMuted?.()) {
        player.unMute?.();
        setIsMuted(false);
      } else {
        player.mute?.();
        setIsMuted(true);
      }
    } catch {
      /* ignore Safari crashes */
    }
  };

  if (!videoId) return null;

  const src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&controls=0&loop=1&playlist=${videoId}&mute=1&rel=0&modestbranding=1`;

  return (
    <div
      ref={containerRef}
      className={`${type} relative rounded-2xl`}
      onClick={handleClick}
    >
      {load && (
        <>
          <iframe
            ref={iframeRef}
            className="h-full w-full rounded-2xl"
            src={src}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <button
            onClick={toggleAudio}
            className="absolute bottom-2 left-2 z-10 rounded-full bg-black/50 p-2 text-white"
          >
            {isMuted ? (
              <img src={UnMute} width={25} />
            ) : (
              <img src={Mute} width={25} />
            )}
          </button>
        </>
      )}
    </div>
  );
}
