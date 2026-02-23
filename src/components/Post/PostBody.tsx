import { useState, lazy } from "react";
const MarkdownContent = lazy(() => import("../MarkdownContent"));
import { supportsModernFeatures } from "../../variables/support";

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

  const canUseMarkdown =
    typeof window !== "undefined" && supportsModernFeatures();

  return (
    <>
      {(showMore || showAllText) && (
        <div className={`not-prose block w-full py-2 ${dir}`}>
          {canUseMarkdown && <MarkdownContent dir={dir} content={body} />}

          {!canUseMarkdown && (
            <pre
              dir={dir}
              className="max-w-full whitespace-pre-wrap wrap-break-word"
            >
              <p>Some features are not supported.</p>
              {body}
            </pre>
          )}
        </div>
      )}
      {showMore || (
        <div className="py-2">
          {!showAllText && (
            <>
              <div className="not-prose w-full">
                {canUseMarkdown && (
                  <MarkdownContent content={body.slice(0, 60)} dir={dir} />
                )}
                {!canUseMarkdown && (
                  <pre
                    dir={dir}
                    className="max-w-full whitespace-pre-wrap wrap-break-word"
                  >
                    <p>Some features are not supported.</p>
                    {body.slice(0, 60)}
                  </pre>
                )}
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
