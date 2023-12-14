import { Segmented } from "antd";
import React, { useState } from "react";
import { json } from "react-router-dom";
const sortItems = [
  { order: "dsc", name: "PackageTitle" },
  { order: "", name: "duration" },
  // { order: "", name: "popularity" },
  { order: "", name: "starRationg" },
  { order: "", name: "PackageCreatedDate" },
];

const Sorting = (props) => {
  const [sortOrder, setSortOrder] = useState("dsc");
  const [activeField, setActiveField] = useState("PackageTitle");
  const [options, setOptions] = useState([
    {
      label: "Amount",
      value: "PackageTitle-asc",
      icon: <i className="fa fa-caret-up" aria-hidden="true" />,
    },
    {
      label: "Duration",
      value: "duration-dsc",
      icon: <i className="fa fa-caret-down" aria-hidden="true" />,
    },
    {
      label: "Popularity",
      value: "popularity-dsc",
      icon: <i className="fa fa-caret-down" aria-hidden="true" />,
    },
    {
      label: "Date",
      value: "PackageCreatedDate-dsc",
      icon: <i className="fa fa-caret-down" aria-hidden="true" />,
    },
  ]);

  // const options = [
  //   {
  //     label: "Amount",
  //     value: "PackageTitle-asc",
  //     icon: <i className="fa fa-caret-down" aria-hidden="true" />,
  //   },
  //   {
  //     label: "Duration",
  //     value: "duration-dsc",
  //     icon: <i className="fa fa-caret-down" aria-hidden="true" />,
  //   },
  //   {
  //     label: "Popularity",
  //     value: "popularity-dsc",
  //     icon: <i className="fa fa-caret-down" aria-hidden="true" />,
  //   },
  //   {
  //     label: "Date",
  //     value: "PackageCreatedDate-dsc",
  //     icon: <i className="fa fa-caret-down" aria-hidden="true" />,
  //   },
  // ];

  const handleSortChange = (value) => {
    console.log("value", value);
    const [field, direction] = value.split("-");
    setActiveField(field);
    setSortOrder(direction === "asc" ? "dsc" : "asc");
    const data = {
      name: field,
      order: direction === "asc" ? "dsc" : "asc",
    };
    props.handleSorting(data);
    const updatedOptions = options.map((option) => {
      const [optionField] = option.value.split("-");
      if (optionField === field) {
        const newDirection = direction === "asc" ? "dsc" : "asc";
        return {
          ...option,
          value: `${field}-${newDirection}`,
          icon: getSortIcon(field, newDirection),
        };
      } else {
        return {
          ...option,
          icon: getSortIcon(optionField, "dsc"),
        };
      }
    });
    setOptions(updatedOptions);
  };

  const getSortIcon = (field, direction) => {
    const isAsc = direction === "asc";
    const isActive = sortOrder === direction && activeField === field;
    return (
      <>
        {isActive && isAsc && (
          <i className="fa fa-caret-up" aria-hidden="true" />
        )}
        {isActive && !isAsc && (
          <i className="fa fa-caret-down" aria-hidden="true" />
        )}
        {!isActive && <i className="fa fa-sort" aria-hidden="true" />}
      </>
    );
  };

  const activeSortOption = options.find((option) => {
    const [field, direction] = option.value.split("-");
    return field === activeField && direction === sortOrder;
  });

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
  const handleClick = (e) => {
    console.log(e.target);
    const order = e.target.value
      ? sortOrder === "-dsc"
        ? "asc"
        : "dsc"
      : "asc";
    handleSortChange(activeField + "-" + order);
  };
  const scss = `label.ant-segmented-item {
    margin: 0px;
}`;
  return (
    <div className="result-sorting result-sorting-hotel mt-1 mb-1">
      <b style={{ fontSize: "16px" }}>{"Sort By "} :</b>
      <style>{scss}</style>
      <Segmented
        size="large"
        options={options.map((option) => ({
          ...option,
          icon: getSortIcon(option.value.split("-")[0], sortOrder),
        }))}
        value={activeSortOption?.value}
        onChange={handleSortChange}
        onClick={(e) => handleClick(e)}
      />
      {/* <ul>
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
      </ul> */}
    </div>
  );
};

export default Sorting;
