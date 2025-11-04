import { NavLink } from "react-router-dom";
import { clearUser } from "../scripts/localStorage";

import { BsCalendar2MinusFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { LuLogs } from "react-icons/lu";

import { useAuth } from "./hooks/useAuth";

const NavBar = () => {
  const { user } = useAuth();
  return (
    <div className="navbar flex items-center gap-5 fixed bottom-0 w-full justify-center md:top-0 md:right-0 md:translate-x-0 h-fit md:w-fit md:m-4 border-0 border-t md:border p-4 md:rounded-xl">
      <NavLink to={"/"}>
        <FaHome size={30} />
      </NavLink>
      <NavLink to={"/weeks/latest"}>
        <BsCalendar2MinusFill size={24} />
      </NavLink>
      <NavLink to={"/goals/latest"}>
        <TbTargetArrow size={28} />
      </NavLink>
      <NavLink to={"/stats/latest"}>
        <IoStatsChart size={25} />
      </NavLink>
      <NavLink to={"/blogs/latest"}>
        <HiMiniPencilSquare size={27} />
      </NavLink>
      {user?.username === undefined && (
        <NavLink to={"/login"}>
          <FiLogIn size={28} />
        </NavLink>
      )}
      {user?.role && (
        <NavLink to={"/special/latest"}>
          <FaLock size={25} />
        </NavLink>
      )}
      {user?.role === 1 && (
        <NavLink to={"/admin/logs"}>
          <LuLogs size={28} />
        </NavLink>
      )}
      {user?.username && (
        <button onClick={clearUser} className="hover:cursor-pointer">
          <MdLogout size={28} />
        </button>
      )}
    </div>
  );
};

export default NavBar;
