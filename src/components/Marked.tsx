import { marked } from "marked";

const Marked = ({ content, dir }: { content: string; dir: string }) => {
  const html = marked.parse(content);

  return (
    <div
      className="markdown"
      dir={dir}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ lineHeight: "1.6" }}
    />
  );
};

export default Marked;
