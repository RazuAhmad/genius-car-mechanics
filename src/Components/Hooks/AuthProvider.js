import React, { createContext } from "react";
import UseFirebase from "./UseFirebase";

export const AllContext = createContext();
const AuthProvider = ({ children }) => {
  return (
    <AllContext.Provider value={UseFirebase()}>{children}</AllContext.Provider>
  );
};

export default AuthProvider;
