import { useEffect } from "react";

export function useFavicon(iconPath: string) {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>(
      "link[rel~='icon']"
    );

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = iconPath;
  }, [iconPath]);
}