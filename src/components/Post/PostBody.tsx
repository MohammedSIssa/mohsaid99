import { useState, lazy } from "react";
const MarkdownContent = lazy(() => import("../MarkdownContent"));

export default function PostBody({
  body,
  dir,
  showAllText = false,
}: {
  body: string;
  showAllText?: boolean;
  dir: string;
}) {
  const [showMore, setShowMore] = useState(body?.length < 60);

  return (
    <>
      {(showMore || showAllText) && (
        <div className={`not-prose block w-full py-2 ${dir}`}>
          {/* <pre dir={dir} className="max-w-full md:max-w-[700px]"> */}
          <MarkdownContent dir={dir} content={body} />
          {/* </pre> */}
        </div>
      )}
      {showMore || (
        <div className="py-2">
          {!showAllText && (
            <>
              <div className="not-prose w-full">
                <MarkdownContent content={body.slice(0, 60)} dir={dir} />
              </div>
              <button
                className="text-(--font-color)/40 hover:cursor-pointer"
                onClick={() => setShowMore(true)}
              >
                عرض المزيد
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
