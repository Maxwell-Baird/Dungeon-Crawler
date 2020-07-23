import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { PlayerContextProvider } from "./playerState";
import { EncounterContextProvider } from "./encounterState";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <PlayerContextProvider>
      <EncounterContextProvider>
        <App />
      </EncounterContextProvider>
    </PlayerContextProvider>
  </Router>,
  document.getElementById("root")
);
