import React from "react";
import ItineraryItem from "./details-itinerary-item";

const Iitinerary = props => {
  const { slots, dateInfo } = props;
  return (
    <div className="details-itinerary">
      <h2>Hotels & Transport</h2>
      <section className="packages-grid">
        <ul>
          {slots.map((item, key) => {
            return (
              <li key={key}>
                <ItineraryItem
                  {...item}
                  dateInfo={dateInfo}
                  handleItemChange={props.handleItemChange}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Iitinerary;
