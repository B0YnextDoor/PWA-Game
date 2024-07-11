import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./index.css";
import PWABadge from "./components/ui/pwa-badge/PWABadge.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <PWABadge />
  </React.StrictMode>
);
