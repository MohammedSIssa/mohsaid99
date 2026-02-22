import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router";

export default function RequireAuth() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <h1>جار توثيق المستخدم..</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <h1>يجب تسجيل الدخول للوصول إلى هذه الصفحة</h1>
      </div>
    );
  }

  return <Outlet />;
}
