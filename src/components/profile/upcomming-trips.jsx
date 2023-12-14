import React, { Component, useState } from "react";
import moment from "moment";
import * as DropdownList from "../../helpers/dropdown-list";
import * as Global from "../../helpers/global";
import CMSSPageBanner from "../home/modules/page-banner";
import NavigationArrowImg from "../../assets/images/web/right-menu-arrow.png";
import LocationIcon from "../../assets/images/web/location-icon.png";
import TimerIcon from "../../assets/images/web/clock-icon.png";
import HtmlParser from "../../helpers/html-parser";
import SVGIcon from "../../helpers/svg-icon";
import { decode } from "html-entities";

import Form from "../booking/common/form";
const UpcommingTrips = () => {
  const [activeSection, setActiveSection] = useState("myprofile");
  const handleTabs = (activeSec) => {
    setActiveSection(activeSec);
  };
  return (
    <React.Fragment>
      <CMSSPageBanner />
      <div className="container">
        <div className="row" style={{ marginTop: "-40PX" }}>
          {/* <div className="col-lg-12 mb-5">
              <small>HOME</small>
              <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
              <small>STATE</small>
              <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
              <small>GUJARAT</small>
              <img src={NavigationArrowImg} alt="" className="ml-3 mr-3" />
              <small>EXPERIENCE KUTCH</small>
            </div> */}
          <div className="col-lg-3 mt-2 mb-2">
            <div className="col-lg-12 p-3 pl-4 pr-4 border-radius shadow bg-white">
              <div
                className="col-lg-12 p-0 d-flex align-items-center justify-content-center"
                style={{ marginTop: "-45px" }}
              >
                <span className="p-1 pl-3 pr-3 rounded-circle h1 bg-warning">
                  C
                </span>
              </div>
              <div className="col-lg-12 p-0 mt-4">
                <h4 className="font-weight-bold">Chauhan Praful</h4>
              </div>
              <div className="col-lg-12 p-0">
                <span>cprafulm@gmail.com</span>
              </div>
              <div className="col-lg-12 p-0">
                <span>+91 972 281 3544</span>
              </div>
              <div className="col-lg-12 p-0 d-flex justify-content-between">
                <div className="p-0 ">
                  <span className="w-100 d-block h-25">Adults</span>
                  <span className="w-100 d-block h-25">Adults</span>
                </div>
                <div className="d-flex p-0 list-unstyled">
                  <li className="page-item">
                    <button className="page-link font-weight-bold">-</button>
                  </li>
                  <li className="page-item">
                    <span className="page-link bg-light">5</span>
                  </li>
                  <li className="page-item">
                    <button className="page-link font-weight-bold">+</button>
                  </li>
                </div>
              </div>

              <div className="col-lg-12 p-0 d-flex justify-content-between">
                <div className="p-0 ">
                  <span className="w-100 d-block h-25">Adults</span>
                  <span className="w-100 d-block h-25">Adults</span>
                </div>
                <div className="d-flex p-0 list-unstyled">
                  <li className="page-item">
                    <button className="page-link font-weight-bold">-</button>
                  </li>
                  <li className="page-item">
                    <span className="page-link bg-light">2</span>
                  </li>
                  <li className="page-item">
                    <button className="page-link font-weight-bold">+</button>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 mt-2 mb-2">
            <div className="col-lg-12 p-3 pl-4 pr-4 border-radius shadow bg-white">
              <div className="col-lg-12 d-flex p-0 mb-4">
                <div className="col-lg-10 p-0">
                  <div className="col-lg-12 p-0">
                    <h3 className="text-primary font-weight-bold mb-0">
                      SOUTH AMERICA
                    </h3>
                  </div>
                  <div className="col-lg-12 p-0 d-flex align-item-center">
                    <small className="text-secondary">
                      <img
                        src={LocationIcon}
                        alt=""
                        style={{ height: "17px" }}
                      />
                      Dholavira | Rann Utsav | Bhuj | Mandavi
                    </small>
                  </div>
                </div>
                <div className="col-lg-2 p-0 ">pdf</div>
              </div>
              <div className="col-lg-12 p-0 pb-2 mb-2 border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <div className="d-flex w-50 pull-left align-items-center mr-1">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="">
                      <span className="w-100 d-block h-25">Adults</span>
                      <span className="w-100 d-block h-25">Adults</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div className="d-flex w-50 pull-left align-items-center mr-1">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="">
                      <span className="w-100 d-block h-25">Adults</span>
                      <span className="w-100 d-block h-25">Adults</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div className="d-flex w-50 pull-left align-items-center mr-1">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="">
                      <span className="w-100 d-block h-25">Adults</span>
                      <span className="w-100 d-block h-25">Adults</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p-0 mb-2">
                <div className="d-flex justify-content-between">
                  <div
                    className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
                    style={{ width: "5rem" }}
                  >
                    <div className="d-flex w-100 justify-content-center">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
                      <span className="w-100 d-block h-25">
                        Adults sfsdf asa d
                      </span>
                    </div>
                  </div>
                  <div
                    className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
                    style={{ width: "5rem" }}
                  >
                    <div className="d-flex w-100 justify-content-center">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
                      <span className="w-100 d-block h-25">
                        Adults sfsdf asa d
                      </span>
                    </div>
                  </div>
                  <div
                    className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
                    style={{ width: "5rem" }}
                  >
                    <div className="d-flex w-100 justify-content-center">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
                      <span className="w-100 d-block h-25">
                        Adults sfsdf asa d
                      </span>
                    </div>
                  </div>
                  <div
                    className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
                    style={{ width: "5rem" }}
                  >
                    <div className="d-flex w-100 justify-content-center">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
                      <span className="w-100 d-block h-25">
                        Adults sfsdf asa d
                      </span>
                    </div>
                  </div>
                  <div
                    className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
                    style={{ width: "5rem" }}
                  >
                    <div className="d-flex w-100 justify-content-center">
                      <img src={TimerIcon} alt="" />
                    </div>
                    <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
                      <span className="w-100 d-block h-25">
                        Adults sfsdf asa d
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p-0 mb-2">
                <h3>About Experience Kutch</h3>
                <p className="shadow-risen shadow-inset">
                  You will Experience the Great Rann of Kutch and Rannutsav
                  along with Dholavira archaeological site and some less
                  explored hidden gems of Kutch. Trip will also include tourist
                  attractions of Bhuj city and will end on beautiful Mandvi
                  beach.You will Experience the Great Rann of Kutch and
                  Rannutsav and will end on beautiful Mandvi beach.You beautiful
                  Mandvi beach.You will Experience beautiful Mandvi beach.You
                  will Experience{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpcommingTrips;
