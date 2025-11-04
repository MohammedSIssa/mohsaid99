import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

export default function RequireUnAuth({ role }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username || user?.role) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, role, navigate]);

  return <Outlet />;
}
