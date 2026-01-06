import { removeUser } from "../variables/localStorage";
import useAuth from "../hooks/useAuth";

export default function LogOutButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser } = useAuth();
  function logout() {
    removeUser();
    setUser(null);
  }
  return (
    <button
      className="rounded-lg border-2 border-white/40 bg-white/10 p-2 px-5 hover:cursor-pointer"
      onClick={logout}
    >
      {children}
    </button>
  );
}
