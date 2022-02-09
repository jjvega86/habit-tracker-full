import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HabitProvider } from "./context/HabitContext";

ReactDOM.render(
  <React.StrictMode>
    <HabitProvider>
      <App />
    </HabitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
