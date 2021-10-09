import { render, fireEvent } from "@testing-library/react";
import Header from "../components/common/Header";
import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import { OrderContextProvider } from "../contexts/Orders/OrderContext";
import { ItemContextProvider } from "../contexts/Items/ItemContext";
import Orders from "../components/orders/Orders";
import Order from "../components/orders/Order";
import OrderDetailModal from "../components/orders/OrderDetailModal";

it("renders the header", () => {
  const { queryAllByTitle } = render(<Header />);
  const header = queryAllByTitle("header");

  expect(header).toBeTruthy();
});

it("renders the order card", () => {
  const { queryAllByTitle } = render(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <OrderContextProvider>
        <Orders />
      </OrderContextProvider>
    </MemoryRouter>
  );

  const orderCard = queryAllByTitle("order-card");
  expect(orderCard).toBeTruthy();
});

describe("when View button clicked in Order card", () => {
  const order = {
    id: "OD1233455",
    curDate: "20/09/2021",
    dueDate: "30/09/2021",
    total: "",
    items: [
      { name: "Cement", quantity: "5", unit: "kg", price: "" },
      { name: "Mortar", quantity: "15", unit: "g", price: "" },
      { name: "Sand", quantity: "1", unit: "t", price: "" },
      { name: "Gravel", quantity: "50", unit: "kg", price: "" },
    ],
  };

  it("renders the OrderDetailModal", () => {
    const { queryByTitle } = render(
      <ItemContextProvider>
        <Order order={order} />
      </ItemContextProvider>
    );
    const viewBtn = queryByTitle("orderViewBtn");

    fireEvent.click(viewBtn);

    const modal = queryByTitle("orderDetailModal");
    expect(modal).toBeTruthy();
  });
});
