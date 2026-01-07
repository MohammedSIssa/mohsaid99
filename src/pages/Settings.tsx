import useSettings from "../hooks/useSettings";
import { useState } from "react";
import { saveSettings } from "../variables/localStorage";
import { MdLogout } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import LogOutButton from "../components/LogOutButton";

export default function Settings() {
  const { settings, setSettings } = useSettings();
  const [isHigh, setIsHigh] = useState(settings?.isHigh ?? false);
  const [theme, setTheme] = useState(settings?.theme ?? "default");
  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSettings(() => ({ isHigh: isHigh, theme }));
    saveSettings({ isHigh: isHigh, theme });
  };
  const { isLoggedIn } = useAuth();
  return (
    <div className="place-items-center p-5">
      <div className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-(--primary-color)/10 p-10 md:w-[300px] md:border-2 md:border-(--border-color)">
        <form
          className="flex w-full flex-col items-center gap-2 [&_hr]:w-full [&_select,button]:max-w-fit"
          onSubmit={save}
        >
          <label className="font-bold">الجودة</label>
          <hr className="border border-(--border-color)/20" />
          <select
            value={isHigh ? "high" : "low"}
            className="rounded border-2 border-(--border-color)/50 bg-(--primary-color)/20 p-2 px-5 focus:outline-0 [&_option]:bg-white [&_option]:text-black"
            onChange={(e) =>
              e.target.value === "high" ? setIsHigh(true) : setIsHigh(false)
            }
          >
            <option value={"high"}>عالية</option>
            <option value={"low"}>منخفضة</option>
          </select>

          <label className="mt-10 font-bold">الثيم</label>
          <hr className="border border-(--border-color)/20" />
          <select
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
            className="rounded border-2 border-(--border-color)/50 bg-(--primary-color)/20 p-2 px-5 focus:outline-0 [&_option]:bg-white [&_option]:text-black"
          >
            <option value={"dark"}>داكن</option>
            <option value={"light"}>فاتح</option>
            <option value={"default"}>ملون</option>
          </select>

          <button
            type="submit"
            className="cursor-pointer rounded-md border-2 border-(--border-color) bg-(--primary-color)/20 p-2 px-5 font-bold text-(--font-color) transition-all duration-150 hover:brightness-95"
          >
            حفظ
          </button>
          <hr className="mt-10 border border-(--border-color)/20" />
        </form>

        {isLoggedIn() && (
          <>
            <p className="font-bold">تسجيل الخروج</p>
            <LogOutButton>
              <MdLogout size={28} />
            </LogOutButton>
          </>
        )}
      </div>
    </div>
  );
}
