import React, { useState, createContext } from "react";
import { Items } from "./misc/orderItems";

export const OrderContext = createContext();

const OrderPContextProvider = (props) => {
  const [items, setItems] = useState(Items);

  return (
    <OrderContext.Provider value={{ items, setItems }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderPContextProvider;
