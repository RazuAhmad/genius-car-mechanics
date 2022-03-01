import React from "react";
import { useParams } from "react-router-dom";

const SpecificService = () => {
  const { serviceName } = useParams();
  return (
    <div>
      <h1>
        Dear Customer? You are about to get our{" "}
        <span style={{ color: "red" }}>{serviceName}</span> service.
      </h1>
    </div>
  );
};

export default SpecificService;
