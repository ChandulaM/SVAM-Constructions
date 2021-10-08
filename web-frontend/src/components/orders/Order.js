import React, { useState } from "react";
import "../../index.css";
import Button from "@mui/material/Button";
import OrderDetailModal from "./OrderDetailModal";

const Order = ({ order }) => {
  const [isClicked, setisClicked] = useState(false);

  const handleViewClicked = () => {
    setisClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <OrderDetailModal
          order={order}
          open={isClicked}
          setOpen={handleViewClicked}
        />
      ) : (
        ""
      )}
      <div className="order-card">
        <div className="flex flex-row flex-1 justify-between my-2">
          <p className="font-semibold text-xl">Order ID</p>
          <p className="font-normal text-xl text-gray-600">{order.id}</p>
        </div>
        <div className="flex flex-row flex-1 justify-between my-2">
          <p className="font-semibold text-xl">Date</p>
          <p className="font-normal text-xl text-gray-600">{order.curDate}</p>
        </div>
        <div className="flex flex-row flex-1 justify-between my-2">
          <p className="font-semibold text-xl">Due Date</p>
          <p className="font-normal text-xl text-gray-600">{order.dueDate}</p>
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
          <div className="w-1/4 ml-2">
            <div
              className={
                order.state === "pending" ? "bg-gray-500" : "bg-green-500"
              }
            >
              <p
                className={
                  order.state === "pending" ? "text-gray-500" : "text-green-500"
                }
              >
                a
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
