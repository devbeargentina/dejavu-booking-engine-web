import React from "react";
import { json } from "react-router-dom";
const sortItems = [
  { order: "dsc", name: "PackageTitle" },
  { order: "", name: "duration" },
  // { order: "", name: "popularity" },
  { order: "", name: "starRationg" },
  { order: "", name: "packageCreatedDate" },
];

const Sorting = (props) => {
  const sortResults = (sortBy) => {
    sortBy.name === props.orderBy
      ? props.sortOrder === "asc"
        ? (sortBy.order = "dsc")
        : (sortBy.order = "asc")
      : sortBy.order === ""
      ? (sortBy.order = "dsc")
      : (sortBy.order = "asc");

    props.handleSorting(sortBy);
  };
  return (
    <div className="result-sorting result-sorting-hotel mt-1 mb-1">
      <b style={{ fontSize: "16px" }}>{"Sort By "} :</b>
      <ul>
        {sortItems.map((item) => {
          const classes =
            item.name === props.orderBy
              ? props.sortOrder === "asc"
                ? "active"
                : "active asc"
              : "";

          return (
            <li key={item.name}>
              <button
                name={item.name}
                className={classes}
                onClick={() => sortResults(item)}
              >
                {item.name.replace(/([A-Z])/g, " $1")}
                <i className="fa fa-caret-down" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sorting;
