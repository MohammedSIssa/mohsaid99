// import { getToken } from "../variables/authStorage";
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
  // const [token, setToken] = useState<string | null>(getToken());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const token = getToken();

    async function verifyUser() {
      try {
        const res = await fetch(`${API}/auth/verify`, {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const user = await res.json();
          const adminCheck =
            Number(user.role) === Number(import.meta.env.VITE_ADMIN_ROLE);

          setUser(user);
          setIsAuthenticated(true);
          setIsAdmin(adminCheck);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
      } finally {
        setLoading(false);
      }
    }

    verifyUser();

    // if (token) {
    //   // const sleep = (ms: number) =>
    //   // new Promise((resolve) => setTimeout(resolve, ms));
    //   async function verifyToken() {
    //     try {
    //       setLoading(true);
    //       // await sleep(2000);
    //       const res = await fetch(`${API}/auth/verify`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    //       if (!res.ok) {
    //         // token is invalid, remove it
    //         localStorage.removeItem("token");
    //         setLoading(false);
    //       } else if (res.ok) {
    //         const data = await res.json();
    //         setUser(data.user.user);
    //         setToken(token);
    //         setIsAuthenticated(true);

    //         const adminCheck =
    //           Number(data.user.user.role) ===
    //           Number(import.meta.env.VITE_ADMIN_ROLE);

    //         setIsAdmin(adminCheck);

    //         setLoading(false);
    //       }
    //     } catch (error) {
    //       // network error, do nothing
    //       setLoading(false);
    //     }
    //   }
    //   verifyToken();
    // } else {
    //   setLoading(false);
    // }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        // token,
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        isAdmin,
        // setToken,
        setIsAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
