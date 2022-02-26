import React from "react";
// import "./Experts.css";
import AllExpert from "../../fakeData/expert.json";
import ExpertDetails from "./ExpertDetails/ExpertDetails";
const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary" style={{ textAlign: "center" }}>
        Our Experts
      </h2>
      <div className="row">
        {AllExpert.map((expert) => (
          <ExpertDetails key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
