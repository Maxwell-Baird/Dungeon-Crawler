import React from "react";
import TestWrapper from "../TestWrapper";
import Encounters from "./Encounters";
import "@testing-library/jest-dom/extend-expect";

describe("Encounters", () => {
  it("should render", () => {
    TestWrapper(<Encounters />);
  });
//   it("should have title, and input field for name", () => {
//     const { getByText, getByPlaceholderText } = TestWrapper(<Login />);
//     expect(getByText("Untitled Dungeon Crawler")).toBeInTheDocument();
//   });
});
