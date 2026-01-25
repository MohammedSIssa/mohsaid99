// hooks/useMediaQuery.ts
import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

// Usage
// const isMobile = useMediaQuery("(max-width: 767px)");
// const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
// const isLargeTablet = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
// const isDesktop = useMediaQuery("(min-width: 1280px)");
