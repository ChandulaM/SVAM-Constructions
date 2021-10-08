import React from "react";
import "../../../index.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Quotation = ({ quotations }) => {
  return (
    <div className="order-card">
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Quotation No.</p>
        <p className="font-normal text-xl text-gray-600">{quotations.id}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Date</p>
        <p className="font-normal text-xl text-gray-600">{quotations.date}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Issued By</p>
        <p className="font-normal text-xl text-gray-600">{quotations.issued}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between items-center my-2">
        <Link to="/procurement/view-quotations">
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

export default Quotation;
