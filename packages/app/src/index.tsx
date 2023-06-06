import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "~/App";
import "~/GlobalVariables";

import "./index.css";

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
