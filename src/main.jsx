import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TapeProvider } from "./store/TapeContext.jsx";
import { BrowserRouter as Browser } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Browser>
    <React.StrictMode>
      <TapeProvider>
        <App />
      </TapeProvider>
    </React.StrictMode>
  </Browser>
);
