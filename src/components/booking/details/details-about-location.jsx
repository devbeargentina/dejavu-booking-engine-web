import React from "react";

const stops = [
  {
    name: "Stop 1",
    image: {
      url: "https://example.com/stop1.jpg",
      alt: "Stop 1 Image",
    },
    description: "This is the description for Stop 1",
  },
  {
    name: "Stop 2",
    image: {
      url: "https://example.com/stop2.jpg",
      alt: "Stop 2 Image",
    },
    description: "This is the description for Stop 2",
  },
  {
    name: "Stop 3",
    image: {
      url: "https://example.com/stop3.jpg",
      alt: "Stop 3 Image",
    },
    description: "This is the description for Stop 3",
  },
];

const AboutLocation = ({ stopss }) => {
  return (
    <React.Fragment>
      {stops.map((item) => (
        <div className="details-location" key={item.name}>
          <h2>About {item.name}</h2>
          <div>
            <figure>
              <img src={item.image.url} alt="" />
            </figure>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default AboutLocation;
