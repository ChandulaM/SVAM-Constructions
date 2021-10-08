import React, { useState, createContext } from "react";
import { dummyItems } from "./misc/dummyItems";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, setItems] = useState(dummyItems);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
