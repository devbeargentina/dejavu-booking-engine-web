import React from "react";

function StarRating({ starRating }) {
  const stars = [];
  for (let i = 0; i < starRating; i++) {
    stars.push(<i key={i} className="fa fa-star" aria-hidden="true" />);
  }
  return <div>{stars}</div>;
}

export default StarRating;
