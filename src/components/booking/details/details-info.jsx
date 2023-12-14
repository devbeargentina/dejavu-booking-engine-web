import React from "react";

const stops = [
  {
    name: "Paris",
    duration: 3,
    image: {
      url: "https://www.spark-sys.com/demos2/tripshop-v2/images/common/package/paris.jpg",
      alt: "Paris",
    },
    description:
      "Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres (41 square miles).",
  },
  {
    name: "London",
    duration: 2,
    image: {
      url: "https://www.spark-sys.com/demos2/tripshop-v2/images/common/package/london.jpg",
      alt: "London",
    },
    description:
      "London is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea.",
  },
  {
    name: "Amsterdam",
    duration: 2,
    image: {
      url: "https://www.spark-sys.com/demos2/tripshop-v2/images/common/package/amsterdam.jpg",
      alt: "Amsterdam",
    },
    description:
      "Amsterdam is the capital and most populous city of the Netherlands, with a population of 872,680 within the city proper, 1,558,755 in the urban area and 2,480,394 in the metropolitan area.",
  },
];

const InfoItem = ({ stopqs }) => {
  return (
    <React.Fragment>
      <div className="details-info">
        <ul>
          <li>
            <h3>
              <i className="fa fa-users mr-1" aria-hidden="true" /> Umrah
              Package
            </h3>
            Pre-planned itineraries with fixed transport (departure/return),
            stay & sightseeing, with only minor changes allowed
          </li>
          <li>
            <h3>
              <i className="fa fa-qrcode mr-1" aria-hidden="true" /> Stay Plan
            </h3>
            {stops.map((stop, key) => (
              <div key={key}>
                {stop.name} - {stop.duration} Nights
              </div>
            ))}
          </li>
        </ul>
      </div>
      <button className="details-changedatepax-btn">
        Change Dates and Traveler
      </button>
    </React.Fragment>
  );
};

export default InfoItem;
