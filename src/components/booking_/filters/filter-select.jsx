import React from "react";

const FilterSelect = (props) => {
  const { name, defaultValue, values: items } = props;
  return (
    <div className="filter-section filter-Currency">
      <h2>{"Select Filter"}</h2>
      <ul>
        <li>
          <select className="ComboBox" defaultValue={defaultValue}>
            {items.map((item) => {
              return (
                <option
                  key={item}
                  value={item}
                  onClick={() => props.handleFilters(name, item)}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default FilterSelect;
