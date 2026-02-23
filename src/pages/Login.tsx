import { useState } from "react";
import { API } from "../variables/api";
import useAuth from "../hooks/useAuth";
import { setTokenLocal } from "../variables/authStorage";
import Spinner from "../assets/icons/spinner.svg";
import { useEffect } from "react";

import Success from "../assets/icons/success.svg";

import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const {
    setUser,
    loading,
    isAuthenticated,
    setToken,
  } = useAuth();
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isAuthenticated, navigate]);

  if (showSuccess) {
    return (
      <div className="flex h-dvh items-center flex-col gap-5 justify-center">
        <h1 className="text-2xl text-green-400 font-bold">
          تم تسجيل الدخول بنجاح
        </h1>
        <img src={Success} width={120} height={120} />
        <h1 className="font-bold text-lg capitalize text-violet-300">
          {username}
        </h1>
        <p>جاري إعادة التوجيه إلى الصفحة الرئيسية...</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-dvh flex flex-col items-center gap-5 justify-center">
        <h1>جار توثيق المستخدم..</h1>
        <div className="h-7 w-7 animate-spin">
          <img src={Spinner} width={28} height={28} />
        </div>
      </div>
    );
  }

  if (submitting) {
    return (
      <div className="h-dvh flex flex-col items-center gap-5 justify-center">
        <h1>جار تسجيل الدخول للمستخدم..</h1>
        <div className="h-7 w-7 animate-spin">
          <img src={Spinner} width={28} height={28} />
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setSubmitting(true);
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        setSubmitting(false);
        const data = await res.json();

        console.log(data);

        setTokenLocal(data.token);
        if (setToken) {
          setToken(data.token);
        }
        setUser(data.user);
      } else {
        alert("Login failed");
        setSubmitting(false);
      }
    } catch (error) {
      alert("Network error");
      setSubmitting(false);
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <form
          dir="ltr"
          className="bg-(--darker-bg-color) py-16 max-w-full rounded-lg border-2 border-(--border-color) flex flex-col gap-4 px-7"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-center mb-4">تسجيل الدخول</h1>

          <input
            className="bg-(--bg-color) year border border-(--border-color) p-2 px-3 rounded focus:outline-0"
            dir="ltr"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="bg-(--bg-color) year border border-(--border-color) p-2 px-3 rounded focus:outline-0"
            dir="ltr"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-(--accent-color) p-2 px-3 rounded text-(--bg-color) year font-bold hover:brightness-110 transition-all duration-200 cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
