import React from "react";

const FormatDuration = (props) => {
  if (parseInt(props.numDays) > 0) {
    const numNights = props.numDays > 1 ? props.numDays - 1 : 0;
    if (numNights === 0) return <>{`${props.numDays}D`}</>;
    return <>{`${props.numDays}D | ${numNights}N`}</>;
  }
  return <></>;
};

export default FormatDuration;
