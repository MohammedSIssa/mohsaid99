import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { saveUser } from "../scripts/localStorage";

import { API } from "../scripts/globals";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logginIn, setLogginIn] = useState(false);

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [message, setMessage] = useState("");

  const { setUser } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      try {
        setLogginIn(true);
        setMessage("");
        const response = await fetch(`${API}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          saveUser(data);
          setSuccess(true);
          setFailure(false);
          setMessage("تم تسجيل الدخول بنجاح");
        }

        if (!response.ok) {
          setUser({});
          setLogginIn(false);
          setPassword("");
          setSuccess(false);
          setFailure(true);
          setMessage("خطأ في البيانات");
          setUsername("");
        }
      } catch {
        throw new Error("Failed to login!");
      }
    } else {
      setMessage("اكتب اسمك وكلمة السر");
      setFailure(true);
      setSuccess(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <form
        className="login-form flex flex-col gap-5 max-w-[300px] p-10 border rounded-lg"
        onSubmit={login}
        style={
          success
            ? {
                borderColor: "lime",
              }
            : failure
            ? {
                borderColor: "red",
              }
            : {}
        }
      >
        <label htmlFor="username" className="font-bold">
          اسم المستخدم:
        </label>
        <input
          type="text"
          dir="ltr"
          name="username"
          id="username"
          className="text-zinc-50 p-2 px-5 rounded-lg disabled:opacity-30 focus:border focus:outline-0"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          required
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          disabled={logginIn}
        />

        <label htmlFor="password" className="font-bold">
          كلمة السر:
        </label>
        <input
          type="password"
          dir="ltr"
          name="password"
          autoComplete="off"
          id="password"
          className="text-zinc-50 p-2 px-5 rounded-lg disabled:opacity-30 focus:border focus:outline-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          disabled={logginIn}
        />

        <button
          onClick={login}
          disabled={logginIn}
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--story-border-color)",
          }}
          className="p-2 px-5 rounded-lg border hover:brightness-125 hover:cursor-pointer transition-all duration-100 disabled:opacity-25 disabled:cursor-not-allowed"
        >
          سجل الدخول
        </button>
        {logginIn && <p>جار تسجيل الدخول..</p>}
        <p>{message}</p>
      </form>
    </div>
  );
}
