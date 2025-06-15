import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import ErrorPage from "../components/ErrorPage";
import ScrollToTopButton from "../components/ScrollToTopButton";

import { Routes, Route } from "react-router-dom";
import { SpecialContext } from "../components/SpecialContext";

import { useState } from "react";

export default function HomePage() {
  const [showSpecial, setShowSpecial] = useState(false);
  return (
    <SpecialContext.Provider value={{ showSpecial, setShowSpecial }}>
      <div
        className="flex flex-col min-h-dvh"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--font-color)",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/:type/:id" element={<MainContent />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <ScrollToTopButton />
      </div>
    </SpecialContext.Provider>
  );
}
