const YouTubePlayer = ({ type = "desktop", videoId }) => {
  if (!videoId) return null;

  // Map type to className for iframe
  const className = type === "shorts" ? "shorts" : "desktop";

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}&mute=1`;

  return (
    <iframe
      className={className}
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubePlayer;
