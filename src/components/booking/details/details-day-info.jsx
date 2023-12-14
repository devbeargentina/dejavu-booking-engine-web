import React from "react";
const props = {
  dayDescriptions: [
    {
      day: 1,
      title: "Arrival in Paris",
      description:
        "Arrive at Charles de Gaulle Airport and transfer to the hotel.",
    },
    {
      day: 2,
      title: "Sightseeing in Paris",
      description:
        "Visit the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral.",
    },
    {
      day: 3,
      title: "Versailles Palace",
      description:
        "Take a day trip to the Palace of Versailles and explore the gardens.",
    },
    {
      day: 4,
      title: "Departure from Paris",
      description:
        "Transfer to Charles de Gaulle Airport for your flight home.",
    },
  ],
};

const DayDetails = (propss) => {
  return (
    <div className="details-day-itinerary">
      <h2>Detailed Day Wise Itinerary</h2>
      <section>
        {props.dayDescriptions.map((item, key) => {
          return (
            <article key={key}>
              <h3>
                Day {item.day} - {item.title}
              </h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default DayDetails;
