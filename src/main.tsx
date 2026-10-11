import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/young-serif/latin-400.css";
import "@fontsource-variable/figtree/wght.css";
import "./index.css";
import "./styles/theme.css";
import App from "./App";
import { AuthProvider } from "@/context/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
