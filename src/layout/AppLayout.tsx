import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-(--bg-color)">
      <NavBar />
      <Outlet />
    </div>
  );
}
