import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Description from "./Description";
import { usePlayerDispatch } from "../playerState";

describe("Description", () => {
  it("should render", () => {
    render(<Description />);
  });

  it("should load a basic description", () => {
    const { getByText } = render(<Description />);
    expect(
      getByText("You are in a grassy field.", { exact: false })
    ).toBeInTheDocument();
  });
});
