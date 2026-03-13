import HTML from "../HTML";

export default function PostBody({ body, dir }: { body: string; dir: string }) {
  return (
    <div className={`not-prose block w-full py-2 ${dir}`} dir={dir}>
      {/* <Marked content={body} dir={dir} /> */}
      <HTML dir={dir} content={body} />
    </div>
  );
}
