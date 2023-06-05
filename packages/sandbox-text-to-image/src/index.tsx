import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@stability/theme/lib/index.css";
import { App } from "./App";

const main = async () => {
  const root = document.getElementById("app");
  root &&
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
};

main();
