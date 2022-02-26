import React from "react";
import "./Service.css";
import fakeData from "../../fakeData/fakeData.json";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    // <div className="container" href="#services">
    //   <h2 style={{ textAlign: "center" }} className="text-primary">
    //     Our Services
    //   </h2>
    //   <div className="row">
    // {fakeData.map((pd) => (
    //   <ServiceDetails service={pd} key={pd.id} />
    // ))}
    //   </div>
    // </div>
    <Container>
      <Row>
        {fakeData.map((pd) => (
          <ServiceDetails service={pd} key={pd.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Service;
