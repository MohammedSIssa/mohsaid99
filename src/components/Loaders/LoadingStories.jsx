const LoadingStories = () => {
  const placeholders = Array.from({ length: 4 });
  return (
    <div className="flex flex-col gap-5">
      <div className="stories mt-8 md:mt-20 border-0 border-b h-47 flex gap-8 items-center p-5 py-10 overflow-x-hidden">
        {placeholders.map((_, idx) => (
          <div
            className="animate-pulse story w-60 min-w-60 h-full border rounded-lg p-3 px-4"
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingStories;
