export default function InvalidType() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--bg-color) px-4">
      <div className="bg-(--darker-bg-color) shadow-lg rounded-2xl p-8 text-center max-w-sm w-full">
        <div className="text-5xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold mb-2">نوع غير صالح</h1>
        <p className=" text-sm">
          عذرًا، النوع الذي تحاول الوصول إليه غير مدعوم أو غير موجود.
        </p>
      </div>
    </div>
  );
}
