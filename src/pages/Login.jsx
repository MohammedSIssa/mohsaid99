import { useState, useEffect } from "react";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { useNavigate } from "react-router-dom";
import { saveUser } from "../scripts/localStorage";

import { API } from "../scripts/globals";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [logginIn, setLogginIn] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  });

  async function login(e) {
    e.preventDefault();
    try {
      setLogginIn(true);
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        saveUser(data);
        navigate("/");
      }

      if (!response.ok) {
        alert("User not found.");
        setUser("");
        setPassword("");
      }
    } catch {
      throw new Error("Failed to login!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <form
        className="login-form flex flex-col gap-5 max-w-[300px] bg-zinc-900 p-10 border border-zinc-600 rounded-lg"
        onSubmit={login}
        style={{
          backgroundColor: "var(--story-bg-color)",
          borderColor: "var(--story-border-color)",
        }}
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
      </form>
    </div>
  );
}
