import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./responsive-fixes.css";
import "./typography-fixes.css";
import "./mobile-hero.css";
import "./approved-design.css";
import "./approved-polish.css";
import "./mobile-final-overrides.css";
import "./approved-scale.css";
import "./final-overrides.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
