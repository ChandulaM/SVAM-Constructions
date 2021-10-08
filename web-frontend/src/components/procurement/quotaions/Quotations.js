import React from "react";
import { useState } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Quotation from "./Quotaion";

const dummyQuotations = [
  {
    id: "QT0369841",
    date: "20/09/2021",
    issued: "ABC Suppliers",
    status: "Pending",
  },
  {
    id: "QT1479841",
    date: "19/09/2021",
    issued: "CCC Suppliers",
    status: "Reviewing",
  },
  {
    id: "QT5896351",
    date: "19/09/2021",
    issued: "MNS Suppliers",
    status: "Completed",
  },
  {
    id: "QT0369635",
    date: "15/09/2021",
    issued: "MSI Suppliers",
    status: "Completed",
  },
  {
    id: "QT1488418",
    date: "14/09/2021",
    issued: "EFF Suppliers",
    status: "Pending",
  },
];

const QuotationsP = (params) => {
  const [quotations, setQutation] = useState(dummyQuotations);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {quotations.map((quotations) => (
            <Quotation quotations={quotations} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotationsP;
