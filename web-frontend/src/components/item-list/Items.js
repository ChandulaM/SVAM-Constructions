import React, { useState, useContext } from "react";
import { ItemContext } from "../../contexts/Items/ItemContext";
import Header from "../common/Header";
import SideNav from "../common/SideNav";
import Item from "./Item";

const Items = () => {
  const { items, setItems } = useContext(ItemContext);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNav />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-wrap bg-yellow-100 p-5">
          {items.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
