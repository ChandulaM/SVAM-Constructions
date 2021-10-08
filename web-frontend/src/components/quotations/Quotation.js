import React, { useState } from "react";
import "../../index.css";
import Button from "@mui/material/Button";
import QuotationModal from "./QuotationModal";

const Quotation = ({ quotation }) => {
  const [isClicked, setisClicked] = useState(false);

  const handleViewClicked = () => {
    setisClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <QuotationModal
          quote={quotation}
          open={isClicked}
          setOpen={handleViewClicked}
        />
      ) : (
        ""
      )}
      <div className="order-card">
        <div className="flex flex-row flex-1 justify-between my-2">
          <p className="font-semibold text-xl">Quotation No</p>
          <p className="font-normal text-xl text-gray-600">{quotation.id}</p>
        </div>
        <div className="flex flex-row flex-1 justify-between my-2">
          <p className="font-semibold text-xl">Date</p>
          <p className="font-normal text-xl text-gray-600">{quotation.date}</p>
        </div>
        <div className="flex flex-row flex-1 justify-between my-2">
          <p className="font-semibold text-xl">Status</p>
          <p className="font-normal text-xl text-gray-600">
            {quotation.status}
          </p>
        </div>
        <div className="flex flex-row flex-1 justify-between items-center my-2">
          <Button
            onClick={() => setisClicked(true)}
            fullWidth
            style={{
              borderRadius: 35,
              backgroundColor: "#ffc107",
            }}
            variant="contained"
            size="large"
          >
            View
          </Button>
        </div>
      </div>
    </>
  );
};

export default Quotation;
