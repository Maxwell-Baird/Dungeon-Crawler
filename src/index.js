import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { PlayerContextProvider } from "./playerState";

ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
