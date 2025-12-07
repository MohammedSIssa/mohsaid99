import { FaLock } from "react-icons/fa";

function LandSpecial() {
  return (
    <div className="flex flex-col gap-4 items-center p-15 relative h-[300px]">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <span className="md:hidden">
          <FaLock size={90} className="opacity-10" />
        </span>
        <span className="hidden md:block">
          <FaLock size={150} className="opacity-10" />
        </span>
      </div>
      <div className="text-center text-pretty">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 [&_p]:mb-3">صفحة المحتوى الخاص</h1>
        <p>الجزء هاد كان هدية الـ11 شهر</p>
        <p> المحتوى هنا محدش بيقدر يشوفو غير شخص واحد</p>
        <p>هان بكتب آخر التطورات بشكل شخصي اكتر</p>
      </div>
    </div>
  );
}

export default LandSpecial;
