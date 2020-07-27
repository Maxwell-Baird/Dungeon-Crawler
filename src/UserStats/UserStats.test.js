import React from "react";
import TestWrapper from "../TestWrapper";
import UserStats from "./UserStats";
import "@testing-library/jest-dom/extend-expect";

describe("UserStats", () => {
  it("should render", () => {
    TestWrapper(<UserStats />);
  });
  it("should have name, HP, Atk, and Def by default", () => {
    const { getByText, getByPlaceholderText } = TestWrapper(<UserStats />);
    expect(getByText("Name:")).toBeInTheDocument();
    expect(getByText("HP: 0 / 0")).toBeInTheDocument();
    expect(getByText("Atk: 0")).toBeInTheDocument();
    expect(getByText("Deff:")).toBeInTheDocument();
    expect(getByPlaceholderText("Name:")).toBeInTheDocument();
    expect(getByPlaceholderText("HP:")).toBeInTheDocument();
    expect(getByPlaceholderText("Atk:")).toBeInTheDocument();
    expect(getByPlaceholderText("Def:")).toBeInTheDocument();
  });
});
