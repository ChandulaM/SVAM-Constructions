import React, { createContext, useState } from "react";
import { Users } from "./misc/users";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState(Users);
  const [loggedUser, setLoggedUser] = useState({
    username: "",
    password: "",
    type: "",
    isLogged: "",
  });

  return (
    <UserContext.Provider value={{ users, loggedUser, setLoggedUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
