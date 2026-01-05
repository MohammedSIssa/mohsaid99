import type { Story } from "../types/Story";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import StoryBox from "./Story";
import AddStoryForm from "./Admin/AddStoryForm";
import { useRef } from "react";
import useAuth from "../hooks/useAuth";

export default function Stories({
  type,
  stories,
  onDeleteStory,
  currentYear,
  setCurrentYear,
}: {
  type: string;
  stories: Story[];
  onDeleteStory: (id: number) => void;
  currentYear: number;
  setCurrentYear: (year: string) => void;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { isAdmin } = useAuth();

  return (
    <div className="relative w-full md:w-fit">
      <button
        className="fixed top-4 left-4 z-100 rounded-xl border-2 border-white/20 bg-white/10 p-3 backdrop-blur-3xl"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <FaTimes size={25} />
        ) : (
          <RxHamburgerMenu size={25} strokeWidth={1} />
        )}
      </button>
      {/* <div
        ref={containerRef}
        className={`${isVisible ? "fixed flex" : "hidden"} stories top-20 z-50 h-[75%] w-full min-w-[300px] flex-col items-center gap-5 overflow-y-scroll border-t-2 border-b-2 border-white/20 bg-white/10 p-2 py-10 shadow-xl shadow-black/10 backdrop-blur-2xl md:py-0 md:pt-25 md:pb-5 lg:left-5 lg:max-h-[80%] lg:w-fit lg:overflow-y-auto lg:rounded-xl lg:border-2 lg:py-5`}
      > */}
      <div
        ref={containerRef}
        className={`stories fixed top-20 z-50 flex h-[70%] w-full min-w-[300px] transform flex-col items-center gap-6 overflow-y-scroll border-t-2 border-b-2 border-white/20 bg-white/10 p-2 py-10 shadow-xl shadow-black/10 backdrop-blur-2xl transition-all duration-300 ease-out ${
          isVisible
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none -translate-x-full opacity-0"
        } md:py-0 md:pt-25 md:pb-5 lg:left-5 lg:max-h-[80%] lg:w-fit lg:overflow-y-auto lg:rounded-xl lg:border-2 lg:py-5`}
      >
        {isAdmin() && stories && stories[0]?.type !== "stats" && (
          <AddStoryForm
            type={type}
            year={
              type !== "sepecial"
                ? stories !== null && stories[0]?.year
                  ? stories[0]?.year
                  : ""
                : currentYear
            }
            count={
              stories.length > 0 ? stories[stories.length - 1].count + 1 : 1
            }
          />
        )}
        {stories ? (
          <>
            <select
              className="rounded-lg border-2 border-white/20 bg-white/10 p-2 px-5 font-bold shadow-xl shadow-black/10 focus:outline-0 [&_option]:bg-white/10 [&_option]:text-black"
              value={currentYear}
              onChange={(e) => setCurrentYear(e.target.value)}
            >
              <option value={"2026"}>2026</option>
              <option value={"2025"}>2025</option>
            </select>
            {stories.map((story, idx) => (
              <StoryBox
                key={idx}
                onToggleEditPopup={scrollToTop}
                story={story}
                currentYear={currentYear}
                onDeleteStory={onDeleteStory}
                handleLinkClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
