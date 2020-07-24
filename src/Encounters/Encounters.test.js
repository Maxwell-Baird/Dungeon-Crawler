import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Encounters from "./Encounters";
import { MemoryRouter } from "react-router-dom";

describe("Encounters", () => {
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <Encounters />
      </MemoryRouter>
    );
  });

//   it("should show the user some possible actions`", () => {
//     const { getAllByText } = render(
//       <MemoryRouter>
//         <Encounters />
//       </MemoryRouter>
//     );
//     expect(getAllByText("Go to", { exact: false }).length).toBeGreaterThan(0);
//   });
});