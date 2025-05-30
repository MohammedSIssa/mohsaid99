// PageTransitionWrapper.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./transitions.css";

export default function PageTransitionWrapper({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    setTransitionStage("fadeOut");

    const timeout = setTimeout(() => {
      setDisplayChildren(children);
    }, 300); // match your CSS duration

    const loadingTimeout = setTimeout(() => {
      setTransitionStage("fadeIn");
    }, 600);

    return () => {
      clearTimeout(timeout);
      clearTimeout(loadingTimeout);
    };
  }, [location.pathname]);

  return (
    <div className={`fade-wrapper ${transitionStage}`}>{displayChildren}</div>
  );
}
