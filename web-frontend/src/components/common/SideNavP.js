import React from "react";
import logo from "../../assests/images/logo1.png";
import "../../index.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const SideNavP = () => {
  const location = useLocation().pathname;

  return (
    <div className="flex flex-2">
      <div className="flex-col flex-1 mb-0 pt-4 bg-gray-300 h-screen w-64">
        <div className="w-32 h-32 m-auto rounded-full bg-white p-1 mb-5">
          <img className="rounded-full p-1" src={logo} alt="Logo" />
        </div>
        <Link to="/procurement/order-request">
          <div
            className={
              location == "/procurement/order-request"
                ? "sidenav-item-active"
                : "sidenav-listitem" &&
                  location == "/procurement/view-order-requests"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Orders Requests
          </div>
        </Link>
        <Link to="/procurement/quotations">
          <div
            className={
              location == "/procurement/quotations"
                ? "sidenav-item-active"
                : "sidenav-listitem" &&
                  location == "/procurement/view-quotations"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Quotations
          </div>
        </Link>
        <Link to="/procurement/invoices">
          <div
            className={
              location == "/procurement/invoices"
                ? "sidenav-item-active"
                : "sidenav-listitem" && location == "/procurement/view-invoice"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Invoices
          </div>
        </Link>
        <Link to="/procurement/orders">
          <div
            className={
              location == "/procurement/orders"
                ? "sidenav-item-active"
                : "sidenav-listitem" && location == "/procurement/view-orders"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Orders
          </div>
        </Link>
        <Link to="/procurement/set-price">
          <div
            className={
              location == "/procurement/set-price"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Set Prices
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SideNavP;
