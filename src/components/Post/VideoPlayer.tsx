/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

import Mute from "../../assets/icons/mute.svg";
import UnMute from "../../assets/icons/unmute.svg";

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
  const [isMuted, setIsMuted] = useState(true); // track mute state

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
            events: {
              onReady: () => {
                setPlayer(ytPlayer);
                ytPlayer.mute(); // start muted
              },
            },
          });
        }
      };
    } else {
      if (iframeRef.current) {
        const ytPlayer = new window.YT.Player(iframeRef.current, {
          events: {
            onReady: () => {
              setPlayer(ytPlayer);
              ytPlayer.mute(); // start muted
            },
          },
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
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  // Toggle audio (mute/unmute)
  const toggleAudio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // prevent triggering play/pause
    if (!player) return;

    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
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
          {/* Audio toggle button */}
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
