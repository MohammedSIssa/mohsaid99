import { getToken } from "../variables/authStorage";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { API } from "../variables/api";
import type { User } from "../types/User";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(getToken());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isVIP, setIsVIP] = useState(false);

  useEffect(() => {
    // const token = getToken();

    if (!token) {
      setLoading(false);
      return;
    }

    async function verifyToken() {
      try {
        setLoading(true);
        const res = await fetch(`${API}/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          // token is invalid, remove it
          localStorage.removeItem("token");
          setLoading(false);
        } else {
          const data = await res.json();
          setUser(data.user);
          setToken(token);
          setIsAuthenticated(true);

          const adminCheck =
            Number(data.user.user.role) ===
            Number(import.meta.env.VITE_ADMIN_ROLE);

          setIsAdmin(adminCheck);

          const vipCheck =
            Number(data.user.user.role) ===
            Number(import.meta.env.VITE_MONMON_ROLE);

          setIsVIP(vipCheck);
          setLoading(false);
        }
      } catch (error) {
        // network error, do nothing
        setLoading(false);
      }
    }
    verifyToken();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        isAdmin,
        isVIP,
        setToken,
        setIsAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
