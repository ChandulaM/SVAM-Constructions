import { render, fireEvent } from "@testing-library/react";
import Header from "../components/common/Header";
import SideNavP from "../components/common/SideNavP";
import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import SetPrice from "../components/procurement/set-price/SetPrice";

it("renders header in component", () => {
  const { queryAllByTitle } = render(<Header />);
  const header = queryAllByTitle("header");

  expect(header).toBeTruthy();
});

it("renders sidenav in component", () => {
  const { queryAllByTitle } = render(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <SideNavP />
    </MemoryRouter>
  );
  const sidenav = queryAllByTitle("sidenav-p");

  expect(sidenav).toBeTruthy();
});

// describe("when entering values", () => {
//   const { queryByTitle } = render(
//     <MemoryRouter initialEntries={[{ pathname: "/" }]}>
//       <SetPrice />
//     </MemoryRouter>
//   );

//   const enteredPrice = queryByTitle("price").querySelector("input");

//   fireEvent.input(enteredPrice, { target: { value: 123 } });

//   expect(enteredPrice.value).toBe("123");
// });
