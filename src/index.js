import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetsProvider } from "./contexts/BudgetsContext";
import "./index.css";

ReactDOM.render(
  <BudgetsProvider>
    <App />
  </BudgetsProvider>,
  document.getElementById("root")
);
