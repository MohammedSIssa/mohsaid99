import WeekList from "./WeekList";
import LazyImageBlock from "./LazyImageBlock";
import YouTubePlayer from "./YouTubePlayer";

const WeekSection = ({ event }) => {
  return (
    <>
      {event.tag === "h1" && (
        <h1 className="font-bold px-5 text-center text-2xl md:text-3xl lg:text-4xl">
          {event.content}
        </h1>
      )}
      {event.tag === "h2" && (
        <h2 className="font-bold px-5 text-center text-xl md:text-2xl lg:text-3xl">
          {event.content}
        </h2>
      )}

      {event.tag === "h3" && (
        <h3 className="font-bold px-5 text-center text-lg md:text-xl lg:text-2xl">
          {event.content}
        </h3>
      )}
      {event.tag === "h4" && (
        <h4 className="text-md px-5 text-center md:text-lg lg:text-xl">
          {event.content}
        </h4>
      )}
      {event.tag === "h5" && (
        <h5 className="text-sm px-5 text-center md:text-md lg:text-lg">
          {event.content}
        </h5>
      )}

      {event.tag === "h6" && (
        <h6 className="text-xs px-5 text-center md:text-sm lg:text-md">
          {event.content}
        </h6>
      )}

      {event.tag === "p" && (
        <p className="text-lg px-5 max-w-[700px] text-center md:text-xl">
          {event.content}
        </p>
      )}
      {event.tag === "img" && <LazyImageBlock event={event} />}

      {event.tag === "ul" && <WeekList list={event.content} />}

      {event.tag === "iframe" && (
        <YouTubePlayer type={event.type} videoId={event.videoId} />
      )}

      {event.tag === "hr" && (
        <hr
          className="border-1 w-full mb-15"
          style={{ borderColor: "var(--story-border-color)" }}
        />
      )}
    </>
  );
};

export default WeekSection;
