import { NavLink } from "react-router-dom";

import { dataCenter } from "../model/center";

function Welcome() {
  const whatIamLearningCurrently = "Node.js";
  const { latestGoal, latestWeek } = dataCenter;
  return (
    <div
      className="h-dvh w-vw flex flex-col items-center p-10 py-15 md:px-30 text-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--font-color)" }}
    >
      <h1 className="text-5xl md:text-6xl mb-15 font-bold">مرحبا 👋🏻</h1>
      <h1 className="text-lg md:text-2xl lg:text-2xl mb-5">
        أنا محمد، وهذا مكاني الخاص لتوثيق رحلتي 📑
      </h1>
      <p className="text-lg md:text-2xl mb-10 md:mb-20 lg:mb-30">
        كل أسبوع أشارك هنا تجاربي، شو قاعد بتعلم، أهدافي السنوية، وشوية صور من
        الحياة
      </p>
      <p className="text-lg md:text-2xl mb-5">
        أنا الآن أتعلم {whatIamLearningCurrently}، بتقدر تتابع تقدمي في صفحة
        الأهداف والأسابيع
      </p>
      <div className="flex gap-5 md:gap-10 py-10">
        <NavLink
          to={`/weeks/${latestWeek}`}
          className="p-2 px-5 rounded-xl text-lg md:text-2xl md:p-8 md:px-18"
          style={{ backgroundColor: "var(--story-border-color)" }}
        >
          الأسابيع
        </NavLink>
        <NavLink
          to={`/goals/${latestGoal}`}
          className="border-1 p-2 px-5 rounded-xl text-lg md:text-2xl md:p-8 md:px-18"
          style={{ borderColor: "var(--story-border-color)" }}
        >
          الأهداف
        </NavLink>
      </div>
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">صنع بالحب بإستخدام React ❤️</p>
    </div>
  );
}

export default Welcome;
