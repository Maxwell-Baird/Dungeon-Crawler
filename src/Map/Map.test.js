import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Map from "./Map";

describe("Map", () => {
  it("should render without crashing", () => {
    render(<Map />);
  });

  it("should show an image of a map", () => {
    const { getAllByText } = render(<Map />);
    expect(getAllByText(/~+/g).length).toBeGreaterThan(0); // oceans
    expect(getAllByText(/\.+/g).length).toBeGreaterThan(0); // sand
    expect(getAllByText(/[/|\\]+/g).length).toBeGreaterThan(0); // mountains
    expect(getAllByText(/x+/g).length).toBeGreaterThan(0); // plains
    expect(getAllByText(/\^+/g).length).toBeGreaterThan(0); // forest
  });
});
