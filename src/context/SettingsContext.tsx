import { createContext } from "react";
import { type Setting } from "../types/Setting";

export type SettingsContextType = {
  settings: Setting | null;
  setSettings: React.Dispatch<React.SetStateAction<Setting | null>>;
};

export const SettingsContext = createContext<SettingsContextType | null>(null);
