// import React, { lazy, Suspense } from "react";
import Marked from "../Marked";

// const MarkdownContent = lazy(() => import("../MarkdownContent"));

// class ErrorBoundary extends React.Component<
//   { children: React.ReactNode; fallback: React.ReactNode },
//   { hasError: boolean }
// > {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     }

//     return this.props.children;
//   }
// }

export default function PostBody({ body, dir }: { body: string; dir: string }) {
  return (
    <div className={`not-prose block w-full py-2 ${dir}`}>
      <Marked content={body} dir={dir} />
    </div>
  );
}
