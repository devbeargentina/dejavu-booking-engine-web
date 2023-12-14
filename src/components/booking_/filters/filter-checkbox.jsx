import React from "react";
import StarRatting from "../common/star-rating";

const FilterCheckBox = (props) => {
  const name = props.name;
  const items = props.values;

  return (
    <React.Fragment>
      {items.length > 1 ? (
        <div className={"filter-section filter-" + name}>
          <h2>{"Package Star"}</h2>
          <ul className="filter-more-hide">
            {items.map((item) => {
              return item !== "" ? (
                <li key={item}>
                  <input type="checkbox" id={item} value={item} name={item} />
                  <label
                    name={item}
                    htmlFor={item}
                    title={item}
                    onClick={() => props.handleFilters(name, item)}
                  >
                    {name === "rating" ? <StarRatting {...item} /> : item}
                  </label>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default FilterCheckBox;
