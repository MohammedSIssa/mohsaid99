import { useOutletContext } from "react-router-dom";
import { BsCalendar2MinusFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";

function LandServer() {
  const { type } = useOutletContext();
  if (type === "goal") {
    return (
      <div className="flex flex-col gap-4 items-center p-15 relative h-[300px]">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <span className="md:hidden">
            <TbTargetArrow size={90} className="opacity-10" />
          </span>
          <span className="hidden md:block">
            <TbTargetArrow size={150} className="opacity-10" />
          </span>
        </div>
        <div className="text-center text-pretty">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 [&_p]:mb-3">
            صفحة الأهداف
          </h1>
          <p>هنا بكتب أهداف كل ربع بالسنة</p>
          <p>الهدف هنا التركيز على أهدافي ومحاولة تحقيقها</p>
        </div>
      </div>
    );
  }
  if (type === "week") {
    return (
      <div className="flex flex-col gap-4 items-center p-15 relative h-[300px]">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <span className="md:hidden">
            <BsCalendar2MinusFill size={90} className="opacity-10" />
          </span>
          <span className="hidden md:block">
            <BsCalendar2MinusFill size={150} className="opacity-10" />
          </span>
        </div>
        <div className="text-center text-pretty">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 [&_p]:mb-3">
            صفحة الأسابيع أو اليوميات
          </h1>
          <p>هنا بكتب آخر الأحداث اللي بتصير معي</p>
          <p>الرحلة موثقة هنا من أول يوم بسنة 2025</p>
        </div>
      </div>
    );
  }
}

export default LandServer;
