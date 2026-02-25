import { createContext } from "react";
import type { User } from "../types/User";

export type AuthContextType = {
  token: string | null;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated?: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  isAdmin: boolean;
  isVIP: boolean;
  setToken?: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  loading: true,
  isVIP: false,
  setIsAuthenticated: () => {},
  isAdmin: false,
  setToken: () => {},
  setIsAdmin: () => {},
});
