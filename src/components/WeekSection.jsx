import WeekList from "./WeekList";
import LazyImageBlock from "./LazyImageBlock";
import YouTubePlayer from "./YouTubePlayer";
import GoalSection from "./GoalSection";

const WeekSection = ({ event }) => {
  return (
    <>
      {event.t === "h1" && (
        <h1 className="font-bold px-5 text-center max-w-[700px] text-2xl md:text-3xl lg:text-4xl">
          {event.c}
        </h1>
      )}
      {event.t === "h2" && (
        <h2 className="font-bold px-5 text-center text-xl max-w-[700px] md:text-2xl lg:text-3xl">
          {event.c}
        </h2>
      )}

      {event.t === "h3" && (
        <h3 className="font-bold px-5 text-center text-lg max-w-[700px] md:text-xl lg:text-2xl">
          {event.c}
        </h3>
      )}
      {event.t === "h4" && (
        <h4 className="text-md px-5 text-center md:text-lg max-w-[700px] lg:text-xl">
          {event.c}
        </h4>
      )}
      {event.t === "h5" && (
        <h5 className="text-sm px-5 text-center md:text-md max-w-[700px] lg:text-lg">
          {event.c}
        </h5>
      )}

      {event.t === "h6" && (
        <h6 className="text-xs px-5 text-center md:text-sm max-w-[700px] lg:text-md">
          {event.c}
        </h6>
      )}

      {event.t === "p" && (
        <p className="text-lg px-5 md:max-w-[500px] lg:max-w-[750px] text-center  md:text-xl">
          {event.c}
        </p>
      )}
      {event.t === "img" && <LazyImageBlock event={event} />}

      {event.t === "ul" && <WeekList list={event.c} />}

      {event.t === "iframe" && (
        <YouTubePlayer type={event.type} videoId={event.videoId} />
      )}

      {event.t === "hr" && (
        <hr
          className="border-0 border-b-3 border-dashed w-full mb-15"
          style={{ borderColor: "var(--story-bg-color)" }}
        />
      )}
      {event.t === "a" && <a target="_blank" className="text-lg px-5 max-w-[500px] text-center text-violet-400 font-bold md:text-xl" href={event.l}>{event.c}</a>}
      {event?.type === "goals" && <GoalSection goal={event.goal} />}
    </>
  );
};

export default WeekSection;
