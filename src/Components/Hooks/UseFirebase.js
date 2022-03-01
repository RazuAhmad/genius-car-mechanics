import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import InitializeAuthentication from "../Firebase/firebase.initialize";

const UseFirebase = () => {
  InitializeAuthentication();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const [newUserDetails, setNewUserDetails] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setNewUserDetails(user);
        setErrorMsg("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const logOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        setNewUserDetails({});
        setErrorMsg("");
      })
      .catch((error) => {
        setErrorMsg(error);
      });
  };

  return {
    signInWithGoogle,
    logOutWithGoogle,
    newUserDetails,
    errorMsg,
  };
};

export default UseFirebase;
