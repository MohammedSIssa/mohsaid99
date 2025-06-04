import { useRef, useState, useEffect } from "react";
import { dataCenter } from "../model/center";
import Story from "./Story";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Stories = ({ type }) => {
  const { weeks, goals } = dataCenter;
  const storiesRef = useRef();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = () => {
    const el = storiesRef.current;
    if (!el) return;

    const scrollLeft = Math.abs(el.scrollLeft);
    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    setAtStart(scrollLeft >= maxScrollLeft - 1);
    setAtEnd(scrollLeft <= 1);
  };

  useEffect(() => {
    const el = storiesRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    storiesRef.current?.scrollBy({
      left: storiesRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    storiesRef.current?.scrollBy({
      left: -storiesRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const dataList = type === "weeks" ? weeks : type === "goals" ? goals : [];

  return (
    <div className="relative w-full" dir="rtl">
      {/* Scroll Buttons */}
      {!atStart && (
        <button
          onClick={scrollRight}
          className="absolute hidden md:block md:left-3 md:top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-zinc-800 backdrop-blur-md p-2 rounded-full shadow-lg transition duration-200 hover:scale-110"
          aria-label="Scroll Right"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
      )}
      {!atEnd && (
        <button
          onClick={scrollLeft}
          className="absolute hidden md:block md:right-3 md:top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-zinc-800 backdrop-blur-md p-2 rounded-full shadow-lg transition duration-200 hover:scale-110"
          aria-label="Scroll Left"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={storiesRef}
        className="stories mt-8 md:mt-25 border-0 border-b-1 h-47 flex gap-8 items-center p-5 py-10 overflow-x-auto scroll-snap-x snap-mandatory scroll-smooth w-full"
        dir="rtl"
      >
        {dataList.length > 0 ? (
          dataList.map((item, i) => (
            <Story
              key={i}
              type={type}
              data={item.meta}
              id={item.id}
              isSpecial={item?.isSpecial}
            />
          ))
        ) : (
          <h1 className="w-full text-center text-2xl">تأكد من عنوان الرابط!</h1>
        )}
      </div>
    </div>
  );
};

export default Stories;
