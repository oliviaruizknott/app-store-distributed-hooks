import React from "react";
import ReactDOM from "react-dom/client";
import AppStoreDistributed from "./haxademic/app-store-distributed";
import App from "./App";
import "./index.css";

const appStoreDistributed = new AppStoreDistributed("ws://10.0.0.71:8082");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
