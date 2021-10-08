import React from "react";
import Header from "./common/Header";
import Logo from "../assests/images/logo1.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddUser = () => {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <div className=" h-full p-6">
        <div className="grid grid-cols-2 h-full mx-20 my-10">
          <div className="flex justify-center p-5">
            <img src={Logo} />
          </div>
          <div className="flex justify-around align-center">
            <div className="flex flex-col rounded-md p-4 shadow-lg ">
              <p className="p-1 text-2xl text-gray-700 font-semibold mb-3 mx-8">
                Register
              </p>
              <div className="w-80 my-3 mx-8">
                <TextField
                  fullWidth
                  id="username"
                  label="Username"
                  variant="outlined"
                />
              </div>
              <div className="w-80 my-3 mx-8">
                <TextField fullWidth id="nic" label="NIC" variant="outlined" />
              </div>
              <div className="w-80 my-3 mx-8">
                <TextField
                  fullWidth
                  id="mobile"
                  label="Mobile No."
                  variant="outlined"
                />
              </div>

              <div className="w-100 my-3 mx-8">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Employee Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="Employee Type"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Procurement"}>Procurement</MenuItem>
                      <MenuItem value={"Supplier"}>Supplier</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className="w-80 my-3 mx-8">
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </div>
              <div className="w-80 my-3 mx-8">
                <TextField
                  fullWidth
                  id="confirm"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                />
              </div>
              <div className="flex w-80 my-3 mx-8 justify-center">
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "gray",
                    borderRadius: 25,
                  }}
                >
                  Cancle
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "#fdd835",
                    borderRadius: 25,
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
