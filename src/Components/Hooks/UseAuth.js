import { useContext } from "react";
import { AllContext } from "./AuthProvider";

const UseAuth = () => {
  return useContext(AllContext);
};

export default UseAuth;
