import "./admin.css";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div
      className="w-full min-h-dvh flex flex-col flex-wrap gap-5 py-25 justify-center items-center"
      dir="ltr"
    >
      <Outlet />
    </div>
  );
}
