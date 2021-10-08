import React, { useState } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

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

const SetPrice = () => {
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
        <SideNavP />
      </div>
      <div className="col-span-4 bg-yellow-100">
        <Header />
        <div className="flex w-3/4 mx-auto mt-10 ">
          <Card className="flex-1 p-5">
            <CardContent className="flex-1">
              <h5 className="text-2xl font-semibold">Set Price</h5>
              <div className="flex-1">
                <div className="form-row">
                  <FormControl fullWidth>
                    <InputLabel id="unitLabel">Select Item</InputLabel>
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
                <div className="form-row">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Set Price
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
                      Done
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
};

export default SetPrice;
