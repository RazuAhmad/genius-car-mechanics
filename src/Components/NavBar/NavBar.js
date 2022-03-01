import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  const handleNav = (e) => {
    e.preventDefault();
  };
  return (
    <ul className="nav bg-light">
      <li className="nav-item">
        <Link className="nav-link active" to="/home">
          Car Repair
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
    </ul>
  );
};

export default NavBarComponent;
