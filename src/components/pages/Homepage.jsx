import WaveHand from "../WaveHand";
import Hand3 from "../Hand3";
import Book from "../Book";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col h-dvh items-center justify-center p-10 text-center [&_p]:mb-2 [&_p]:font-bold [&_p]:text-sm [&_p]:md:text-lg [&_p]:max-w-[600px]">
      <div className="flex w-[170px] text-right">
        <p>مرحبا،</p>
      </div>

      <div className="mb-10">
        <span className="md:hidden">
          <WaveHand size="140px" />
        </span>
        <span className="hidden md:block">
          <WaveHand size="170px" />
        </span>
      </div>
      <div className="flex flex-row-reverse">
        <Hand3 size="20px" />
        <p>أنا محمد وهذا مكاني الخاص لتوثيق رحلتي</p>
      </div>
      <div className="flex flex-row-reverse items-center justify-center">
        <p>
          هنا بتلاقي يومياتي، أهدافي، بالإضافة لصفحات بتقيس تقدمي بمختلف
          المهارات
        </p>
      </div>
      <div className="book mt-10">
        <NavLink to='/weeks'>
          <Book size="100px" />
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
