import Blog from "../assets/icons/blog.svg";
import BlogOutline from "../assets/icons/blog-outline.svg";
import Special from "../assets/icons/lock.svg";
import SpecialOutline from "../assets/icons/lock-outline.svg";
import Home from "../assets/icons/home.svg";
import HomeOutline from "../assets/icons/home-outline.svg";
import Week from "../assets/icons/week.svg";
import WeekOutline from "../assets/icons/week-outline.svg";
import Goal from "../assets/icons/goal.svg";
import GoalOutline from "../assets/icons/goal-outline.svg";

import useAuth from "../hooks/useAuth";

import { NavLink } from "react-router";

import { useType } from "../hooks/useType";

export default function NavIcons({ showNav }: { showNav: boolean }) {
  const { type } = useType();
  const { isAuthenticated, loading } = useAuth();
  return (
    <div
      className={`icons ${!isAuthenticated && !loading ? "opacity-35 pointer-events-none" : ""} flex flex-col gap-5 [&>a]:border-b [&>a]:flex [&>a]:items-center text-white [&>a]:gap-5 [&>a]:pb-2 [&>a]:pr-4`}
    >
      <NavLink to="/" title="الصفحة الرئيسية">
        <img
          src={!type ? Home : HomeOutline}
          alt="home icon"
          className="min-w-[27px]"
          width={27}
          height={27}
        />
        <p
          className={`
    overflow-hidden whitespace-nowrap
    transition-all duration-300 delay-200
    ${showNav ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
  `}
        >
          الصفحة الرئيسية
        </p>
      </NavLink>
      <NavLink to="/week" title="الأسابيع">
        <img
          className="min-w-[27px]"
          src={type === "week" ? Week : WeekOutline}
          alt="weeks icon"
          width={27}
          height={27}
        />
        <p
          className={`
    overflow-hidden whitespace-nowrap
    transition-all duration-300 delay-200
    ${showNav ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
  `}
        >
          الأسابيع
        </p>
      </NavLink>
      <NavLink
        className={"pointer-events-none opacity-35"}
        to="/blog"
        title="المدونات"
      >
        <img
          src={type === "blog" ? Blog : BlogOutline}
          alt="blogs icon"
          className="min-w-[26px]"
          width={26}
          height={26}
        />
        <p
          className={`
    overflow-hidden whitespace-nowrap
    transition-all duration-300 delay-200
    ${showNav ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
  `}
        >
          المدونات
        </p>
      </NavLink>
      <NavLink to="/goal" title="الأهداف">
        <img
          src={type === "goal" ? Goal : GoalOutline}
          alt="goals icon"
          className="min-w-[26px]"
          width={26}
          height={26}
        />
        <p
          className={`
    overflow-hidden whitespace-nowrap
    transition-all duration-300 delay-200
    ${showNav ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
  `}
        >
          الأهداف
        </p>
      </NavLink>
      <NavLink to="/special" title="المحتوى الخاص">
        <img
          src={type === "special" ? Special : SpecialOutline}
          alt="special icon"
          className="min-w-[26px]"
          width={26}
          height={26}
        />
        <p
          className={`
    overflow-hidden whitespace-nowrap
    transition-all duration-300 delay-200
    ${showNav ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
  `}
        >
          المحتوى الخاص
        </p>
      </NavLink>
    </div>
  );
}
