import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
const Content = lazy(() => import("./pages/Content"));
const Land = lazy(() => import("./pages/Land"));
const Login = lazy(() => import("./pages/Login"));
const Log = lazy(() => import("./pages/Log"));
const Redis = lazy(() => import("./pages/Redis"));

import Spinner from "./assets/icons/spinner.svg";

import TypeProvider from "./context/TypeProvider";
import AuthProvider from "./context/AuthProvider";

import RequireAuth from "./components/RequireAuth";

export default function App() {
  return (
    <AuthProvider>
      <TypeProvider>
        <Suspense
          fallback={
            <div className="h-dvh flex items-center justify-center">
              <div className="w-7 h-7 animate-spin">
                <img src={Spinner} width={28} height={28} />
              </div>
            </div>
          }
        >
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route element={<RequireAuth />}>
                <Route path="/redis" element={<Redis />} />
                <Route path="/logs" element={<Log />} />
                <Route path="/:type" element={<Land />} />
                <Route path="/:type/:count" element={<Content />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </TypeProvider>
    </AuthProvider>
  );
}
