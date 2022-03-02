import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const NavBarComponent = () => {
  const { newUserDetails, logOutWithGoogle } = UseAuth();

  return (
    <ul className="nav bg-light sticky-top">
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          Genius Car Mechanic
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/home">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/service">
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pricing">
          Pricing
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logIn">
          Log in
        </Link>
      </li>
      {newUserDetails?.displayName && (
        <li className="nav-item">
          <button className="bg-primary">
            Signed in as {newUserDetails.displayName}
          </button>
        </li>
      )}
      {newUserDetails?.email && (
        <li className="nav-item">
          <button onClick={logOutWithGoogle} className="bg-primary">
            Log out
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavBarComponent;
