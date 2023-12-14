import React from "react";

const TotalItems = props => {
  const itemCount = props.data !== undefined ? props.data.length : null;
  // const itemCount =
  //   props.pageInfoIndex !== undefined
  //     ? props.pageInfoIndex[0].item.filteredResults
  //     : "";
  return (
    <h1>
      <span>{itemCount}</span> <b>Packages</b> Found Matching Your Search
    </h1>
  );
};

export default TotalItems;
