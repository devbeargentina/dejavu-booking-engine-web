import React, { Component, useState } from "react";
import bookingImg from "../../assets/images/web/somnath.jpg";

import MyCoravellers from "./my-co-travellers";
import MyViewBooking from "./my-view-booking";
const MyBookings = () => {
  const [activeBookingType, setActiveBookingType] = useState("upcoming");
  const handleBookingType = (type) => {
    setActiveBookingType(type);
  };
  return (
    <React.Fragment>
      <div className="offset-lg-1 col-lg-10 mb-3 p-1 border-radius shadow-sm bg-white d-flex align-items-center justify-content-center">
        <div className="col-lg-6 mt-2 mb-2 text-center border-right">
          <h6
            className={`text-primary cursor-pointer m-0 ${
              activeBookingType === "upcoming" ? " active" : ""
            }`}
            onClick={() => handleBookingType("upcoming")}
            role="button"
          >
            Upcoming Trips
          </h6>
        </div>
        <div className="col-lg-6 mt-2 mb-2 text-center border-left">
          <h6
            className={`text-primary cursor-pointer m-0 ${
              activeBookingType === "completed" ? " active" : ""
            }`}
            onClick={() => handleBookingType("completed")}
            role="button"
          >
            Completed Trips
          </h6>
        </div>
      </div>
      {activeBookingType === "upcoming" ? (
        <>
          <div className="col-lg-12 mb-4 p-1 border-radius shadow-sm bg-white d-flex align-items-center justify-content-center">
            <div className="col-lg-3 p-0">
              <img
                src={bookingImg}
                className="h-100 w-100 border-radius"
                alt="BookingImg"
              />
            </div>
            <div className="col-lg-9">
              <div className="col-lg-12 h-50 p-0">
                <h4 className="mb-4 text-capitalize">dsadasdasdsa</h4>
              </div>
              <div className="col-lg-12 h-50 p-0">
                <div className="row">
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-4 p-1 border-radius shadow-sm bg-white d-flex align-items-center justify-content-center">
            <div className="col-lg-3 p-0">
              <img
                src={bookingImg}
                className="h-100 w-100 border-radius"
                alt="BookingImg"
              />
            </div>
            <div className="col-lg-9">
              <div className="col-lg-12 h-50 p-0">
                <h4 className="mb-4 text-capitalize">dsadasdasdsa</h4>
              </div>
              <div className="col-lg-12 h-50 p-0">
                <div className="row">
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-lg-12 mb-4 p-1 border-radius shadow-sm bg-white d-flex align-items-center justify-content-center">
            <div className="col-lg-3 p-0">
              <img
                src={bookingImg}
                className="h-100 w-100 border-radius"
                alt="BookingImg"
              />
            </div>
            <div className="col-lg-9">
              <div className="col-lg-12 h-50 p-0">
                <h4 className="mb-4 text-capitalize">dsadasdasdsa</h4>
              </div>
              <div className="col-lg-12 h-50 p-0">
                <div className="row">
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-4 p-1 border-radius shadow-sm bg-white d-flex align-items-center justify-content-center">
            <div className="col-lg-3 p-0">
              <img
                src={bookingImg}
                className="h-100 w-100 border-radius"
                alt="BookingImg"
              />
            </div>
            <div className="col-lg-9">
              <div className="col-lg-12 h-50 p-0">
                <h4 className="mb-4 text-capitalize">dsadasdasdsa</h4>
              </div>
              <div className="col-lg-12 h-50 p-0">
                <div className="row">
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center border-right">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center">
                    <div className="">
                      <span className="w-100 d-block h-25 text-secondary">
                        Type
                      </span>
                      <span className="w-100 d-block h-25 font-weight-bold">
                        {`packageType`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <MyViewBooking />
    </React.Fragment>
  );
};

export default MyBookings;
