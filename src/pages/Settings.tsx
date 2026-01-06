import useSettings from "../hooks/useSettings";
import { useState } from "react";
import { saveSettings } from "../variables/localStorage";

export default function Settings() {
  const { settings, setSettings } = useSettings();
  const [isHigh, setIsHigh] = useState(settings?.isHigh ?? false);
  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSettings(() => ({ isHigh: isHigh }));
    saveSettings({ isHigh: isHigh });
  };
  return (
    <div className="flex items-center justify-center p-20">
      <form className="flex flex-col gap-2" onSubmit={save}>
        <label className="font-bold">الجودة</label>
        <hr className="border border-white/20" />
        <select
          value={isHigh ? "high" : "low"}
          className="rounded border-2 border-white/20 bg-white/20 p-2 px-5 focus:outline-0 [&_option]:bg-white [&_option]:text-black"
          onChange={(e) =>
            e.target.value === "high" ? setIsHigh(true) : setIsHigh(false)
          }
        >
          <option value={"high"}>عالية</option>
          <option value={"low"}>منخفضة</option>
        </select>

        <button
          type="submit"
          className="cursor-pointer rounded bg-violet-500 p-2 px-5 font-bold text-white transition-all duration-150 hover:brightness-95"
        >
          حفظ
        </button>
      </form>
    </div>
  );
}
