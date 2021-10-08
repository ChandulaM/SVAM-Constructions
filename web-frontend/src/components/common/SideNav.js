import React from "react";
import logo from "../../assests/images/logo1.png";
import "../../index.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const SideNav = () => {
  const location = useLocation().pathname;

  return (
    <div className="flex flex-2">
      <div className="flex-col flex-1 mb-0 pt-4 bg-gray-300 h-screen w-64">
        <div className="w-32 h-32 m-auto rounded-full bg-white p-1 mb-5">
          <img className="rounded-full p-1" src={logo} alt="Logo" />
        </div>
        <Link to="/orders">
          <div
            className={
              location == "/orders" ? "sidenav-item-active" : "sidenav-listitem"
            }
          >
            Orders
          </div>
        </Link>
        <Link to="/quotations">
          <div
            className={
              location == "/quotations"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Quotations
          </div>
        </Link>
        <Link to="/add-quotation">
          <div
            className={
              location == "/add-quotation"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Add Quotations
          </div>
        </Link>
        <Link to="/add-invoice">
          <div
            className={
              location == "/add-invoice"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Create Invoice
          </div>
        </Link>
        <Link to="/generate-reciept">
          <div
            className={
              location == "/generate-reciept"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            Generate Reciept
          </div>
        </Link>
        <Link to="/list-items">
          <div
            className={
              location == "/list-items"
                ? "sidenav-item-active"
                : "sidenav-listitem"
            }
          >
            View Item List
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SideNav;
