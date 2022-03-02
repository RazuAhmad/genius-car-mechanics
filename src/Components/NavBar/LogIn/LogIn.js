import React from "react";
import UseAuth from "../../Hooks/UseAuth";

const LogIn = () => {
  const { signInWithGoogle, logOutWithGoogle, newUserDetails } = UseAuth();
  // console.log(newUserDetails);
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleForm}>
      {newUserDetails.displayName ? (
        <button onClick={logOutWithGoogle}>Log Out</button>
      ) : (
        <button variant="primary" onClick={signInWithGoogle}>
          Sign In with google
        </button>
      )}
    </form>
  );
};

export default LogIn;
