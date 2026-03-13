import React from "react";
import Marked from "../Marked";
import { miniMarkdownToHTML } from "../../variables/miniMD";

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
  // const fallback = <div dangerouslySetInnerHTML={{ __html: fallbackHTML }} />;

  return (
    <div className={`not-prose block w-full py-2 ${dir}`} dir={dir}>
      <ErrorBoundary
        fallback={
          <div dangerouslySetInnerHTML={{ __html: miniMarkdownToHTML(body) }} />
        }
      >
        <Marked content={body} dir={dir} />
      </ErrorBoundary>
    </div>
  );
}
