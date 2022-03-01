import React from "react";
import UseAuth from "../../Hooks/UseAuth";

const LogIn = () => {
  const { signInWithGoogle, newUserDetails } = UseAuth();
  // console.log(newUserDetails);
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleForm}>
      <button variant="primary" onClick={signInWithGoogle}>
        Sign In with google
      </button>
    </form>
  );
};

export default LogIn;
