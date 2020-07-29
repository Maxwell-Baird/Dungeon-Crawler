import React from "react";
import Encounters from "./Encounters";
import "@testing-library/jest-dom/extend-expect";
import { wait } from "@testing-library/dom";
import TestWrapper from "../TestWrapper/TestWrapper";
import { getNpcs } from "../ApiCalls";
jest.mock("../ApiCalls");
//@ts-ignore
getNpcs.mockImplementation(() =>
  Promise.resolve([
    {
      id: 3,
      name: "Bear",
      attack: 8,
      defense: 5,
      health: 12,
      location: "Forest",
      description:
        "You wander through the forest until you come across a bear, sleeping near a tree. You realize it is a bear a moment too late, and it awakes at your presence. It seems tired and annoyed that you woke it up. ",
    },
  ])
);

describe("Encounters", () => {
  it("should render", async () => {
    TestWrapper(<Encounters location="forest" />);
    await wait();
  });
  it("should display npcs name", async () => {
    const { getByText } = TestWrapper(<Encounters location="forest" />);
    await wait();
    expect(getByText("Bear")).toBeInTheDocument();
  });
  it("should display npcs defense", async () => {
    const { getByText } = TestWrapper(<Encounters location="forest" />);
    await wait();
    expect(getByText("DEF: 5")).toBeInTheDocument();
  });
  it("should display npcs health", async () => {
    const { getByText } = TestWrapper(<Encounters location="forest" />);
    await wait();
    expect(getByText("12 / 12 hp")).toBeInTheDocument();
  });
  it("should display npcs attack", async () => {
    const { getByText } = TestWrapper(<Encounters location="forest" />);
    await wait();
    expect(getByText("ATK: 8")).toBeInTheDocument();
  });
});
