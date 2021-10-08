import React, { createContext, useState } from "react";
import { dummyOrders } from "./misc/orders";

export const OrderContext = createContext();

export const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState(dummyOrders);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};
