import React from "react";
import TestWrapper from "../TestWrapper";
import { render, waitForElement } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { PlayerContextProvider } from "../playerState";
import { EncounterContextProvider } from "../encounterState";
import { BrowserRouter as Router } from "react-router-dom";
import { getNpcs } from '../ApiCalls';
jest.mock("../ApiCalls", () => ({
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
import App from "./App";


describe("App", () => {
  it("should render the app", () => {
    <PlayerContextProvider>
      <EncounterContextProvider>
        <App/>
      </EncounterContextProvider>
    </PlayerContextProvider>
  });
  it("Should be able to create character", () => {
    const { getByText, getByPlaceHolderText } = render(
      <Router>
        <PlayerContextProvider>
          <EncounterContextProvider>
            <App/>
          </EncounterContextProvider>
        </PlayerContextProvider>
      </Router>
    )

    const titleEl = getByText('Untitled Dungeon Crawler')
    expect(titleEl).toBeInTheDocument();

    const submitButton = getByText('Start Adventure')
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(getByText('Start Adventure'), {
      target: { value: "sbeven" }
    });
    fireEvent.click(getByText('Start Adventure'));

  })

  it('The player should see a map with some location text, name and health bar', () => {
      const { getByText, getByPlaceHolderText } = render(
        <Router>
          <PlayerContextProvider>
            <EncounterContextProvider>
              <App/>
            </EncounterContextProvider>
          </PlayerContextProvider>
        </Router>
      )

      const playerHealth = getByText('HP: 0 / 0')
      expect(playerHealth).toBeInTheDocument();

      const playerName = getByText('Name:')
      expect(playerName).toBeInTheDocument();

      const locationEL = getByText('Go to the forest')
      expect(locationEL).toBeInTheDocument();

      const descriptionEl = getByText('You are in a grassy field. You feel weak. You feel defenseless. You feel a loss of identity.')
      expect(descriptionEl).toBeInTheDocument();
  })

  it('Should be able to run into an encounter', async () => {
    const { getByText, getByPlaceHolderText } = render(
      <Router>
        <PlayerContextProvider>
          <EncounterContextProvider>
            <App/>
          </EncounterContextProvider>
        </PlayerContextProvider>
      </Router>
    )

    const playerHealth = getByText('HP: 0 / 0')
    expect(playerHealth).toBeInTheDocument();

    const playerName = getByText('Name:')
    expect(playerName).toBeInTheDocument();

    const locationEL = getByText('Go to the forest')
    expect(locationEL).toBeInTheDocument();

    fireEvent.click(getByText('Go to the forest'));

    const encounterName = await waitForElement( () => getByText('Goblin')) 
    expect(encounterName).toBeInTheDocument();

    const encounterATK = await waitForElement( () => getByText('5 / 5 hp')) 
    expect(encounterATK).toBeInTheDocument();

    const encounterDEF = await waitForElement( () => getByText('ATK: 3')) 
    expect(encounterDEF).toBeInTheDocument();

    const encounterHP = await waitForElement( () => getByText('DEF: 2')) 
    expect(encounterHP).toBeInTheDocument();

    const fightButton = await waitForElement( () => getByText('Fight')) 
    expect(fightButton).toBeInTheDocument();

    const talkButton = await waitForElement( () => getByText('Talk')) 
    expect(encounterHP).toBeInTheDocument();

    const runButton = await waitForElement( () => getByText('Run Away')) 
    expect(runButton).toBeInTheDocument();
})
it('Should be able to attack the encounter', async () => {
  const { getByText, getByPlaceHolderText } = render(
    <Router>
      <PlayerContextProvider>
        <EncounterContextProvider>
          <App/>
        </EncounterContextProvider>
      </PlayerContextProvider>
    </Router>
  )

  const encounterName = await waitForElement( () => getByText('Goblin')) 
  expect(encounterName).toBeInTheDocument();

  const encounterDEF = await waitForElement( () => getByText('ATK: 3')) 
  expect(encounterDEF).toBeInTheDocument();

  const encounterHP = await waitForElement( () => getByText('DEF: 2')) 
  expect(encounterHP).toBeInTheDocument();

  const fightButton = await waitForElement( () => getByText('Fight')) 
  expect(fightButton).toBeInTheDocument();

  const talkButton = await waitForElement( () => getByText('Talk')) 
  expect(encounterHP).toBeInTheDocument();

  const runButton = await waitForElement( () => getByText('Run Away')) 
  expect(runButton).toBeInTheDocument();

  fireEvent.click(getByText('Fight'));

  const encounterATK = await waitForElement( () => getByText('5 / 5 hp')) 
  expect(encounterATK).toBeInTheDocument();

})

it.skip('Should be able to Talk to the encounter', async () => {
  const { getByText, getByPlaceHolderText } = render(
    <Router>
      <PlayerContextProvider>
        <EncounterContextProvider>
          <App/>
        </EncounterContextProvider>
      </PlayerContextProvider>
    </Router>
  )

  const encounterName = await waitForElement( () => getByText('Goblin')) 
  expect(encounterName).toBeInTheDocument();

  const encounterDEF = await waitForElement( () => getByText('ATK: 3')) 
  expect(encounterDEF).toBeInTheDocument();

  const encounterHP = await waitForElement( () => getByText('DEF: 2')) 
  expect(encounterHP).toBeInTheDocument();

  const fightButton = await waitForElement( () => getByText('Fight')) 
  expect(fightButton).toBeInTheDocument();

  const talkButton = await waitForElement( () => getByText('Talk')) 
  expect(encounterHP).toBeInTheDocument();

  const runButton = await waitForElement( () => getByText('Run Away')) 
  expect(runButton).toBeInTheDocument();

  fireEvent.click(getByText('Talk'));

  const encounterATK = await waitForElement( () => getByText('5 / 5 hp')) 
  expect(encounterATK).toBeInTheDocument();
  
  it.skip('Should be able to run away from the encounter', async () => {
    const { getByText, getByPlaceHolderText } = render(
      <Router>
        <PlayerContextProvider>
          <EncounterContextProvider>
            <App/>
          </EncounterContextProvider>
        </PlayerContextProvider>
      </Router>
    )
  
    const encounterName = await waitForElement( () => getByText('Goblin')) 
    expect(encounterName).toBeInTheDocument();
  
    const encounterDEF = await waitForElement( () => getByText('ATK: 3')) 
    expect(encounterDEF).toBeInTheDocument();
  
    const encounterHP = await waitForElement( () => getByText('DEF: 2')) 
    expect(encounterHP).toBeInTheDocument();
  
    const fightButton = await waitForElement( () => getByText('Fight')) 
    expect(fightButton).toBeInTheDocument();
  
    const talkButton = await waitForElement( () => getByText('Talk')) 
    expect(encounterHP).toBeInTheDocument();
  
    const runButton = await waitForElement( () => getByText('Run Away')) 
    expect(runButton).toBeInTheDocument();
  
    fireEvent.click(getByText('Run Away'));
  
    const encounterATK = await waitForElement( () => getByText('5 / 5 hp')) 
    expect(encounterATK).toBeInTheDocument();

})
})
});
