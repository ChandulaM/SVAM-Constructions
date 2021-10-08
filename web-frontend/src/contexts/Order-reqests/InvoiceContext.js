import React, { useState, createContext } from "react";
import { Items } from "./misc/invoiceItems";

export const InvoiceContext = createContext();

const InvoicePContextProvider = (props) => {
  const [items, setItems] = useState(Items);

  return (
    <InvoiceContext.Provider value={{ items, setItems }}>
      {props.children}
    </InvoiceContext.Provider>
  );
};

export default InvoicePContextProvider;
