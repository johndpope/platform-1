import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const main = async () => {
  const root = document.getElementById("app");
  root &&
    ReactDOM.createRoot(root).render(
      <React.StrictMode>Hello, World!</React.StrictMode>
    );
};

main();
