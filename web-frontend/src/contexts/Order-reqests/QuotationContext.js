import React, { useState, createContext } from "react";
import { Items } from "./misc/quotationItems";

export const QuotationPContext = createContext();

const QuotationPContextProvider = (props) => {
  const [items, setItems] = useState(Items);

  return (
    <QuotationPContext.Provider value={{ items, setItems }}>
      {props.children}
    </QuotationPContext.Provider>
  );
};

export default QuotationPContextProvider;
