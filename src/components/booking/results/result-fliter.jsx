import React from "react";
import { useSelector } from "react-redux";
import filterIcon1 from "../../../assets/images/web/Property 1=filter.png";

const ResultFilter = (props) => {
  const filter = useSelector((state) => state.package.filter);
  return (
    <div className="result-views">
      <ul>
        <li className={"act text-white"}>
          <button
            className="text-white"
            onClick={() => props.handleFilterView()}
          >
            <img className="d-none" alt="filter" scr={filterIcon1} />
            Filter
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ResultFilter;
