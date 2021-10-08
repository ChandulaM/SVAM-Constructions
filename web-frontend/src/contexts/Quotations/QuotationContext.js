import React, { createContext, useState } from "react";
import { dummyQuotations } from "./misc/dummyQuotations";

export const QuotationContext = createContext();

const QuotationContextProvider = (props) => {
  const [quotations, setQuotations] = useState(dummyQuotations);

  return (
    <QuotationContext.Provider value={{ quotations, setQuotations }}>
      {props.children}
    </QuotationContext.Provider>
  );
};

export default QuotationContextProvider;
