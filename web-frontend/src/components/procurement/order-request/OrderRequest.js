import React from "react";
import "../../../index.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  return (
    <div className="order-card">
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Order ID</p>
        <p className="font-normal text-xl text-gray-600">{order.id}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Date</p>
        <p className="font-normal text-xl text-gray-600">{order.date}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Site</p>
        <p className="font-normal text-xl text-gray-600">{order.site}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between items-center my-2">
        <Link to="/procurement/view-order-requests">
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
        {order.status === "Pending" ? (
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
        ) : order.status === "Completed" ? (
          <Button
            fullWidth
            variant="contained"
            size="large"
            style={{
              backgroundColor: "green",
              borderRadius: 25,
            }}
            disabled={true}
          >
            Completed
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            size="large"
            style={{
              backgroundColor: "orange",
              borderRadius: 25,
            }}
            disabled={true}
          >
            Reviewing
          </Button>
        )}
      </div>
    </div>
  );
};

export default Order;
