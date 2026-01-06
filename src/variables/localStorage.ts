import type { User } from "../types/User";
import type { Setting } from "../types/Setting";

export const loadUser = (): User | null => {
  const stored = localStorage.getItem("user");
  if (!stored) return null;

  try {
    return JSON.parse(stored) as User;
  } catch {
    return null;
  }
};

export const saveUser = (user: User): void =>
  localStorage.setItem("user", JSON.stringify(user));

export const removeUser = (): void => localStorage.removeItem("user");

export const saveSettings = (settings: Setting) =>
  localStorage.setItem("settings", JSON.stringify(settings));

export const loadSettings = () => {
  const stored = localStorage.getItem("settings");
  if (!stored) return null;

  try {
    return JSON.parse(stored) as Setting;
  } catch {
    return null;
  }
};
