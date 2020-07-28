import React from "react";
import TestWrapper from "../TestWrapper/TestWrapper";
import UserStats from "./UserStats";
import "@testing-library/jest-dom/extend-expect";

describe("UserStats", () => {
  it("should render", () => {
    TestWrapper(<UserStats />);
  });
  it("should have name, HP, Atk, and Def by default", () => {
    const { getByText } = TestWrapper(<UserStats />);
    expect(getByText("Name:")).toBeInTheDocument();
    expect(getByText("HP: 0 / 0")).toBeInTheDocument();
    expect(getByText("Atk: 0")).toBeInTheDocument();
    expect(getByText("Def: 0")).toBeInTheDocument();
  });
});
