import React from "react";
import { useState, useContext } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Order from "./OrderRequest";
import { OrderRequestContext } from "../../../contexts/Order-reqests/OrderRequestContext";

const OrderRequest = (params) => {
  const { items, setItems } = useContext(OrderRequestContext);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {items.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderRequest;
