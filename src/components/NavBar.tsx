import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router";

import { BsCalendar2MinusFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
// import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { LuLogs } from "react-icons/lu";
import { MdOutlineEmojiEvents } from "react-icons/md";

import { IoMdSettings } from "react-icons/io";

export default function NavBar() {
  const { isAdmin, isLoggedIn, isNotLoggedIn } = useAuth();
  return (
    <div className="fixed bottom-2 left-1/2 z-50 flex h-fit w-[95%] -translate-x-1/2 items-center justify-center gap-5 rounded-xl border-2 border-white/20 bg-white/10 p-4 px-6 py-4 text-yellow-300 shadow-lg shadow-black/10 backdrop-blur-xl md:top-0 md:right-0 md:m-4 md:w-fit md:translate-x-0 [&_a]:transition-transform [&_a]:duration-200 [&_a]:hover:scale-110">
      <NavLink
        to={"/"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaHome size={30} />
      </NavLink>
      <NavLink
        to={"/week"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <BsCalendar2MinusFill size={24} />
      </NavLink>
      <NavLink
        to={"/goal"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <TbTargetArrow size={28} />
      </NavLink>
      <NavLink
        to={"/stats"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoStatsChart size={25} />
      </NavLink>
      <NavLink to={"/highlight"}>
        <MdOutlineEmojiEvents size={30} />
      </NavLink>
      {/* <NavLink to={"/blogs"}>
        <HiMiniPencilSquare size={27} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </NavLink> */}
      {isNotLoggedIn() && (
        <NavLink
          to={"/login"}
          state={{ path: location.pathname }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FiLogIn size={28} />
        </NavLink>
      )}

      {isLoggedIn() && (
        <NavLink
          to={"/special/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaLock size={25} />
        </NavLink>
      )}
      {isAdmin() && (
        <NavLink
          to={"/logs"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <LuLogs size={28} />
        </NavLink>
      )}
      <NavLink to={"/settings"}>
        <IoMdSettings size={30} />
      </NavLink>
    </div>
  );
}
