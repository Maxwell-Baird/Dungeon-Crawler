import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Actions from "./Actions";
import { MemoryRouter } from "react-router-dom";

describe("Map", () => {
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <Actions />
      </MemoryRouter>
    );
  });

  it("should show the user some possible actions`", () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <Actions />
      </MemoryRouter>
    );
    expect(getAllByText("Go to", { exact: false }).length).toBeGreaterThan(0);
  });
});
