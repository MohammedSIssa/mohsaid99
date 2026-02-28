import { marked } from "marked";
import { useEffect, useState } from "react";

const Marked = ({ content, dir }: { content: string; dir: string }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const parseMarkdown = async () => {
      const parsedHtml = await marked.parse(content);
      const processUnChecked = parsedHtml.replace(/<td>(\s*⛔\s*)<\/td>/g, `<td class="undone">$1</td>`);
      const processChecked = processUnChecked.replace(/<td>(\s*✅\s*)<\/td>/g, `<td class="done">$1</td>`);
      setHtml(processChecked);
    };
    parseMarkdown();
  }, [content]);

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
