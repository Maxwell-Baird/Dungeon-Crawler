import React from "react";
import { Router } from "react-router-dom";
import {
  PlayerContextProvider,
  usePlayerState,
  usePlayerDispatch,
} from "../playerState/index";
import {
  EncounterContextProvider,
  useEncounterState,
  useEncounterDispatch,
} from "../encounterState/index";
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
  let element = (
    <Router history={history}>
      <PlayerContextProvider>
        <EncounterContextProvider>
          <TestComponent component={component} />
        </EncounterContextProvider>
      </PlayerContextProvider>
    </Router>
  );
  return {
    ...render(element),
    playerState,
    playerDispatch,
    encounterState,
    encounterDispatch,
    history,
    element,
  };
};

export default TestWrapper;
