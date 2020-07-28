import React from "react";
import { Router } from "react-router-dom";
import {
  PlayerContextProvider,
  usePlayerState,
  usePlayerDispatch,
} from "./playerState/index";
import {
  EncounterContextProvider,
  useEncounterState,
  useEncounterDispatch,
} from "./EncounterState/index";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

let playerState;
let playerDispatch;
let encounterState;
let encounterDispatch;

const TestComponent = ({ component }) => {
  playerState = usePlayerState();
  playerDispatch = usePlayerDispatch();
  encounterState = useEncounterState();
  encounterDispatch = useEncounterDispatch();
  return <>{component}</>;
};

const TestWrapper = (component) => {
  let history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <PlayerContextProvider>
          <EncounterContextProvider>
            <TestComponent component={component} />
          </EncounterContextProvider>
        </PlayerContextProvider>
      </Router>
    ),
    playerState,
    playerDispatch,
    encounterState,
    encounterDispatch,
    history,
  };
};

export default TestWrapper;
