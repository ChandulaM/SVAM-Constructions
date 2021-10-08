import React, { useState, createContext } from "react";
import { Items } from "./misc/orderRequestItems";

export const OrderRequestContext = createContext();

const OrderRequestContextProvider = (props) => {
  const [items, setItems] = useState(Items);

  return (
    <OrderRequestContext.Provider value={{ items, setItems }}>
      {props.children}
    </OrderRequestContext.Provider>
  );
};

export default OrderRequestContextProvider;
