import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./layouts/homepage";
import Welcome from "./components/Landing-page/Welcome";

import "./custom.css";

export default function MohSaid99() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route index element={<Welcome />}></Route>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}
