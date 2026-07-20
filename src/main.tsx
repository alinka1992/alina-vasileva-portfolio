import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./final-site.css";
import "./final-polish.css";
import "./funnel-final.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
