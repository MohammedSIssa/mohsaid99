import Repair from "../assets/icons/repair.svg";
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
      <div className="bg-(--darker-bg-color) p-6 w-full md:w-fit border-2 rounded-lg border-(--border-color) flex flex-col items-center">
        <img src={Repair} width={50} className="mb-10" />
        <h1 className="font-bold text-2xl">هذا الجزء فيه إصلاحات حالياً</h1>
      </div>
    </div>
  );
};

export default Temporary;
