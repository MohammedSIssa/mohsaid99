import React, { useState, lazy, Suspense } from "react";
import { supportsModernFeatures } from "../../variables/support";

const MarkdownContent = lazy(() => import("../MarkdownContent"));

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Content cannot be displayed on this device.</div>;
    }
    return this.props.children;
  }
}

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

  const renderMarkdown = (content: string) => (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading content...</p>}>
        <MarkdownContent dir={dir} content={content} />
      </Suspense>
    </ErrorBoundary>
  );

  const renderFallback = (content: string) => (
    <pre dir={dir} className="max-w-full whitespace-pre-wrap wrap-break-word">
      <p>Some features are not supported.</p>
      {content}
    </pre>
  );

  return (
    <>
      {(showMore || showAllText) && (
        <div className={`not-prose block w-full py-2 ${dir}`}>
          {canUseMarkdown ? renderMarkdown(body) : renderFallback(body)}
        </div>
      )}

      {!(showMore || showAllText) && (
        <div className="py-2">
          {!showAllText && (
            <>
              <div className="not-prose w-full">
                {canUseMarkdown
                  ? renderMarkdown(body.slice(0, 60))
                  : renderFallback(body.slice(0, 60))}
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
