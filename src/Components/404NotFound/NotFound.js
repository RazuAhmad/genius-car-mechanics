import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found.....</h2>
      <br />
      <button>
        <Link to="/home">Go to Home Page</Link>
      </button>
    </div>
  );
};

export default NotFound;
