import { useState, useEffect } from "react";

export interface MediaQueryState {
  isMobile: boolean;
  isDesktop: boolean;
}

export function useMediaQuery(): MediaQueryState {
  const [state, setState] = useState<MediaQueryState>({
    isMobile: false,
    isDesktop: false,
  });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const desktopQuery = window.matchMedia("(min-width: 769px)");

    const updateState = () => {
      setState({
        isMobile: mobileQuery.matches,
        isDesktop: desktopQuery.matches,
      });
    };

    // Set initial state
    updateState();

    // Add listeners for changes
    const mobileListener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setState((prev) => ({ ...prev, isMobile: true, isDesktop: false }));
      }
    };

    const desktopListener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setState((prev) => ({ ...prev, isMobile: false, isDesktop: true }));
      }
    };

    // Handle older browsers that don't support addEventListener
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", mobileListener);
      desktopQuery.addEventListener("change", desktopListener);
    } else {
      mobileQuery.addListener(mobileListener);
      desktopQuery.addListener(desktopListener);
    }

    return () => {
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener("change", mobileListener);
        desktopQuery.removeEventListener("change", desktopListener);
      } else {
        mobileQuery.removeListener(mobileListener);
        desktopQuery.removeListener(desktopListener);
      }
    };
  }, []);

  return state;
}
