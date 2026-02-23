import Hamburger from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";
import Login from "../assets/icons/login.svg";
import Profile from "../assets/icons/profile.svg";
import Logout from "../assets/icons/logout.svg";

import NavIcons from "./NavIcons";

import { API } from "../variables/api";

import { useMediaQuery } from "../hooks/useMediaQuery";
import { useState } from "react";

import { useType } from "../hooks/useType";

import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

import Stories from "./Stories";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const { isMobile } = useMediaQuery();

  const { isAuthenticated, loading, setIsAuthenticated, setUser } = useAuth();
  const { type } = useType();

  async function handleLogout() {
    try {
      const res = await fetch(`${API}/logout`, {
        method: "GET",
      });
      if (res.ok) {
        setIsAuthenticated(false);
        setUser(null);
        window.location.reload();
      }
    } catch (error) {
      alert("Failed to logout.");
    }
  }

  return (
    <div>
      <button
        className="fixed top-2.5 right-4 z-900 hover:cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      >
        <img
          src={showNav ? Close : Hamburger}
          alt="close icon"
          width={27}
          height={27}
        />
      </button>
      <div
        onClick={() => setShowNav(false)}
        className={
          showNav
            ? "fixed top-0 left-0 w-dvw h-dvh z-800 bg-black opacity-20 transition-all duration-350"
            : "opacity-0"
        }
      ></div>
      {/* prettier-ignore */}
      <nav
  style={{ backgroundColor: 'var(--bg-color)', borderLeftColor: 'var(--border-color)' }}
  className={`h-dvh flex flex-col z-850 pt-20
             md:border-l
             fixed top-0 right-0 transition-all 
             ease-in-out duration-300 
             ${showNav && isMobile ? "transform-x-0 w-full" 
              : isMobile ? "translate-x-full" : ""} 
              ${showNav && !isMobile ? "w-80" : "w-14"}`}
>
        <NavIcons showNav={showNav} />

        <Stories showNav={showNav} />

        {!type && <div className="flex-1"></div>}
        
        <div className={`w-full h-15 mt-1 border-t border-t-(--border-color)`}>
          {!loading && !isAuthenticated && (
            <NavLink
              to="/login"
              className={`w-full h-full flex ${showNav ? "px-5 gap-5" : " justify-center"} items-center hover:bg-(--darker-bg-color) transition-colors duration-200`}
            >
              <img src={Login} width={27} height={27} />
              <p
          className={`
    overflow-hidden whitespace-nowrap
    transition-all duration-300 delay-200
    ${showNav ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
  `}
        >تسجيل الدخول</p>
            </NavLink>
          )}
          {!loading && isAuthenticated && (
            <div
              className={`w-full h-full flex items-center ${showNav ? "px-5 justify-between" : " justify-center hover:bg-(--darker-bg-color)"} transition-colors duration-200`}
            >
              <img src={Profile} width={27} height={27} />
              {showNav && (
                <button className="cursor-pointer flex gap-4 items-center" onClick={handleLogout}>
                <p className="overflow-hidden whitespace-nowrap">تسجيل الخروج</p><img src={Logout} width={27} height={27} /></button>)}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
