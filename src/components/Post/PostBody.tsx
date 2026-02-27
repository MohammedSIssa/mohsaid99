import React, { lazy, Suspense } from "react";
// import { miniMarkdownToHTML } from "../../variables/miniMD";
import Marked from "../Marked";

const MarkdownContent = lazy(() => import("../MarkdownContent"));

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default function PostBody({ body, dir }: { body: string; dir: string }) {
  // const fallbackHTML = miniMarkdownToHTML(body);

  return (
    <div className={`not-prose block w-full py-2 ${dir}`}>
      <ErrorBoundary fallback={<Marked content={body} dir={dir} />}>
        <Suspense fallback={<Marked content={body} dir={dir} />}>
          <MarkdownContent dir={dir} content={body} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
