import React from "react";
import { useState, useContext } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Quotation from "./Quotaion";
import { QuotationPContext } from "../../../contexts/Order-reqests/QuotationContext";

const QuotationsP = (params) => {
  const { items, setQutation } = useContext(QuotationPContext);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {items.map((quotations) => (
            <Quotation quotations={quotations} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotationsP;
