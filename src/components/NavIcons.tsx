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
import RedisOutline from "../assets/icons/redis-outline.svg";
import Redis from "../assets/icons/redis.svg";

import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router";
import { useType } from "../hooks/useType";
import NavigateSound from "../assets/navigate.mp3";

import { useRef } from "react";

import { useMediaQuery } from "../hooks/useMediaQuery";

export default function NavIcons({ showNav }: { showNav: boolean }) {
  const { type } = useType();
  const { isAdmin } = useAuth();

  const navigateAudio = useRef(new Audio(NavigateSound));

  const navItems = [
    {
      to: "/",
      label: "الصفحة الرئيسية",
      icon: Home,
      iconOutline: HomeOutline,
      requiresAuth: false,
      typeValue: null,
      ready: true,
    },
    {
      to: "/week",
      label: "الأسابيع",
      icon: Week,
      iconOutline: WeekOutline,
      requiresAuth: true,
      typeValue: "week",
      ready: true,
    },
    {
      to: "/blog",
      label: "المدونات",
      icon: Blog,
      iconOutline: BlogOutline,
      requiresAuth: true,
      ready: false,
      typeValue: "blog",
    },
    {
      to: "/goal",
      label: "الأهداف",
      icon: Goal,
      iconOutline: GoalOutline,
      requiresAuth: true,
      ready: true,
      typeValue: "goal",
    },
    {
      to: "/special",
      label: "المحتوى الخاص",
      icon: Special,
      iconOutline: SpecialOutline,
      requiresAuth: true,
      ready: true,
      typeValue: "special",
    },
    {
      to: "/redis",
      label: "Redis",
      icon: Redis,
      iconOutline: RedisOutline,
      requiresAuth: true,
      typeValue: "redis",
      ready: true,
      adminOnly: true,
    },
  ];

  const { isMobile } = useMediaQuery();

  function handleNavClick() {
    navigateAudio.current.currentTime = 0;
    navigateAudio.current.volume = 0.3;
    navigateAudio.current.play();
  }

  // Filter for mobile display
  const mobileNavItems = navItems.filter((item) => !item.adminOnly || isAdmin);

  if (isMobile) {
    return (
      <div className="grid grid-cols-3 pt-15">
        {mobileNavItems.map((item) => {
          return (
            <NavLink
              key={item.to}
              onClick={handleNavClick}
              to={item.to}
              title={item.label}
              className={`${!item.ready ? "pointer-events-none opacity-25" : ""} flex flex-col items-center gap-2 p-2 rounded-lg transition`}
            >
              <img
                src={type === item.typeValue ? item.icon : item.iconOutline}
                alt={`${item.label} icon`}
                className="w-8 h-8"
              />
              {/* <span className="text-sm">{item.label}</span> */}
            </NavLink>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`icons flex pt-20 flex-col gap-2 [&>a]:border-b [&>a]:flex [&>a]:items-center [&>a]:gap-5 [&>a]:pb-2 [&>a]:pr-4`}
    >
      {navItems.map((item) => {
        if (item.adminOnly && !isAdmin) return null;
        // const disabled = item.requiresAuth && !isAuthenticated && !loading;

        return (
          <NavLink
            key={item.to}
            onClick={handleNavClick}
            to={item.to}
            title={item.label}
            className={`${!item.ready ? "pointer-events-none opacity-25" : ""}`}
          >
            <img
              src={type === item.typeValue ? item.icon : item.iconOutline}
              alt={`${item.label} icon`}
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
              {item.label}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
}
