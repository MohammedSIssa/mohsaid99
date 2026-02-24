import React, { lazy, Suspense } from "react";
import { miniMarkdownToHTML } from "../../variables/miniMD";

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

export default function PostBody({ body, dir }: { body: string; dir: string }) {
  const fallbackHTML = miniMarkdownToHTML(body);

  return (
    <div className={`not-prose block w-full py-2 ${dir}`}>
      <ErrorBoundary fallbackHTML={fallbackHTML} dir={dir}>
        <Suspense
          fallback={
            <div dir={dir} dangerouslySetInnerHTML={{ __html: fallbackHTML }} />
          }
        >
          <MarkdownContent dir={dir} content={body} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
