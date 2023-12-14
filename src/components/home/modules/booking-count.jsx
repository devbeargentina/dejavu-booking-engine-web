import React from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../../../helpers/svg-icon";
import Flight from "../../../assets/images/no-image.png";
import Cruise from "../../../assets/images/no-image.png";
import Tour from "../../../assets/images/no-image.png";
import Hotel from "../../../assets/images/no-image.png";
import Activity from "../../../assets/images/no-image.png";
import Package from "../../../assets/images/no-image.png";
import Visa from "../../../assets/images/no-image.png";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Packages = ({}) => {
  return (
    <div className="cp-home-booking">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="d-flex align-items-center justify-content-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                {({ isVisible }) => (
                  <div className="text-center">
                    <div className="d-inline-block">
                      <div className="d-inline-block">
                        <div className="d-inline-block booking-item">
                          <div className="booking-icon">
                            <img
                              src={Package}
                              alt=""
                              style={{ padding: "29px" }}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="booking-title">
                            {isVisible ? (
                              <CountUp
                                end={200}
                                enableScrollSpy={true}
                                start={0}
                              />
                            ) : null}
                            +
                          </span>
                          <span className="booking-content">
                            Holiday Packages
                          </span>
                        </div>
                      </div>
                      <div className="d-inline-block pb-2 pt-2">
                        <div className="d-inline-block booking-item">
                          <div className="booking-icon">
                            <img
                              src={Hotel}
                              alt=""
                              style={{ padding: "19px" }}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="booking-title">
                            {isVisible ? (
                              <CountUp
                                end={750}
                                enableScrollSpy={true}
                                start={0}
                              />
                            ) : null}
                            +
                          </span>
                          <span className="booking-content">Hotels</span>
                        </div>
                      </div>
                      <div className="d-inline-block pb-2 pt-2">
                        <div className="d-inline-block booking-item">
                          <div className="booking-icon">
                            <img
                              src={Activity}
                              alt=""
                              style={{ padding: "28px" }}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="booking-title">
                            {isVisible ? (
                              <CountUp
                                end={150}
                                enableScrollSpy={true}
                                start={0}
                              />
                            ) : null}
                          </span>
                          <span className="booking-content">Activities</span>
                        </div>
                      </div>
                      <div className="d-inline-block pb-2 pt-2">
                        <div className="d-inline-block booking-item">
                          <div className="booking-icon">
                            <img
                              src={Visa}
                              alt=""
                              style={{ padding: "31px" }}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="booking-title">
                            {isVisible ? (
                              <CountUp
                                end={180}
                                enableScrollSpy={true}
                                start={0}
                              />
                            ) : null}
                          </span>
                          <span className="booking-content">Visas</span>
                        </div>
                      </div>
                      <div className="d-inline-block pb-2 pt-2">
                        <div className="d-inline-block booking-item">
                          <div className="booking-icon">
                            <img
                              src={Cruise}
                              alt=""
                              style={{ padding: "17px" }}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="booking-title">
                            {isVisible ? (
                              <CountUp
                                end={100}
                                enableScrollSpy={true}
                                start={0}
                              />
                            ) : null}
                            +
                          </span>
                          <span className="booking-content">
                            Cruises Booked
                          </span>
                        </div>
                      </div>
                      <div className="d-inline-block pb-2 pt-2">
                        <div className="d-inline-block booking-item">
                          <div className="booking-icon">
                            <img
                              src={Flight}
                              alt=""
                              style={{ padding: "23px" }}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="booking-title">
                            {isVisible ? (
                              <CountUp
                                end={600}
                                enableScrollSpy={true}
                                start={0}
                              />
                            ) : null}
                            +
                          </span>
                          <span className="booking-content">Flight Booked</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
