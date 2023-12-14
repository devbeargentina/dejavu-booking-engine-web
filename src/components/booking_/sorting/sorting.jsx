import React from "react";
import { json } from "react-router-dom";
const sortItems = [
  { order: 1, name: "price" },
  { order: 0, name: "duration" },
  { order: 0, name: "popularity" },
  { order: 0, name: "rating" },
  { order: 0, name: "createdDate" },
];

const Sorting = (props) => {
  const sortResults = (sortBy) => {
    sortBy.name === props.name
      ? props.order === -1
        ? (sortBy.order = 1)
        : (sortBy.order = -1)
      : sortBy.order === 0
      ? (sortBy.order = 1)
      : (sortBy.order = -1);

    props.handleSorting(sortBy);
  };
  return (
    <div className="result-sorting result-sorting-hotel">
      <b style={{ fontSize: "16px" }}>{"SortBy"} :</b>
      <ul>
        {sortItems.map((item) => {
          const classes =
            item.name === props.name
              ? props.order === -1
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
                {"_" + item.name + "Sort"}
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
