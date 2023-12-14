import React from "react";
import filterIcon1 from "../../../assets/images/web/filter.png";

const ResultViews = (props) => {
  return (
    <div className="result-views">
      <ul>
        <li className={props.currentView === "gridview" ? "act" : ""}>
          <button onClick={() => props.handleViews("gridview")}>
            <img alt="filter" scr={filterIcon1} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ResultViews;
