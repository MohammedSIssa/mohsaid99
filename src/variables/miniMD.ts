export function miniMarkdownToHTML(md: string) {
  if (!md) return "";

  let html = md
    // Headers: #, ##, ###
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")

    // Bold: **text**
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")

    // Italic: *text*
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")

    // Lists: - item
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>")

    // Links: [text](url)
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')

    // Line breaks
    .replace(/\n/g, "<br />");

  return html;
}
