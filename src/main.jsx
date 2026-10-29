import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { SmoothScroll } from "./components/common/SmoothScroll.jsx";
import App from "./App.jsx";
import "lenis/dist/lenis.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </HelmetProvider>
  </React.StrictMode>,
);
