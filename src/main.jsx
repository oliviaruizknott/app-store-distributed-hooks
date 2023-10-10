import React from "react";
import ReactDOM from "react-dom/client";
import AppStoreDistributed from "./haxademic/app-store-distributed";
import AppStoreDebug from "./haxademic/app-store-debug";
import App from "./App";
import "./index.css";

new AppStoreDistributed("ws://10.0.0.71:8082");
new AppStoreDebug();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
