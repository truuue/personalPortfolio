import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DisableRightClick from "./components/disableRightClick/disableRightClick";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DisableRightClick>
      <App />
    </DisableRightClick>
  </React.StrictMode>
);

// If you want to start measuring performance in your app use this
reportWebVitals(console.log);
