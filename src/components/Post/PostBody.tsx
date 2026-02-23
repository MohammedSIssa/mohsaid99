import React, { useState, lazy, Suspense } from "react";
import { miniMarkdownToHTML } from "../../variables/miniMD";
import SpinLoader from "../Spinner";

const MarkdownContent = lazy(() => import("../MarkdownContent"));

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallbackHTML: string; dir: string },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="not-prose block w-full py-2"
          dir={this.props.dir}
          dangerouslySetInnerHTML={{ __html: this.props.fallbackHTML }}
        />
      );
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

  const renderMarkdown = (content: string) => (
    <ErrorBoundary fallbackHTML={miniMarkdownToHTML(content)} dir={dir}>
      <Suspense fallback={<SpinLoader />}>
        <MarkdownContent dir={dir} content={content} />
      </Suspense>
    </ErrorBoundary>
  );

  return (
    <>
      {(showMore || showAllText) && (
        <div className={`not-prose block w-full py-2 ${dir}`}>
          {renderMarkdown(body)}
        </div>
      )}

      {!(showMore || showAllText) && (
        <div className="py-2">
          {!showAllText && (
            <>
              <div className="not-prose w-full">
                {renderMarkdown(body.slice(0, 60))}
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
