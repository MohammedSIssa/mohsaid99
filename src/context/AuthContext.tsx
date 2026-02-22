import { createContext } from "react";

export type AuthContextType = {
  token: string | null;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isAuthenticated?: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  isAdmin: boolean;
  setToken?: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  loading: true,
  setIsAuthenticated: () => {},
  isAdmin: false,
  setToken: () => {},
  setIsAdmin: () => {},
});
