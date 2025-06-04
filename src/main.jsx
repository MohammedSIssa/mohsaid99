import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MohSaid99 from "./MohSaid99";

import SmoothScrollWrapper from "./SmoothScollerWrapper";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrollWrapper>
      <MohSaid99 />
    </SmoothScrollWrapper>
    {/* <MohSaid99 /> */}
  </StrictMode>
);
