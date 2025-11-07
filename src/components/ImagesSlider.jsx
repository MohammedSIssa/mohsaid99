import { useRef } from "react";
import LazyLoadedSliderImage from "./LazyLoadedSliderImage";

export default function ImagesSlider({ images, showImageSrcUnder = false }) {
  const sliderRef = useRef(null);
  return (
    <div
      ref={sliderRef}
      className="slider w-full flex justify-centerspace-x-5 h-fit overflow-x-auto p-5 overflow-y-hidden rounded-xl"
    >
      {images.map((image, idx) => (
        <LazyLoadedSliderImage
          showImageSrcUnder={showImageSrcUnder}
          key={idx}
          src={image}
          className={"shrink-0 max-w-full snap-start rounded-lg"}
          observerRoot={sliderRef.current}
        />
      ))}
    </div>
  );
}
