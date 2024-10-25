import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DisableMouseInteractions from "./components/disableMouseInteractions/disableMouseInteractions";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DisableMouseInteractions>
      <App />
    </DisableMouseInteractions>
  </React.StrictMode>
);

// If you want to start measuring performance in your app use this
reportWebVitals();
