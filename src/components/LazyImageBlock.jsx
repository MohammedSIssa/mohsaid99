import { useEffect, useRef, useState } from "react";

export default function LazyImageBlock({ event }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const imgSize = event.size ? event.size : "normal"
  const imgThumbnail = event.thumbnail ? event.thumbnail : "https://i.imgur.com/jhwRHip.png"
  const isLightImage = event.isLightImage === true ? true : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const imageSizeClass =
    imgSize === "small"
      ? "md:max-w-[650px]"
      : imgSize === "extra-small"
      ? "md:max-w-[350px]"
      : imgSize === "long" ? "md:max-w-[800px]" : "";

  return (
    <div
      ref={containerRef}
      className={"thumbnail mb-10"}
      style={{
        backgroundImage: isVisible && !event?.isTransparent ? `url(${imgThumbnail})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "120px", // لمنع collapse
      }}
    >
      {isVisible && (
        <img
          src={event.c}
          className={`${imgSize} ${imageSizeClass} ${isLightImage && "brightness-90"}`}
          alt=""
        />
      )}
    </div>
  );
}
