// import Repair from "../assets/icons/repair.svg";
import E404 from '../assets/404.png';
import { logger } from "../variables/logger";
import { useEffect } from "react";

const Temporary = () => {
  useEffect(() => {
    async function log() {
      await logger("monmon", "special repairs");
    }
    log();
  }, []);
  return (
    <div className="flex flex-col md:pr-16 min-h-screen items-center justify-center py-25">
      <div className="bg-(--darker-bg-color) border-l-2 border-l-fuchsia-400 border-r-2 border-r-blue-500 p-6 w-full md:w-fit rounded-lg flex flex-col items-center">
        <img src={E404} width={380} className="mb-10 bg-blend-screen rounded-lg brightness-85" />
        <h1 className="font-bold text-2xl">هذا الجزء فيه إصلاحات حالياً</h1>
      </div>
    </div>
  );
};

export default Temporary;
