import React from "react";
import { useState } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Invoice from "./Invoice";
import Button from "@mui/material/Button";

const dummyInvoices = [
  {
    id: "INV0369841",
    date: "20/09/2021",
    issued: "ABC Suppliers",
    status: "Pending",
  },
  {
    id: "INV1479841",
    date: "19/09/2021",
    issued: "CCC Suppliers",
    status: "Reviewing",
  },
  {
    id: "INV5896351",
    date: "19/09/2021",
    issued: "MNS Suppliers",
    status: "Completed",
  },
  {
    id: "INV0369635",
    date: "15/09/2021",
    issued: "MSI Suppliers",
    status: "Completed",
  },
  {
    id: "INV1488418",
    date: "14/09/2021",
    issued: "EFF Suppliers",
    status: "Pending",
  },
];

const Invoices = (params) => {
  const [invoices, setQutation] = useState(dummyInvoices);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {invoices.map((invoices) => (
            <Invoice invoices={invoices} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoices;
