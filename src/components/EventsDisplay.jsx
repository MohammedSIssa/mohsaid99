import LazyLoadedImage from "./LazyLoadingImage";
import YouTubePlayer from "./YouTubePlayer";

const EventsDisplay = ({ data }) => {
  return (
    <div className="flex flex-col items-center p-0 md:p-5 lg:p-10 xl:p-15">
      {data.map((item, idx) => (
        <div key={idx}>
          {item.tag === "video:shorts" && (
            <YouTubePlayer type={"shorts"} videoId={item.event} />
          )}
          {item.tag === "video:desktop" && (
            <YouTubePlayer type={"desktop"} videoId={item.event} />
          )}
          {item.tag === "h1" && (
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2 px-5 md:px-10 lg:px-12 xl:px-15">
              {item.event}
            </h1>
          )}
          {item.tag === "h2" && (
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-2 px-5 md:px-10 lg:px-12 xl:p-15">
              {item.event}
            </h2>
          )}
          {item.tag === "h3" && (
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-2 px-5 md:px-10 lg:px-12 xl:px-15">
              {item.event}
            </h3>
          )}
          {item.tag === "p" && (
            <pre className="mb-5 lg:max-w-[850px] px-5 md:px-10 lg:px-15 text-center">
              {item.event}
            </pre>
          )}
          {item.tag === "img" && (
            <LazyLoadedImage
              src={item.event}
              className="mb-10 md:mb-15 lg:mb-20"
            />
          )}
          {item.tag === "hr" && (
            <hr
              className="border-0 border-b-3 border-dashed w-full mb-15"
              style={{ borderColor: "var(--story-bg-color)" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default EventsDisplay;
