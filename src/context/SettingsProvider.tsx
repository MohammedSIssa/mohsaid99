import { useState } from "react";
import { SettingsContext } from "./SettingsContext";
import type { Setting } from "../types/Setting";
import { loadSettings } from "../variables/localStorage";

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<Setting | null>(loadSettings);
  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
