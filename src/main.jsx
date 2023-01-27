import React from "react";
import ReactDOM from "react-dom/client";
import AppStoreDistributed from "./haxademic/app-store-distributed";
import App from "./App";
import "./index.css";

const appStoreDistributed = new AppStoreDistributed("ws://localhost:3001/ws");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
