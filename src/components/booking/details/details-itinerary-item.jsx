import React from "react";
import ItineraryItemHotel from "./details-itinerary-item-hotel";
import ItineraryItemFlight from "./details-itinerary-item-flight";
import ItineraryItemTransportation from "./details-itinerary-item-transportation";
import ItineraryItemServicesNew from "./details-itinerary-item-services-new";
import ItineraryItemTransportationNew from "./details-itinerary-item-transportation-new";

const ItineraryItem = (props) => {
  const { data, business, relativeSearchInfo, dateInfo, id } = props;
  return (
    <React.Fragment>
      {business === "hotel" ? (
        <ItineraryItemHotel
          {...data}
          relativeSearchInfo={relativeSearchInfo}
          dateInfo={dateInfo}
          handleItemChange={() => props.handleItemChange(business, id, props)}
        />
      ) : null}
      {business === "air" ? (
        <ItineraryItemFlight
          {...data}
          handleItemChange={() => props.handleItemChange(business, id, props)}
        />
      ) : null}
      {business === "transfers" ? (
        <ItineraryItemTransportation
          {...data}
          handleItemChange={() => props.handleItemChange(business, id, props)}
        />
      ) : null}
      {business === "transportationnew" ? (
        <ItineraryItemTransportationNew
          {...data}
          handleItemChange={() => props.handleItemChange(business, id, props)}
        />
      ) : null}
      {business === "groundservicenew" ? (
        <ItineraryItemServicesNew
          {...data}
          handleItemChange={() => props.handleItemChange(business, id, props)}
        />
      ) : null}
    </React.Fragment>
  );
};

export default ItineraryItem;
