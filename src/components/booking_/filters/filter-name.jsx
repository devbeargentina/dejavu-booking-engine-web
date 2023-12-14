import React, { Component, useState } from "react";

const FilterName = (props) => {
  const [state, setState] = useState({ defaultValue: "" });
  return (
    <div className="filter-section filter-name">
      <h2>{props.name}</h2>

      <ul>
        <li>
          <input
            placeholder="Type Here"
            type="text"
            value={state.defaultValue}
            onChange={(e) =>
              setState((prevState) => {
                return { ...prevState, defaultValue: e.target.value };
              })
            }
          />
          <button
            className="gobtn material-icons"
            type="button"
            onClick={() => props.handleFilters(props.name, state.defaultValue)}
          >
            <i className="fa fa-search text-white" />
          </button>
          {state.defaultValue !== "" ? (
            <button
              className="clearbtn material-icons"
              onClick={() => {
                setState({ defaultValue: "" });
                props.handleFilters(props.name, "");
              }}
            >
              <i className="fa fa-times" />
            </button>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default FilterName;
