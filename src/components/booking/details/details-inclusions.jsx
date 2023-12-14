import React from "react";
import ResultInclusions from "../results/result-inclusions";

const InclusionIcons = props => {
  return (
    <div className="details-inclusions-icons">
      <h2>Inclusions</h2>
      <ResultInclusions {...props} />
    </div>
  );
};

export default InclusionIcons;
