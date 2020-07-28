import React from "react";
import { render } from "@testing-library/react";
import Encounters from "./Encounters";
import "@testing-library/jest-dom/extend-expect";
import { PlayerContextProvider } from "../playerState";
import { EncounterContextProvider } from "../encounterState";
import { getNpcs } from "../ApiCalls";
jest.mock("../ApiCalls");
getNpcs.mockImplementation(() =>
  Promise.resolve([
    {
      location: "Forest",
      name: "Goblin",
      health: 5,
      attack: 3,
      defense: 2,
    },
  ])
);

describe("Encounters", () => {
  it("should render", () => {
    render(
      <PlayerContextProvider>
        <EncounterContextProvider>
          <Encounters location="forest" />
        </EncounterContextProvider>
      </PlayerContextProvider>
    );
  });
  it("should display npcs name", () => {
    const { getByText } = render(
      <PlayerContextProvider>
        <EncounterContextProvider>
          <Encounters location={"forest"} />
        </EncounterContextProvider>
      </PlayerContextProvider>
    );
    expect(getByText("Goblin")).toBeInTheDocument();
  });
  it("should display npcs defense", () => {
    const { getByText } = render(
      <PlayerContextProvider>
        <EncounterContextProvider>
          <Encounters location={"forest"} />
        </EncounterContextProvider>
      </PlayerContextProvider>
    );
    expect(getByText("DEF: 2")).toBeInTheDocument();
  });
  it("should display npcs health", () => {
    const { getByText } = render(
      <PlayerContextProvider>
        <EncounterContextProvider>
          <Encounters location={"forest"} />
        </EncounterContextProvider>
      </PlayerContextProvider>
    );
    expect(getByText("5 / 5 hp")).toBeInTheDocument();
  });
  it("should display npcs attack", () => {
    const { getByText } = render(
      <PlayerContextProvider>
        <EncounterContextProvider>
          <Encounters location={"forest"} />
        </EncounterContextProvider>
      </PlayerContextProvider>
    );
    expect(getByText("ATK: 3")).toBeInTheDocument();
  });
});
