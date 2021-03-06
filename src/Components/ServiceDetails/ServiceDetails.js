import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceDetails.css";
const ServiceDetails = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    // <div className="col-lg-4 col-md-6 col-sm-12">
    //   <img style={{ width: "100%" }} src={img} alt="" />
    //   <h2>{name}</h2>
    //   <h3 className="text-primary">Price: {price}</h3>
    //   <p>{description}</p>
    // </div>

    <Col lg={4} md={6} sm={12}>
      <img style={{ width: "100%" }} src={img} alt="" />
      <h2>{name}</h2>
      <h3 className="text-primary">Price: {price}</h3>
      <p>{description}</p>
      <button className="btn btn-warning">
        <Link style={{ textDecoration: "none" }} to={"/service/" + name}>
          Book {name.toLowerCase()}
        </Link>
      </button>
    </Col>
  );
};

export default ServiceDetails;
