import React from "react";
const TitleList = (props) => {
  return (
    <article>
      <h2>{props.title.key}</h2>
      <ul className="pl-0">
        {props.items &&
          props.items.map((item, key) => {
            return (
              <li key={key} className="d-flex  mb-2">
                <img
                  src={props.icon}
                  alt="map icon"
                  class="mr-2"
                  style={{ width: "20px" }}
                />{" "}
                {item}
              </li>
            );
          })}
      </ul>
    </article>
  );
};

export default TitleList;
