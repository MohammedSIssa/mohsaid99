// src/components/LazyLoadedImage.jsx
import { useEffect, useRef, useState } from "react";
import ImageLoadingSpinner from "./Loaders/ImageLoadingSpinner";

export default function LazyLoadedImage({
  src,
  alt = "",
  className = "",
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        rootMargin: "100px", // preload slightly before appearing
        threshold: 0.1,
      }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      {...props}
    >
      {!isLoaded && <ImageLoadingSpinner />}

      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-700 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
