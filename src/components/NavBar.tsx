import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router";

import Weeks from "../assets/icons/week.svg";
import Goals from "../assets/icons/goals.svg";
import Lock from "../assets/icons/lock.svg";
import Cup from "../assets/icons/cup.svg";
// import Logs from "../assets/icons/logs.svg";
import Home from "../assets/icons/home.svg";
import LogIn from "../assets/icons/login.svg";
import Settings from "../assets/icons/settings.svg";
import Blog from "../assets/icons/blog.svg";

export default function NavBar() {
  const { isAdmin, isLoggedIn, isNotLoggedIn } = useAuth();
  return (
    <div className="fixed bottom-2 left-1/2 z-50 flex h-fit w-[95%] -translate-x-1/2 items-center justify-center gap-3 rounded-xl border-2 border-(--border-color)/50 bg-(--primary-color)/10 p-4 px-6 py-4 text-(--icons-color) shadow-lg shadow-black/10 backdrop-blur-xl md:top-0 md:right-0 md:m-4 md:w-fit md:translate-x-0 md:gap-5 [&_a]:transition-transform [&_a]:duration-200 [&_a]:hover:scale-110">
      <NavLink
        to={"/"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* <FaHome size={30} /> */}
        <img src={Home} width={32} alt="" />
      </NavLink>
      <NavLink
        to={"/week"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* <BsCalendar2MinusFill size={24} /> */}
        <img src={Weeks} width="30" alt="" />
      </NavLink>
      <NavLink
        to={"/goal"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* <TbTargetArrow size={28} /> */}
        <img src={Goals} alt="" width="26" />
      </NavLink>
      {/* <NavLink
        to={"/stats"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoStatsChart size={25} />
      </NavLink> */}
      <NavLink to={"/highlight"}>
        {/* <MdOutlineEmojiEvents size={30} /> */}
        <img src={Cup} alt="" width="30" />
      </NavLink>

      <NavLink className="pointer-events-none brightness-50" to="/blog">
        <img src={Blog} alt="" width="28" />
      </NavLink>
      {isNotLoggedIn() && (
        <NavLink
          to={"/login"}
          state={{ path: location.pathname }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* <FiLogIn size={28} /> */}
          <img src={LogIn} alt="" width={35} />
        </NavLink>
      )}

      {isLoggedIn() && (
        <NavLink
          to={"/special/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Lock} alt="" width="28" />
        </NavLink>
      )}
      {isAdmin() && (
        <span className="hidden"></span>
        // <NavLink
        //   to={"/logs"}
        //   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        // >
        //   {/* <LuLogs size={28} /> */}
        //   <img src={Logs} alt="" width="28" />
        // </NavLink>
      )}

      <NavLink to={"/settings"}>
        {/* <IoMdSettings size={30} /> */}
        <img src={Settings} width={30} alt="" />
      </NavLink>
    </div>
  );
}
