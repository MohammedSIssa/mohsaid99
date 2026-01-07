export default function SiteSkeleton() {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center bg-(--primary-color) pb-20 text-white">
        {/* <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.27),transparent_60%)]"></div> */}
        {/* <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.25),transparent_65%)]"></div> */}
        <span className="h-20 w-20 animate-spin rounded-xl border-2 border-(--border-color)/20 bg-(--primary-color)/20"></span>
      </div>
    </>
  );
}
