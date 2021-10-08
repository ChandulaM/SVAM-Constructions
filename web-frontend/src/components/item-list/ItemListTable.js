import { Button, TextField } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../../contexts/Items/ItemContext";
import { QuotationContext } from "../../contexts/Quotations/QuotationContext";
import Header from "../common/Header";
import SideNav from "../common/SideNav";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { UserContext } from "../../contexts/User/UserContext";

function ItemListTable(props) {
  const { items, setItems } = useContext(ItemContext);
  const { loggedUser } = useContext(UserContext);
  const { quotations, setQuotations } = useContext(QuotationContext);
  const [addSuccess, setaddSuccess] = useState(false);
  const itemId = props.match.params.id;
  const itemList = items.find((item) => item.id == itemId);
  const itemListIndex = items.findIndex((item) => item.id == itemId);

  const [total, setTotal] = useState(0);

  const setItemPrice = (currentItem, event) => {
    let prevItem = itemList.items.find((item) => item.name == currentItem.name);
    prevItem.price = event.target.value;
    let newTotal = prevItem.price * prevItem.quantity + total;
    itemList.total = newTotal;
    setTotal(newTotal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let prevItems = items;
    prevItems[itemListIndex] = itemList;
    console.log(prevItems);
    setItems(prevItems);
    addNewQuotation();
  };

  const addNewQuotation = () => {
    let prevQuo = quotations;

    const randomId = Math.floor(100000 + Math.random() * 900000).toString();
    prevQuo.push({
      id: `QT${randomId}`,
      date: new Date().toLocaleDateString(),
      status: "Pending",
      itemListId: itemId,
    });
    setQuotations(prevQuo);
    setaddSuccess(true);
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNav />
      </div>
      <div className="col-span-4 bg-yellow-100">
        <Header name={loggedUser.username} />
        {addSuccess ? (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Quotation added successfully
          </Alert>
        ) : (
          ""
        )}
        <div className="w-3/4 mx-auto mt-5 bg-white rounded-md shadow-lg">
          <div className="flex flex-row bg-gray-500 p-3">
            <div className="font-semibold text-lg text-center w-2/5">
              Item Name
            </div>
            <div className="font-semibold text-lg text-center w-1/5">
              Quantity
            </div>
            <div className="font-semibold text-lg text-center w-1/5">Unit</div>
            <div className="font-semibold text-lg text-center w-1/5">
              Total Per Item (Rs.)
            </div>
          </div>
          <div className="flex flex-col p-2">
            {itemList.items.map((item) => (
              <ItemListRow item={item} updatePrice={setItemPrice} />
            ))}
          </div>
          <div className="flex flex-row p-5">
            <div className="flex w-4/5 font-semibold text-lg justify-end mr-20">
              Total
            </div>
            <div className="flex w-1/5 text-lg justify-center">Rs. {total}</div>
          </div>
        </div>
        <div className="flex justify-end p-5 w-3/4 mx-auto">
          <div className="w-2/5">
            <Button
              fullWidth
              variant="contained"
              color="warning"
              size="large"
              onClick={onSubmit}
            >
              Submit Quotation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemListRow = ({ item, updatePrice }) => {
  return (
    <div className="flex flex-row border-b-2 my-2">
      <div className="font-normal text-md text-black text-center w-2/5 pt-3">
        {item.name}
      </div>
      <div className="font-normal text-md text-black text-center w-1/5 pt-3">
        {item.quantity}
      </div>
      <div className="font-normal text-md text-black text-center w-1/5 pt-3">
        {item.unit}
      </div>
      <div className="font-normal text-md text-black text-center w-1/5 pb-3">
        <TextField
          fullWidth
          type="number"
          id="price"
          label="Price"
          value={item.price}
          variant="outlined"
          onChange={(e) => updatePrice(item, e)}
        />
      </div>
    </div>
  );
};

export default ItemListTable;
