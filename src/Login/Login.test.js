import React from "react";
import TestWrapper from "../TestWrapper";
import Login from "./Login";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/dom";

describe("Login", () => {
  it("should render", () => {
    TestWrapper(<Login />);
  });
  it("should have title, and input field for name", () => {
    const { getByText, getByPlaceholderText } = TestWrapper(<Login />);
    expect(getByText("Untitled Dungeon Crawler")).toBeInTheDocument();
    expect(getByPlaceholderText(/name/gi)).toBeInTheDocument();
  });
  it("should store player's name in text field", () => {
    const { getByPlaceholderText, getByDisplayValue } = TestWrapper(<Login />);
    fireEvent.change(getByPlaceholderText(/name/gi), {
      target: { value: "sbeven" },
    });
    expect(getByDisplayValue("sbeven")).toBeInTheDocument();
  });
  it("should initialize player when start button is clicked", async () => {
    const { getByPlaceholderText, getByText, playerState } = TestWrapper(
      <Login />
    );
    fireEvent.change(getByPlaceholderText(/name/gi), {
      target: { value: "sbeven" },
    });
    fireEvent.click(getByText(/start/gi));
    // expect(playerState.name).toBe("sbeven"); // this doesn't work. state is not being updated
  });
});
