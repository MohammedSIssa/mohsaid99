import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./layouts/homepage";
import Welcome from "./components/Welcome";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./custom.css";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.redirect;
    if (redirectPath) {
      sessionStorage.removeItem("redirect");
      navigate(redirectPath, {replace: true});
    }
  }, [navigate]);

  return null;
}

export default function MohSaid99() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route index element={<Welcome />}></Route>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
