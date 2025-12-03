import { NavLink } from "react-router-dom";

import { BsCalendar2MinusFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
// import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { LuLogs } from "react-icons/lu";

import { clearUser } from "../scripts/localStorage";
import { useAuth } from "./hooks/useAuth";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const { user } = useAuth();
  return (
    <div className="navbar flex items-center gap-5 fixed bottom-0 w-full justify-center md:top-0 md:right-0 md:translate-x-0 h-fit md:w-fit md:m-4 border-0 border-t md:border p-4 md:rounded-xl md:shadow-xl z-50">
      <NavLink to={"/"}>
        <FaHome size={30} />
      </NavLink>
      <NavLink to={"/weeks"}>
        <BsCalendar2MinusFill size={24} />
      </NavLink>
      <NavLink to={"/goals"}>
        <TbTargetArrow size={28} />
      </NavLink>
      <NavLink to={"/stats"}>
        <IoStatsChart size={25} />
      </NavLink>
      {/* <NavLink to={"/blogs"}>
        <HiMiniPencilSquare size={27} />
      </NavLink> */}
      {user?.username === undefined && (
        <NavLink to={"/login"} state={{ path: location.pathname }}>
          <FiLogIn size={28} />
        </NavLink>
      )}
      {user?.role && (
        <NavLink to={"/special"}>
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
