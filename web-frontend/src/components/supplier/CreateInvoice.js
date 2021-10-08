import React, { useState } from "react";
import SideNav from "../common/SideNav";
import Header from "../common/Header";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "../../index.css";

const invoice = {
  orderId: "",
  item: "",
  quantity: "",
  price: "",
  date: "",
};

function CreateInvoice() {
  const [invoiceDetails, setinvoiceDetails] = useState(invoice);

  const handleChange = (prop) => (event) => {
    setinvoiceDetails({ ...invoiceDetails, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(invoiceDetails);
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNav />
      </div>
      <div className="col-span-4 bg-yellow-100">
        <Header />
        <div className="flex p-5">
          <div className="flex flex-col w-3/4 mx-auto mt-5 p-5 shadow-lg rounded-md bg-white">
            <h5 className="text-2xl font-semibold">Create Invoice</h5>
            <div className="form-row">
              <TextField
                fullWidth
                id="orderId"
                label="Order ID"
                variant="outlined"
                value={invoiceDetails.orderId}
                onChange={handleChange("orderId")}
              />
            </div>
            <div className="form-row">
              <TextField
                fullWidth
                id="item"
                label="Item"
                variant="outlined"
                value={invoiceDetails.item}
                onChange={handleChange("item")}
              />
            </div>
            <div className="form-row">
              <TextField
                fullWidth
                id="quantity"
                label="Quantity"
                variant="outlined"
                type="number"
                value={invoiceDetails.quantity}
                onChange={handleChange("quantity")}
              />
            </div>
            <div className="form-row">
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Price
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  type="number"
                  id="outlined-adornment-amount"
                  value={invoiceDetails.price}
                  onChange={handleChange("price")}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Price"
                />
              </FormControl>
            </div>
            <div className="form-row items-center">
              <div className="w-2/3 mr-5">
                <TextField
                  fullWidth
                  id="date"
                  label="Date"
                  type="date"
                  value={invoiceDetails.date}
                  onChange={handleChange("date")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="w-1/3">
                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  size="large"
                  onClick={(e) => onSubmit(e)}
                >
                  Submit Invoice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInvoice;
