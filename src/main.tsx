import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DarkModeProvider from "./contexts/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
