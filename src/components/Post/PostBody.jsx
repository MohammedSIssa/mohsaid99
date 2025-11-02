import { useState } from "react";

export default function PostBody({ body, showAllText = false }) {
  const [showMore, setShowMore] = useState(body.length < 60);
  return (
    <>
      {(showMore || showAllText) && (
        <div className={`flex flex-col gap-2 py-2`}>
          <pre className="max-w-[700px]">{body}</pre>
        </div>
      )}
      {showMore || (
        <div className="py-2">
          {!showAllText && (
            <pre>
              {body.slice(0, 60)} ...{" "}
              <button
                className="text-zinc-500 hover:text-zinc-300 hover:cursor-pointer"
                onClick={() => setShowMore(true)}
              >
                عرض المزيد
              </button>
            </pre>
          )}
        </div>
      )}
    </>
  );
}
