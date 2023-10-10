import React from "react";
import ReactDOM from "react-dom/client";
import AppStoreDistributed from "./haxademic/app-store-distributed";
import App from "./App";
import "./index.css";

new AppStoreDistributed(`ws://${import.meta.env.VITE_IP_ADDRESS || 'localhost'}:${import.meta.env.VITE_WS_PORT || 8082}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
