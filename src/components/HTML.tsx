export default function HTML({
  content,
  dir,
}: {
  content: string;
  dir: string;
}) {
  return (
    <div
      dir={dir}
      style={{ lineHeight: "1.6" }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
