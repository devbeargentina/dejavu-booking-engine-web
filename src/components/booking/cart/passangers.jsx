import React, { Component, useState } from "react";
import Passanger from "./passanger";
import PassangerView from "../details/passanger-view";
import {
  addPassenger,
  addToCart,
  removeFromCart,
  removePassenger,
  selectCart,
  selectPassengers,
} from "../../../redux/cartSice";
import { useSelector } from "react-redux";

const Passangers = (props) => {
  const user = props.user;
  const passengerData = useSelector(selectPassengers);
  const [isViewMode, setIsViewMode] = useState(false);
  let listeners = [];
  const registerListener = (lstr) => {
    listeners.push(lstr);
  };

  const setPassangers = (index, passangers) => {
    setIsViewMode(true);

    props.handleTravellers(index, passangers);
  };

  const { isVisaFeeLoading, isVisaFee } = props;
  let item = 0;
  return (
    <React.Fragment>
      {isViewMode ? (
        <>
          <PassangerView
            handleEdit={() => setIsViewMode(!isViewMode)}
            {...passengerData}
          />
        </>
      ) : (
        <div className="col-lg-12 p-3 pl-4 pb-5 pr-4 border-radius shadow bg-white">
          <div className="col-lg-12 pb-3 pl-0 pr-0">
            <div className="col-lg-12 pt-3 pl-0 pr-0">
              <div className="p-0 ">
                <span className="w-100 d-block h-100 font-weight-bold">{`Add Personal Detail`}</span>
              </div>
            </div>
            <div
              className="booking-bg p-0 border-0 pull-left"
              style={{ float: "none", display: "flex" }}
            >
              {/* <h2>Traveler Details</h2> */}

              {/* {travellersCount.map(item => ( */}
              <Passanger
                passengerData={passengerData}
                key={item}
                user={props.user}
                travellersCount={item + 1}
                listenerHandler={registerListener.bind(this)}
                handlePassangers={setPassangers} //props.handleTravellers}
              />
              {/* ))} */}
            </div>
            {/* <div className="booking-bg booking-bg-contact">
          <h2>Contact</h2>
          <ContactInfo listenerHandler={registerListener.bind(this)} />
        </div> */}

            {isVisaFee ? (
              <button
                className="btn-continue"
                onClick={() => props.handleRedirect()}
              >
                Continue Booking
              </button>
            ) : (
              <button
                className="btn-continue"
                onClick={() => {
                  listeners.forEach((x) => {
                    x.validate();
                  });
                }}
              >
                SAVE
                {isVisaFeeLoading ? (
                  <div className="sk-wave">
                    <div className="sk-rect sk-rect1" />
                    <div className="sk-rect sk-rect2" />
                    <div className="sk-rect sk-rect3" />
                    <div className="sk-rect sk-rect4" />
                    <div className="sk-rect sk-rect5" />
                  </div>
                ) : null}
              </button>
            )}

            {/* <VisaNotes /> */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Passangers;
