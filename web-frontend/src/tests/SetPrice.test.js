import { render, fireEvent } from "@testing-library/react";
import Header from "../components/common/Header";
import SideNavP from "../components/common/SideNavP";
import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import SetPrice from "../components/procurement/set-price/SetPrice";

it("renders header in component", () => {
  const { queryByTitle } = render(<Header />);
  const header = queryByTitle("header");

  expect(header).toBeTruthy();
});

it("renders sidenav in component", () => {
  const { queryByTitle } = render(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <SideNavP />
    </MemoryRouter>
  );
  const sidenav = queryByTitle("sidenav-p");

  expect(sidenav).toBeTruthy();
});

// describe("when entering values", () => {
//   const { queryByTitle } = render(<SetPrice />);

//   const selectedUnit = queryByTitle("unit");
//   const enteredPrice = queryByTitle("price");
// });
