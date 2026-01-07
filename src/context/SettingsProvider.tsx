import { useState, useEffect } from "react";
import { SettingsContext } from "./SettingsContext";
import type { Setting } from "../types/Setting";
import { loadSettings } from "../variables/localStorage";

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<Setting | null>(loadSettings);
  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("default", "dark", "light");

    if (settings?.theme === "dark") html.classList.add("dark");
    else if (settings?.theme === "light") html.classList.add("light");
    else {
      html.classList.add("default");
    }
  }, [settings?.theme]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
