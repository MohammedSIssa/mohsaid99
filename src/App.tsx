import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

import AuthProvider from "./context/AuthProvider";

// Static imports
import AppLayout from "./layouts/AppLayout";
import RequireAuth from "./components/RequireAuth";
import RequireUnAuth from "./components/RequireUnAuth";
import SiteSkeleton from "./components/Loaders/SiteSkeleton";
import { ADMIN_ROLE, MONMON_ROLE } from "./variables/globals";

// Dynamic imports
const Login = lazy(() => import("./pages/Login"));
const Content = lazy(() => import("./pages/Content"));
const Logs = lazy(() => import("./pages/Admin/Logs"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Stats = lazy(() => import("./pages/Stats"));

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<SiteSkeleton />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="" element={<Homepage />} />
            <Route element={<RequireUnAuth />}>
              <Route path="login" element={<Login />} />
            </Route>

            {/* Admin routes */}
            <Route element={<RequireAuth role={ADMIN_ROLE} />}>
              <Route path="logs" element={<Logs />} />
            </Route>

            <Route path="stats" element={<Stats />} />
            <Route path="stats/:statid" element={<Stats />} />

            {/* Public Routes */}
            <Route path=":type" element={<Content />} />
            <Route path=":type/:storyid" element={<Content />} />

            {/* Secret Routes */}
            <Route element={<RequireAuth role={MONMON_ROLE} />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
