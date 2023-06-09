import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/style/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode className="root">
    <App />
  </React.StrictMode>
);