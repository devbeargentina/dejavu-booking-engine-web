import React from "react";

function PercentageCalculation({ amount, percentage }) {
  const xPercentOfY = (amount * percentage) / 100;
  return xPercentOfY;
}

export default PercentageCalculation;
