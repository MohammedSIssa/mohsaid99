import { NavLink, useLocation } from "react-router-dom";

import { BsCalendar2MinusFill } from "react-icons/bs"; // active ver
import { BsCalendar2Minus } from "react-icons/bs"; // inactive ver

import { FiTarget } from "react-icons/fi"; // inactive ver
import { TbTargetArrow } from "react-icons/tb"; // active ver

import { RiHome2Line } from "react-icons/ri";

import { dataCenter } from "../model/center";
import Logo from "./Logo";

const Navbar = () => {
  const location = useLocation();
  const { latestGoal, latestWeek } = dataCenter;
  const isWeeksActive = location.pathname.startsWith("/weeks");
  const isGoalsActive = location.pathname.startsWith("/goals");
  return (
    <div
      className="nav-bar bg-zinc-900 fixed bottom-0 z-50 md:top-0 flex h-12 w-full border-0 border-t-1 md:border-0 md:px-15 py-5 md:py-8 items-center justify-center md:justify-between"
      style={{ borderColor: "var(--story-border-color)", backgroundColor: 'var(--bg-color)' }}
    >
      <div className="flex md:gap-10 items-center justify-around md:justify-start w-full px-10 md:px-0">
        <NavLink to={`/weeks/${latestWeek}`}>
          {isWeeksActive ? (
            <BsCalendar2MinusFill size={24} />
          ) : (
            <BsCalendar2Minus size={24} />
          )}
        </NavLink>
        <NavLink to="/" className='md:hidden'>
          <RiHome2Line size={24} />
        </NavLink>
        <NavLink to={"/goals/" + latestGoal}>
          {isGoalsActive ? <TbTargetArrow size={26} /> : <FiTarget size={24} />}
        </NavLink>
      </div>
      <Logo />
    </div>
  );
};

export default Navbar;
