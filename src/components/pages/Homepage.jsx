import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col h-dvh items-center justify-center p-10 text-center [&_p]:mb-2 sm:[&_p]:font-bold">
      <h1 className="text-2xl md:text-5xl font-bold mb-10">مرحبا 👋🏻</h1>
      <p className="text-sm md:text-lg">
        أنا محمد وهذا مكاني الخاص لتوثيق رحلتي ✏️
      </p>
      <p className="text-sm md:text-lg max-w-[600px]">
        هنا بتلاقي يومياتي، شوية صور من الحياة، أهدافي، مع مدونتي اللي
        اكتب فيها من فترة لفترة
      </p>
      <p className="text-sm md:text-lg max-w-[600px]">
        بتقدر تتابع تقدمي من صفحة اليوميات أو تشوف شو عندي أهداف
      </p>
      <div className="flex flex-col md:flex-row gap-2 mt-10">
        <NavLink
          style={{
            backgroundColor: "var(--post-border-color)",
            borderColor: "var(--story-border-color)",
          }}
          className={"p-2 px-5 font-bold rounded border-2"}
          to={"/weeks"}
        >
          صفحة اليوميات
        </NavLink>
        <NavLink
          style={{
            backgroundColor: "var(--post-border-color)",
            borderColor: "var(--story-border-color)",
          }}
          className={"p-2 px-5 font-bold rounded border-2"}
          to={"/goals"}
        >
          صفحة الأهداف
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
