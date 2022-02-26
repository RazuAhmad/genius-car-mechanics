import React from "react";

const ExpertDetails = ({ expert }) => {
  const { img, name, expertize } = expert;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <img style={{ width: "100%" }} src={img} alt="" />
      <h3 style={{ textAlign: "center" }}>{name}</h3>
      <h4 style={{ textAlign: "center" }}>Expertize: {expertize}</h4>
    </div>
  );
};

export default ExpertDetails;
