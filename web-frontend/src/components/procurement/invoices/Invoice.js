import React from "react";
import "../../../index.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Invoice = ({ invoices }) => {
  return (
    <div className="order-card">
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Invoice No.</p>
        <p className="font-normal text-xl text-gray-600">{invoices.id}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Date</p>
        <p className="font-normal text-xl text-gray-600">{invoices.date}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Issued By</p>
        <p className="font-normal text-xl text-gray-600">{invoices.issued}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between items-center my-2">
        <Link to="/procurement/view-invoice">
          <Button
            fullWidth
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#fdd835",
              borderRadius: 25,
            }}
          >
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Invoice;
