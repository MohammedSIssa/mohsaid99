import { IoStatsChart } from "react-icons/io5";

function LandStats() {
  return (
    <div className="flex flex-col gap-4 items-center p-15 relative h-[300px]">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <span className="md:hidden">
          <IoStatsChart size={90} className="opacity-10" />
        </span>
        <span className="hidden md:block">
          <IoStatsChart size={150} className="opacity-10" />
        </span>
      </div>
      <div className="text-center text-pretty">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 [&_p]:mb-3">
          صفحة الاحصائيات
        </h1>
        <p>هنا بقيس التطور تاعي من عدة نواحي</p>
        <p>المحتوى هنا هدفه تتبع التطور بشكل أسهل</p>
      </div>
    </div>
  );
}

export default LandStats;
