import React from "react";
import "../../index.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="order-card">
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Item List ID</p>
        <p className="font-normal text-xl text-gray-600">{item.id}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Date</p>
        <p className="font-normal text-xl text-gray-600">{item.curDate}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between my-2">
        <p className="font-semibold text-xl">Due Date</p>
        <p className="font-normal text-xl text-gray-600">{item.dueDate}</p>
      </div>
      <div className="flex flex-row flex-1 justify-between items-center my-2">
        <Link
          className="flex flex-1"
          to={{ pathname: `list-items/${item.id}` }}
        >
          <Button
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
        </Link>
      </div>
    </div>
  );
};

export default Item;
