import React from "react";
import { useState } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Order from "./Order";

const dummyOrders = [
  {
    id: "OD0369841",
    date: "20/09/2021",
    issued: "ABC Suppliers",
    status: "Pending",
  },
  {
    id: "OD1479841",
    date: "19/09/2021",
    issued: "CCC Suppliers",
    status: "Completed",
  },
  {
    id: "OD5896351",
    date: "19/09/2021",
    issued: "MNS Suppliers",
    status: "Completed",
  },
  {
    id: "OD0369635",
    date: "15/09/2021",
    issued: "MSI Suppliers",
    status: "Completed",
  },
  {
    id: "OD1488418",
    date: "14/09/2021",
    issued: "EFF Suppliers",
    status: "Pending",
  },
];

const Orders = (params) => {
  const [orders, setOrders] = useState(dummyOrders);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {orders.map((orders) => (
            <Order orders={orders} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
