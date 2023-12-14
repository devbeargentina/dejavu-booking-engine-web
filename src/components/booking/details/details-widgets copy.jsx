import React, { useState } from "react";
import { Link } from "react-router-dom";
import dssv from "../../../assets/images/web/SVG/icons-22.svg";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateWidget } from "../../../redux/cartSice";

const DetailsWidgets = (props) => {
  const navigate = useNavigate();
  debugger;
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [adultsPrice, setAdultsPrice] = useState(0);
  const [childrenPrice, setChildrenPrice] = useState(0);

  // Dispatch updateWidget action to update a specific field in the widgets state
  const dispatch = useDispatch();

  // Access widgets state
  const widgets = useSelector((state) => state.cart.widgets);
  console.log(widgets);
  // Access a specific field in the widgets state
  const joinFrom = useSelector((state) => state.cart.widgets.joinFrom);
  console.log(joinFrom);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleDestinationChange = (event) => {
    debugger;
    const destination = props.destinations.find(
      (destination) => destination.destinationName === event.target.value
    );
    debugger;

    const joinFrom = event.target.value;
    const adultPrice = destination.adultPrice; // replace with the actual value
    const childPrice = destination.childPrice; // replace with the actual value
    dispatch(
      updateWidget({
        fieldValues: {
          joinFrom: event.target.value,
          adultPrice: destination.adultPrice,
          childPrice: destination.childPrice,
        },
      })
    );
    setDestination(event.target.value);
    setAdultsPrice(destination.adultPrice);
    setChildrenPrice(destination.childPrice);
  };

  const handleAdultIncrement = () => {
    const Available = props.destinations
      .find((d) => d.destinationName === destination)
      .slots.find((slot) => slot.date === selectedSlot).available;
    if (Available >= adults + 1) {
      dispatch(
        updateWidget({
          fieldValues: {
            adults: adults + 1,
          },
        })
      );
      setAdults(adults + 1);
    }
  };

  const handleAdultDecrement = () => {
    if (adults > 1) {
      dispatch(
        updateWidget({
          fieldValues: {
            adults: adults - 1,
          },
        })
      );
      setAdults(adults - 1);
    }
  };

  const redirectToCart = () => {
    var sdfdsf = startDate;
    const startDate1 = moment(startDate.split("|")[0]).format("DD/MM/YYYY");

    const endDate = moment(startDate.split("|")[1]).format("DD/MM/YYYY");
    const param = btoa(
      `${props.id}/${destination}/${startDate}/${adults}/${children}`
    );

    navigate(`/cart/${param}`);
  };

  const handleChildIncrement = () => {
    dispatch(
      updateWidget({
        fieldValues: {
          children: children + 1,
        },
      })
    );
    setChildren(children + 1);
  };

  const handleChildDecrement = () => {
    if (children > 0) {
      dispatch(
        updateWidget({
          fieldValues: {
            children: children - 1,
          },
        })
      );
      setChildren(children - 1);
    }
  };

  // const destinationOptions = props.destinations.map((destination, index) => (
  //   <option key={index} value={destination.destinationName}>
  //     {destination.destinationName}
  //   </option>
  // ));
  const destinationOptions = props.destinations
    .filter((destination) => {
      return destination.slots.some((slot) => {
        const slotDate = new Date(slot.date);
        return slotDate > new Date() && slot.available > 2;
      });
    })
    .map((destination, index) => (
      <option key={index} value={destination.destinationName}>
        {destination.destinationName}
      </option>
    ));

  const packageSlotsOptions = props.destinations.flatMap((destination) =>
    destination.slots
      .filter((slot) => new Date(slot.date) > new Date())
      .map((date, index) => (
        <option key={index} value={date}>
          {new Date(date).toLocaleString()}
        </option>
      ))
  );

  // const packageSlotsOptionsOld = props.packageSlots
  //   .filter((date) => new Date(date) > new Date())
  //   .map((date, index) => (
  //     <option key={index} value={date}>
  //       {new Date(date).toLocaleString()}
  //     </option>
  //   ));

  // Get current date
  const today = new Date();

  // Filter out past dates
  debugger;
  // const filteredSlots = props.packageSlots.filter(
  //   (slot) => new Date(slot) > today
  // );

  // Retrieve destination names
  const destinationNames = props.destinations.map(
    (destination) => destination.destinationName
  );

  const getSlotsByDestination = (destinationName) => {
    debugger;
    const currentDate = new Date(); // Get the current date
    const destination = props.destinations.find(
      (d) => d.destinationName === destinationName
    );
    debugger;
    if (destination) {
      // Filter out slots with past dates
      const filteredSlots = destination.slots.filter(
        (slot) => new Date(slot.date) >= currentDate
      );
      return filteredSlots;
    } else {
      return [];
    }
  };

  const SlotSelect = ({ destinationName }) => {
    debugger;
    const filteredSlots = getSlotsByDestination(destinationName);

    return (
      <select
        className="form-control select-with-icon"
        value={selectedSlot}
        onChange={(e) => {
          debugger;
          console.log(e.target.value);
          var selectedSlot = props.destinations
            .find((d) => d.destinationName === destination)
            .slots.find((slot) => slot.date === e.target.value);
          dispatch(
            updateWidget({
              fieldValues: {
                tripDate: selectedSlot.date,
                adults: 1,
                children: 0,
                available: selectedSlot.available,
                duration: selectedSlot.duration,
              },
            })
          );
          setSelectedSlot(e.target.value);
          setAdults(1);
          setChildren(0);
        }}
      >
        <option value="">Select a slot</option>
        {filteredSlots.map((slot, index) => {
          const slotDate = new Date(slot.date);
          if (slotDate >= new Date()) {
            return (
              <option key={index} value={slot.date}>
                {`${moment(slot.date).format("DD/MM/YYYY")} - ${moment(
                  slot.date
                )
                  .add(slot.duration, "days")
                  .format("DD/MM/YYYY")} (Avail-${slot.available})`}
              </option>
            );
          }
          return null;
        })}
      </select>
    );
  };

  const getSevicesByDestination = (destinationName) => {
    debugger;
    const currentDate = new Date(); // Get the current date
    const destination = props.destinations.find(
      (destination) => destination.destinationName === destinationName
    );
    if (destination) {
      // // Filter out slots with past dates
      // const filteredSlots = destination.slots.filter(
      //   (slot) => new Date(slot.date) >= currentDate
      // );
      return destination.additionalServices;
    } else {
      return [];
    }
  };

  const handleServiceChange = (e) => {
    debugger;
    const serviceName = e.target.value;
    const isChecked = e.target.checked;
    debugger;
    // Update selected services state based on checkbox checked or unchecked
    if (isChecked) {
      setSelectedServices([...selectedServices, serviceName]);
    } else {
      setSelectedServices(
        selectedServices.filter((service) => service !== serviceName)
      );
    }

    const selectedServicePrices = destinationSelected.additionalServices
      .filter((service) => service.serviceName === serviceName)
      .map((service) => service);
    debugger;
    dispatch(
      updateWidget({
        fieldValues: {
          additionalServices: selectedServicePrices[0],
        },
      })
    );
  };

  const AmenitiesList = ({ destinationName }) => {
    debugger;
    const additionalServices = getSevicesByDestination(destinationName);
    debugger;
    return (
      <div>
        {/* <h3>Additional Services:</h3> */}
        {/* Render checkbox list based on additionalServices array */}
        {additionalServices.map((service, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={service.serviceName}
              name={service.serviceName}
              value={service.serviceName}
              checked={selectedServices.includes(service.serviceName)}
              onChange={handleServiceChange}
            />
            <label className="ml-2" htmlFor={service.serviceName}>
              {service.serviceName} - {service.price}
            </label>
          </div>
        ))}
        {/* <p>Selected Services: {selectedServices.join(", ")}</p> */}
      </div>
    );
  };
  // Generate select options

  const scss = `

.select-with-icon {
  background-image: url(${dssv});
  background-repeat: no-repeat;
  background-position: calc(3% - 0px) center;
  padding-left: 30px;
}`;

  const destinationSelected = props.destinations.find(
    (d) => d.destinationName === destination
  );
  debugger;
  const selectedServicePrices =
    destinationSelected &&
    destinationSelected.additionalServices
      .filter((service) => selectedServices.includes(service.serviceName))
      .map((service) => service.price);
  const totalPrice = selectedServicePrices
    ? selectedServicePrices.reduce((sum, price) => sum + price, 0)
    : 0;
  console.log(selectedServicePrices);
  console.log(totalPrice);

  return (
    <>
      <style>{scss}</style>
      <div className="col-lg-12 p-3 pl-4 pr-4 border-radius shadow bg-white">
        <div className="col-lg-12 p-0 mb-3">
          <div className="form-group">
            <label htmlFor="start-date">Join From</label>
            <select
              className="form-control select-with-icon"
              id="start-date"
              value={destination}
              onChange={handleDestinationChange}
            >
              <option key={100} value="">
                Select Join From
              </option>
              {destinationOptions}
            </select>
          </div>
        </div>
        <div className="col-lg-12 p-0 mb-3">
          <div className="form-group">
            <label htmlFor="start-date">Trip Date</label>
            {/* <select
              className="form-control select-with-icon"
              id="start-date"
              value={startDate}
              onChange={handleStartDateChange}
            >
              {selectOptions}
            </select> */}
            <SlotSelect destinationName={destination} />
            {destination && selectedSlot && (
              <div className="mt-2">
                {`Available slots - ${
                  props.destinations
                    .find((d) => d.destinationName === destination)
                    .slots.find((slot) => slot.date === selectedSlot).available
                }`}
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-12 p-0 d-flex justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-25">Adults</span>
            <small className="w-100 d-block h-25 mt-2 text-secondary">
              Above 10 years
            </small>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <li className="page-item">
              <button
                className="page-link text-dark font-weight-bold"
                onClick={handleAdultDecrement}
                disabled={adults === 1}
              >
                -
              </button>
            </li>
            <li className="page-item">
              <span className="page-link text-dark bg-light">{adults}</span>
            </li>
            <li className="page-item">
              <button
                className="page-link text-dark font-weight-bold"
                onClick={handleAdultIncrement}
                disabled={adults === 5}
              >
                +
              </button>
            </li>
          </div>
        </div>
        <div className="col-lg-12 p-0 d-flex justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-25">Number of Child</span>
            <small className="w-100 d-block h-25 mt-2 text-secondary">
              5 to 10 years
            </small>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <li className="page-item">
              <button
                className="page-link text-dark font-weight-bold"
                onClick={handleChildDecrement}
                disabled={children === 0}
              >
                -
              </button>
            </li>
            <li className="page-item">
              <span className="page-link text-dark bg-light">{children}</span>
            </li>
            <li className="page-item">
              <button
                className="page-link text-dark font-weight-bold"
                onClick={handleChildIncrement}
              >
                +
              </button>
            </li>
          </div>
        </div>

        <div className="col-lg-12 p-0 mb-3">
          <div className="form-group">
            <label htmlFor="start-date">Additional Services</label>
            <AmenitiesList destinationName={destination} />
          </div>
        </div>

        <div className="col-lg-12 p-0 d-flex align-items-center justify-content-between">
          <div className="p-0 ">
            <div className="p-0 ">
              <small className="h-25">{`${adults} Adult + ${children} Child`}</small>
            </div>
            <div className="p-0 ">
              <small className="h-25">{`(${adults} * ${adultsPrice}) + (${children} * ${childrenPrice})`}</small>
            </div>
          </div>
          <div className="p-0 ">
            <span className="w-100 d-block h-25">{`${
              adults * adultsPrice + children * childrenPrice
            }/- `}</span>
          </div>
        </div>
        {totalPrice > 0 && (
          <div className="col-lg-12 p-0 d-flex mt-2 align-items-center justify-content-between">
            <div className="p-0 ">
              <div className="p-0 ">
                <small className="h-25">{`Additional Services`}</small>
              </div>
              <div className="p-0 ">
                <small className="h-25">{`(${selectedServicePrices.join(
                  " + "
                )})`}</small>
              </div>
            </div>
            <div className="p-0 ">
              <span className="w-100 d-block h-25">{`${totalPrice}/- `}</span>
            </div>
          </div>
        )}
        <div className="col-lg-12 d-flex p-0 pt-3 mt-2 border-top justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-100">Sub Total</span>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <span className="w-100 d-block h-100">{`${
              adults * adultsPrice + children * childrenPrice + totalPrice
            }/-`}</span>
          </div>
        </div>
        <div className="col-lg-12 d-flex p-0 mt-4 justify-content-between">
          <button
            onClick={() => redirectToCart()}
            className="btn btn-primary w-100"
          >
            Proceed to Book
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsWidgets;
