import React from "react";
import TestWrapper from "../TestWrapper";
import Login from "./Login";
import "@testing-library/jest-dom/extend-expect";

describe("Login", () => {
  it("should render", () => {
    TestWrapper(<Login />);
  });
  it("should have title, and input field for name", () => {
    const { getByText, getByPlaceholderText } = TestWrapper(<Login />);
    expect(getByText("Untitled Dungeon Crawler")).toBeInTheDocument();
    expect(getByPlaceholderText(/name/gi)).toBeInTheDocument();
  });
});
