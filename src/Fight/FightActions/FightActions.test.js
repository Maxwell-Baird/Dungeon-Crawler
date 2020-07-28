import React from "react";
import TestWrapper from "../../TestWrapper";
import { render, waitForElement } from "@testing-library/react";
import FightActions from "./FightActions";
import "@testing-library/jest-dom/extend-expect";
import { PlayerContextProvider } from "../../playerState";
import { EncounterContextProvider } from "../../encounterState";
import { BrowserRouter as Router } from "react-router-dom";
import { getNpcs } from '../../ApiCalls';

jest.mock("../../ApiCalls", () => ({
  getNpcs: () => ([{
  location: 'Forest',
  name: 'Goblin',
  health: 5,
  attack: 3,
  defense: 2,
  options: [{
    name: "Fight",
    type: "aggressive"
  },
  {
    name: "Talk",
    type: "passive"
  }
  ],
  }])
  }))

describe("FightActions", () => {
  it("should render", () => {
    <Router>
      <PlayerContextProvider>
        <EncounterContextProvider>
          <FightActions/>
        </EncounterContextProvider>
      </PlayerContextProvider>
    </Router>
  });

  it("name this test", async () => {
    
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <PlayerContextProvider>
          <EncounterContextProvider>
            <FightActions/>
          </EncounterContextProvider>
        </PlayerContextProvider>
      </Router>)
    const awaitedText = await waitForElement(() => getByText("Attack"))
    expect(awaitedText).toBeInTheDocument();
  });

});
