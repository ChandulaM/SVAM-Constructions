import React from "react";
import "../../../index.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Order = ({ orders }) => {
  return (
    <div className="order-card">
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Order ID </p>
        <p className="font-normal text-xl text-gray-600">{orders.id}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Date</p>
        <p className="font-normal text-xl text-gray-600">{orders.curDate}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Issued By</p>
        <p className="font-normal text-xl text-gray-600">{orders.issued}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between items-center my-2">
        <Link
          className="flex flex-1"
          to={{ pathname: `/procurement/view-orders/${orders.id}` }}
        >
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
        {orders.status === "Pending" ? (
          <Button
            fullWidth
            variant="contained"
            size="large"
            style={{
              backgroundColor: "gray",
              borderRadius: 25,
            }}
            disabled
          >
            Pending
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            size="large"
            style={{
              backgroundColor: "green",
              borderRadius: 25,
            }}
            disabled
          >
            Completed
          </Button>
        )}
      </div>
    </div>
  );
};

export default Order;
