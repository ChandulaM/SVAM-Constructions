import React, { useContext } from "react";
import { QuotationContext } from "../../contexts/Quotations/QuotationContext";
import Header from "../common/Header";
import SideNav from "../common/SideNav";
import Quotation from "./Quotation";

const Quotations = () => {
  const { quotations, setQuotations } = useContext(QuotationContext);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNav />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {quotations.map((quotation) => (
            <Quotation quotation={quotation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotations;
