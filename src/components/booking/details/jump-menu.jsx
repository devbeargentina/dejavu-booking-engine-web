import React from "react";
import { Jump } from "react-jump";

const JumpMenu = () => {
  return (
    <div className="items-details details-jumpmenu">
      <div className="details-jumpmenu-wrap">
        <ul>
          <li>
            <b>jump to :</b>
          </li>{" "}
          <li>
            <Jump
              target={".details-main-attraction"}
              options={{ offset: -120 }}
            >
              Main Attractions
            </Jump>
          </li>{" "}
          <li>
            <Jump target={".details-itinerary"} options={{ offset: -124 }}>
              Itinerary
            </Jump>
          </li>{" "}
          <li>
            <Jump
              target={".details-inclusion-exclusion"}
              options={{ offset: -114 }}
            >
              Includes & Excludes
            </Jump>
          </li>{" "}
          <li>
            <Jump target={".details-package-cost"} options={{ offset: -104 }}>
              Package Cost
            </Jump>
          </li>{" "}
          <li>
            <Jump target={".details-info-faq"} options={{ offset: -130 }}>
              Info & FAQ
            </Jump>
          </li>{" "}
          <li>
            <Jump target={".details-location"} options={{ offset: -130 }}>
              About the Place
            </Jump>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JumpMenu;
