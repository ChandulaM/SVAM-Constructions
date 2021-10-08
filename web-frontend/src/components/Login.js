import React, { useContext, useState } from "react";
import Header from "./common/Header";
import Logo from "../assests/images/logo1.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UserContext } from "../contexts/User/UserContext";
import { useHistory } from "react-router";

const Login = (props) => {
  const { users, setLoggedUser } = useContext(UserContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
    isLogged: false,
    type: "",
  });
  let history = useHistory();

  const handleChange = (prop) => (event) => {
    setCredentials({ ...credentials, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      credentials.username == "supplier" &&
      credentials.password == "sup123"
    ) {
      setLoggedUser({
        username: credentials.username,
        password: credentials.password,
        type: "sup",
        isLogged: true,
      });
      history.push("/orders");
    } else if (
      credentials.username == "procStaff" &&
      credentials.password == "proc123"
    ) {
      setLoggedUser({
        username: credentials.username,
        password: credentials.password,
        type: "proc",
        isLogged: true,
      });
      history.push("/procurement/order-request");
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      <Header />
      <div className=" h-full p-6">
        <div className="grid grid-cols-2 h-full mx-20 my-10">
          <div className="flex justify-center p-5">
            <img src={Logo} />
          </div>
          <div className="flex justify-around align-center">
            <div className="flex flex-col rounded-md p-6 shadow-lg justify-center align-center">
              <p className="p-1 text-2xl text-gray-700 font-semibold mb-3 mx-8">
                User Login
              </p>
              <div className="w-80 my-3 mx-8">
                <TextField
                  fullWidth
                  id="username"
                  label="Username"
                  variant="outlined"
                  value={credentials.username}
                  onChange={handleChange("username")}
                />
              </div>
              <div className="w-80 my-3 mx-8">
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange("password")}
                />
              </div>
              <div className="w-80 mt-2 mb-3 mx-8 text-sm text-semibold text-red-700">
                {loginError ? "Incorrect username or password" : ""}
              </div>
              <div className="flex w-80 my-3 mx-8 justify-center">
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "#fdd835",
                    borderRadius: 25,
                  }}
                  onClick={(e) => onSubmit(e)}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
