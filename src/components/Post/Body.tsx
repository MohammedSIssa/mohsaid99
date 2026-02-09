import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

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

  const markdownComponents = {
    // paragraphs
    p: ({ ...props }) => (
      <p className="my-2 leading-7 text-(--font-color)" dir={dir} {...props} />
    ),
    // headings
    h1: ({ ...props }) => (
      <h1 className="my-3 text-2xl font-bold" {...props} dir={dir} />
    ),
    h2: ({ ...props }) => (
      <h2 className="my-3 text-xl font-semibold" {...props} dir={dir} />
    ),
    h3: ({ ...props }) => (
      <h3 className="my-2 text-lg font-semibold" {...props} dir={dir} />
    ),
    // lists
    ul: ({ ...props }) => (
      <ul className="my-2 list-inside list-disc" {...props} dir={dir} />
    ),
    ol: ({ ...props }) => (
      <ol className="my-2 list-inside list-decimal" {...props} dir={dir} />
    ),
    li: ({ ...props }) => <li className="mb-1 ml-4" {...props} dir={dir} />,
    // blockquote
    blockquote: ({ ...props }) => (
      <blockquote
        className="my-2 border-l-2 border-gray-400 pl-4 text-gray-500 italic"
        {...props}
        dir={dir}
      />
    ),
    // inline code
    code: (props: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) => {
      const { inline, children, ...rest } = props;
      return inline ? (
        <code className="rounded px-1 text-sm" dir={"ltr"} {...rest}>
          {children}
        </code>
      ) : (
        <code
          dir="ltr"
          className="my-3 block overflow-x-auto rounded-xl bg-black p-4 text-sm text-white"
          {...rest}
        >
          {children}
        </code>
      );
    },
    // images
    img: ({ ...props }) => (
      <img className="my-2 max-w-full rounded-md" dir={dir} {...props} />
    ),
    hr: ({ ...props }) => (
      <hr
        className="my-6 border-t border-solid border-gray-400 opacity-50"
        {...props}
        dir={dir}
      />
    ),
    // Table elements
    table: ({ ...props }) => (
      <table
        className="my-4 w-full border-collapse border border-gray-400 text-sm"
        {...props}
        dir={dir}
      />
    ),
    thead: ({ ...props }) => (
      <thead
        className="bg-gray-200 font-semibold text-gray-700"
        dir={dir}
        {...props}
      />
    ),
    tbody: ({ ...props }) => <tbody {...props} dir={dir} />,
    tr: ({ ...props }) => (
      <tr className="odd:bg-white even:bg-gray-50" dir={dir} {...props} />
    ),
    th: ({ ...props }) => (
      <th
        className="border border-gray-300 px-3 py-1 text-left"
        dir={dir}
        {...props}
      />
    ),
    td: ({ ...props }) => (
      <td className="border border-gray-300 px-3 py-1" dir={dir} {...props} />
    ),
  };

  return (
    <>
      {(showMore || showAllText) && (
        <div className={`not-prose block w-full py-2 ${dir}`}>
          {/* <pre dir={dir} className="max-w-full md:max-w-[700px]"> */}
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            children={body}
            components={markdownComponents}
          />
          {/* </pre> */}
        </div>
      )}
      {showMore || (
        <div className="py-2">
          {!showAllText && (
            // <pre dir={dir} className="max-w-full md:max-w-[700px]">
            <>
              <div className="not-prose w-full">
                <Markdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  children={`${body?.slice(0, 60)}...`}
                  components={markdownComponents}
                />
              </div>
              <button
                className="text-(--font-color)/40 hover:cursor-pointer"
                onClick={() => setShowMore(true)}
              >
                عرض المزيد
              </button>
            </>

            // </pre>
          )}
        </div>
      )}
    </>
  );
}
