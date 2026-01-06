// import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within an AuthProvider");
  }

  return context;
}
