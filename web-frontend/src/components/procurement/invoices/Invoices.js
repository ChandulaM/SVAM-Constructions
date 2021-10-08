import React from "react";
import { useState, useContext } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Invoice from "./Invoice";
import Button from "@mui/material/Button";
import { InvoiceContext } from "../../../contexts/Order-reqests/InvoiceContext";

const Invoices = (params) => {
  const { items, setItems } = useContext(InvoiceContext);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {items.map((invoices) => (
            <Invoice invoices={invoices} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoices;
