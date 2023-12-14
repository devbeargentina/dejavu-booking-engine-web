import React from "react";
import { Link } from "react-router-dom";

const SearchWidget = () => {
  const LocationChange = () => {};

  return (
    <div className="search-area">
      <div className="container">
        <div className="tc-row">
          <div className="BE-Search-Widget">
            <div className="BE-Search">
              <div className="BE-FlightSearch BE-Search-CommonForm">
                <div className="BE-Search-inner">
                  <div className="frmSearch">
                    <h2>Let's Book your Dejavu Tour Package</h2>
                    <div className="BE-Row">
                      <div className="BE-FromLocation BE-Col-2 BE-ColPad-R">
                        <img
                          src={require("../../../assets/images/icon-4.png")}
                          className="img-input"
                          alt=""
                        />
                        <input
                          placeholder="Enter a destination or property"
                          type="text"
                          value="Sharjah Airport"
                          onChange={LocationChange}
                        />
                        <i
                          style={{ marginRight: "6px" }}
                          className="fa fa-angle-down"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="BE-FromLocation BE-Col-2 BE-ColPad-L">
                        <img
                          src={require("../../../assets/images/icon-4.png")}
                          className="img-input"
                          alt=""
                        />
                        <input
                          placeholder="Enter a destination or property"
                          type="text"
                          value="Jeddah Airport"
                          onChange={LocationChange}
                        />
                        <i
                          style={{ marginRight: "6px" }}
                          className="fa fa-angle-down"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div name="HotelDateRange" className="DateRange BE-Row">
                      <div className="BE-Datebox BE-CheckInDate BE-Col-2">
                        <img
                          src={require("../../../assets/images/icon-3.png")}
                          className="img-input"
                          alt=""
                        />
                        <span id="SpanCheckInDate" className="span-one">
                          01 Sep 2019
                        </span>
                        <span id="SpanCheckInDay" className="span-two">
                          Sunday
                        </span>
                      </div>
                      <div className="BE-Datebox BE-CheckOutDate BE-Col-2">
                        <img
                          src={require("../../../assets/images/icon-3.png")}
                          className="img-input"
                          alt=""
                        />
                        <span id="SpanCheckOutDate" className="span-one">
                          05 Sep 2019
                        </span>
                        <span id="SpanCheckOutDay" className="span-two">
                          Thursday
                        </span>
                      </div>
                    </div>
                    <div className="BE-Guests BE-Row">
                      <div className="BE-GuestsBox">
                        <img
                          src={require("../../../assets/images/icon-2.png")}
                          className="img-input "
                          alt=""
                        />
                        <i className="fa fa-angle-down" aria-hidden="true" />
                        <span className="font-weight-normal adult d-inline-block">
                          <span className="d-inline-block mr-1  font-weight-bold text-capitalize">
                            2&nbsp;
                          </span>
                          Adults
                        </span>
                      </div>
                    </div>
                    <div className="Search-Button">
                      <Link to="/results">Search Package</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
