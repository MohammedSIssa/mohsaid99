import "./admin.css";
import { Outlet } from "react-router-dom";

export const Admin = () => {
  return (
    <div
      className="w-full min-h-dvh p-10 md:pt-20 flex flex-col flex-wrap gap-5 justify-center items-center"
      dir="ltr"
    >
      <Outlet />
    </div>
  );
};
