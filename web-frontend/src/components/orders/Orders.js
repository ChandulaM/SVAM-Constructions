import React, { useState, useEffect, useContext } from "react";
import Header from "../common/Header";
import SideNav from "../common/SideNav";
import Order from "./Order";
import { OrderContext } from "../../contexts/Orders/OrderContext";

const Orders = () => {
  const { orders, setOrders } = useContext(OrderContext);

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <SideNav />
        </div>
        <div className="col-span-4">
          <Header />
          <div className="flex flex-wrap bg-yellow-100 p-5">
            {orders.map((order) => (
              <Order order={order} />
            ))}
          </div>
          <div className="flex flex-row p-4 pl-0 ml-5 justify-start">
            <div className="flex justify-between mr-5">
              <div className="bg-gray-500 w-10 mr-2">
                <p className="text-gray-500">a</p>
              </div>
              Pending
            </div>
            <div className="flex justify-between">
              <div className="bg-green-500 w-10 mr-2">
                <p className="text-green-500">a</p>
              </div>
              Delivered
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
