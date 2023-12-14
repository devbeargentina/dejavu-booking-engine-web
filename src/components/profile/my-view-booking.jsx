import moment from "moment";
import React, { Component } from "react";
import bookingImg from "../../assets/images/web/somnath.jpg";
import FormatDuration from "../booking/common/format-duration";

import MyCoravellers from "./my-co-travellers";
const MyViewBooking = (props) => {
  const handleEdit = () => {};
  const dateStartEnd = "04/04/2023|08/04/2023";
  const destination = "Ahmedabad";
  return (
    <React.Fragment>
      <div className="col-lg-12 mb-4 p-4 border-radius shadow-sm bg-white">
        <div className="col-lg-12 p-0 d-flex align-items-center justify-content-center">
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
                    <span className="w-100 d-block h-25">{`packageType`}</span>
                  </div>
                </div>
                <div class="col-lg-3 d-flex align-items-center border-right">
                  <div className="">
                    <span className="w-100 d-block h-25 text-secondary">
                      Type
                    </span>
                    <span className="w-100 d-block h-25">{`packageType`}</span>
                  </div>
                </div>
                <div class="col-lg-3 d-flex align-items-center border-right">
                  <div className="">
                    <span className="w-100 d-block h-25 text-secondary">
                      Type
                    </span>
                    <span className="w-100 d-block h-25">{`packageType`}</span>
                  </div>
                </div>
                <div class="col-lg-3 d-flex align-items-center">
                  <div className="">
                    <span className="w-100 d-block h-25 text-secondary">
                      Type
                    </span>
                    <span className="w-100 d-block h-25">{`packageType`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-lg-3 col-lg-9 mt-3">
          <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-between">
            <div className="p-0 ">
              <small className="w-100 d-block text-secondary">
                Tour starts
              </small>
              <span className="w-100 d-block h-25">{`${moment(
                new Date(dateStartEnd.split("|")[0])
              ).format("DD/MM/YYYY")}`}</span>
              <small className="w-100 d-block h-25 text-secondary">
                {`Ex.${destination}`}
              </small>
            </div>
            <div className="p-0 ">
              <small className="w-100 d-block h-25 text-secondary">
                <hr class="w-100 mb-2 map-line" />
                <FormatDuration numDays={props.duration || 5} />
              </small>
            </div>
            <div className="p-0 te">
              <small className="w-100 d-block h-25 text-secondary">
                Tour Ends
              </small>
              <span className="w-100 d-block h-25">{`${moment(
                new Date(dateStartEnd.split("|")[1])
              ).format("DD/MM/YYYY")}`}</span>
              <small className="w-100 d-block h-25 text-secondary">
                {`Ex.${destination}`}
              </small>
            </div>
          </div>

          <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-between">
            <div className="p-0 ">
              <span className="mr-2 h-25 text-secondary">Trip Type</span>
              <small className="h-25">{props.packageType || `dggfdgdgd`}</small>
            </div>
          </div>
          <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-between">
            <div className="p-0 ">
              <span className="mr-2 h-25 text-secondary">Trip Type</span>
              <br />
              <small className="h-25 d-block">
                {props.packageType || `dggfdgdgd`}
              </small>
              <small className="h-25 d-block">
                {props.packageType || `dggfdgdgd`}
              </small>
              <small className="h-25 d-block">
                {props.packageType || `dggfdgdgd`}
              </small>
              <small className="h-25 d-block">
                {props.packageType || `dggfdgdgd`}
              </small>
              <small className="h-25 d-block">
                {props.packageType || `dggfdgdgd`}
              </small>
            </div>
          </div>
          <div className="col-lg-12 p-0 d-flex mt-3 align-items-center justify-content-end">
            <small
              className="text-primary cursor-pointer active mr-4"
              onClick={() => handleEdit()}
              role="button"
            >
              Download Invoice
            </small>
            <small
              className="text-primary cursor-pointer active"
              onClick={() => handleEdit()}
              role="button"
            >
              I want to cancel the Trip
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyViewBooking;
