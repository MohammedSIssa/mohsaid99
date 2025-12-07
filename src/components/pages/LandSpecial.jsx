import Icon from "../Icon";
import SpecialPerson from "../SpecialPerson";

function LandSpecial() {
  return (
    <div className="flex flex-col gap-4 items-center pt-15 relative h-[300px]">
      <Icon iconName={"special"} />
      <div className="text-center text-pretty flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-15 [&_p]:mb-3">
          صفحة المحتوى الخاص
        </h1>
        <p>الجزء هاد كان هدية الـ11 شهر</p>
        <span className="md:hidden gift">
          <SpecialPerson size="100px" />
        </span>
        <span className="hidden md:block gift">
          <SpecialPerson size="120px" />
        </span>
        <p> المحتوى هنا محدش بيقدر يشوفو غير شخص واحد</p>
        <p>هان بكتب آخر التطورات بشكل شخصي اكتر</p>
      </div>
    </div>
  );
}

export default LandSpecial;
