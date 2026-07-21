import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/base.css";
import "./styles/sections.css";
import "./styles/visuals.css";
import "./styles/responsive.css";
import "./styles/final-fixes.css";
import "./styles/experience-timeline.css";
import "./styles/mobile-hero-face-clear.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
