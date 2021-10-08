import React from "react";
import { useState } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Order from "./OrderRequest";

const dummyOrders = [
  { id: "ODR0369841", date: "20/09/2021", site: "Green House", status : "Pending"},
  { id: "ODR1479841", date: "19/09/2021", site: "Pillow House", status : "Reviewing" },
  { id: "ODR5896351", date: "19/09/2021", site: "Rangers Club", status : "Completed" },
  { id: "ODR0369635", date: "15/09/2021", site: "ABC House", status : "Completed" },
  { id: "ODR1488418", date: "14/09/2021", site: "CCC Club", status : "Pending" },
];

const OrderRequest = (params) => {
  const [orders, setOrders] = useState(dummyOrders);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {orders.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderRequest;
