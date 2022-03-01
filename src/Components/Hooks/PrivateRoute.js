import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const PrivateRoute = ({ children }) => {
  const { newUserDetails } = UseAuth();
  return newUserDetails.email ? children : <Navigate to="/logIn" />;
};

export default PrivateRoute;
