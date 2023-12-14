import React from "react";

const StarRatting = (props) => {
  const count = Math.ceil(props[0]);
  const stars = [...Array(count).keys()];

  return (
    <React.Fragment>
      {stars.map((star) => (
        <i key={star} className="fa fa-star" aria-hidden="true" />
      ))}
    </React.Fragment>
  );
};

export default StarRatting;
