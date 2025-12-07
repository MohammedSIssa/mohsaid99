import Icon from "../Icon";

function LandStats() {
  return (
    <div className="flex flex-col gap-4 items-center p-15 relative h-[300px]">
      <Icon iconName={"stats"} />
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
