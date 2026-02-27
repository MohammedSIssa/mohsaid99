export function miniMarkdownToHTML(md: string) {
  if (!md) return "";

  // Step 1: Handle code blocks ```code```
  const codeBlocks: string[] = [];
  md = md.replace(/```([\s\S]*?)```/g, (_, code) => {
    codeBlocks.push(code);
    return `@@CODEBLOCK${codeBlocks.length - 1}@@`;
  });

  // Step 2: Handle images ![alt](url)
  md = md.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" />');

  // Step 3: Horizontal rules ---
  md = md.replace(/^---$/gim, "<hr />");

  // Step 4: Blockquotes > quote
  md = md.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

  // Step 5: Headers
  md = md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>");

  md = md.replace(
    /^\- \[x\] (.*$)/gim,
    '<li><input type="checkbox" checked disabled /> $1</li>',
  );

  // Step 6: Bold **text**
  md = md.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");

  // Step 7: Italic *text*
  md = md.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // Step 8: Inline code `code`
  md = md.replace(/`([^`]+)`/g, (_, code) => {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<code>${escaped}</code>`;
  });

  // Step 9: Lists - item
  md = md.replace(/^\- (.*$)/gim, "<li>$1</li>");
  md = md.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>");

  // Step 10: Links [text](url)
  md = md.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  // Step 11: Line breaks
  md = md.replace(/\n/g, "<br />");

  // Step 12: Restore code blocks (triple-backtick code)
  md = md.replace(/@@CODEBLOCK(\d+)@@/g, (_, index) => {
    const code = codeBlocks[parseInt(index, 10)];
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre><code>${escaped}</code></pre>`;
  });

  // Step 9: Task lists - [ ] and [x]
  md = md.replace(
    /^\- \[ \] (.*$)/gim,
    '<li><input type="checkbox" disabled /> $1</li>',
  );

  md = md.replace(
    /^\- \[x\] (.*$)/gim,
    '<li><input type="checkbox" checked disabled /> $1</li>',
  );

  // Step X: Tables
md = md.replace(
  /((?:\|.*\|\n)+)/g,
  (tableBlock) => {
    const lines = tableBlock.trim().split("\n");

    if (lines.length < 2) return tableBlock;

    const headerLine = lines[0];
    const separatorLine = lines[1];

    // must contain dashes to be a valid table
    if (!separatorLine.includes("---")) return tableBlock;

    const headers = headerLine
      .split("|")
      .slice(1, -1)
      .map((h) => h.trim());

    const rows = lines.slice(2);

    let thead = "<thead><tr>";
    headers.forEach((h) => {
      thead += `<th>${h}</th>`;
    });
    thead += "</tr></thead>";

    let tbody = "<tbody>";
    rows.forEach((row) => {
      const cells = row
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());

      tbody += "<tr>";
      cells.forEach((cell) => {
        tbody += `<td>${cell}</td>`;
      });
      tbody += "</tr>";
    });
    tbody += "</tbody>";

    return `<table>${thead}${tbody}</table>`;
  }
);

  return md;
}
