import { useState } from "react";
import RegisterUserContext from "./RegisterUserContext";

const RegisterUserState = (props) => {
  const host = "https://reachout-server.herokuapp.com";

  const [userDetails, setUserDetails] = useState({});

  return (
    <RegisterUserContext.Provider value={{ userDetails, setUserDetails }}>
      {props.children}
    </RegisterUserContext.Provider>
  );
};

export default RegisterUserState;
