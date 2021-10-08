import React, { useState } from "react";
import Header from "../common/Header";
import SideNav from "../common/SideNav";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import "../../index.css";

const measurementUnits = [
  { unit: "g", value: "Grams (g)" },
  { unit: "kg", value: "Kilograms (kg)" },
  { unit: "lb", value: "Pounds (lb)" },
  { unit: "t", value: "Tonnes (t)" },
];

const state = {
  itemName: "",
  quantity: 0,
  unit: "",
  price: 0,
};

function AddQuotation() {
  const [values, setValues] = useState(state);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNav />
      </div>
      <div className="col-span-4 bg-yellow-100">
        <Header />
        <div className="flex w-3/4 mx-auto mt-10">
          <Card className="flex-1 p-5">
            <CardContent className="flex-1">
              <h5 className="text-2xl font-semibold">Create Quotation</h5>
              <div className="flex-1">
                <div className="form-row">
                  <TextField
                    fullWidth
                    id="itemName"
                    label="Item Name"
                    variant="outlined"
                    value={values.itemName}
                    onChange={handleChange("itemName")}
                  />
                </div>
                <div className="form-row">
                  <div className="w-2/3 mr-5">
                    <TextField
                      fullWidth
                      id="quantity"
                      label="Quantity"
                      type="number"
                      value={values.quantity}
                      onChange={handleChange("quantity")}
                    />
                  </div>
                  <div className="w-1/3">
                    <FormControl fullWidth>
                      <InputLabel id="unitLabel">Measurement Unit</InputLabel>
                      <Select
                        fullWidth
                        labelId="unitLabel"
                        id="unit"
                        value={values.unit}
                        onChange={handleChange("unit")}
                        label="Measurement Unit"
                      >
                        {measurementUnits.map((unit) => (
                          <MenuItem value={unit.unit}>{unit.value}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
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
                      value={values.price}
                      onChange={handleChange("price")}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Price"
                    />
                  </FormControl>
                </div>
                <div className="form-row justify-end">
                  <div className="w-1/3">
                    <Button
                      fullWidth
                      variant="contained"
                      color="warning"
                      size="large"
                      onClick={(e) => onSubmit(e)}
                    >
                      Submit Quotation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AddQuotation;
