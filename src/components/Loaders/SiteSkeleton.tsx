export default function SiteSkeleton() {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-[#201344] via-[#130d33] to-[#48135f] pb-20 text-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.27),transparent_60%)]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.25),transparent_65%)]"></div>
        <span className="h-20 w-20 animate-spin rounded-xl border-2 border-white/20 bg-white/20"></span>
      </div>
    </>
  );
}
