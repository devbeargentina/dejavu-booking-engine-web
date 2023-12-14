import React, { Component, useEffect, useRef, useState } from "react";
import TimerIcon from "../assets/images/web/clock-icon.png";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { decode } from "html-entities";
import img1 from "../assets/images/web/bg-packages.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchPackageByID } from "../redux/packageSliceNew";

const Details = (props) => {
  const scrollRef = useRef();
  const [activeTab, setActiveTab] = useState("overview");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    items: packages,
    loading,
    data,
  } = useSelector((state) => state.package.objArrayPackages);

  const packageData = packages.find((p) => p.id === id);

  useEffect(() => {
    if (!packageData && id) {
      dispatch(FetchPackageByID(id));
    }
  }, [dispatch, id, packageData]);

  const sccs = `
    .square {
      display: flex;
      flex-wrap: wrap;
      width: 100px;
    height: 150px;
}

.image1 {
width: 70px;
height: 100px;
}

.image2 {
width: 30px;
height: 50px;
}

.image3 {
width: 30px;
height: 50px;
margin-left: 40px;
margin-top: 50px;
}`;
  const x = "overview";
  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="details-page">
            {/* <DetailsHeader {...{ pageName: details.name }} /> */}
            <style>{sccs}</style>
            <div className="container">
              <div className="row">
                <div className="col-lg-9 mt-5 mb-2">
                  <div className="col-lg-12 p-0">
                    <div className="col-lg-12 d-flex p-0 mb-4">
                      <div className="col-lg-10 p-0">
                        <div className="col-lg-12 p-0">
                          <h3 className="text-primary font-weight-bold mb-0">
                            SOUTH AMERICA
                          </h3>
                        </div>
                        <div className="col-lg-12 p-0 d-flex align-item-center">
                          <small className="text-secondary">
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
                    <div className="d-flex col-lg-12 p-0">
                      <div className="col-lg-8 p-0 pb-1 ">
                        <img src={img1} class="w-100 rounded-left" />
                      </div>

                      <div className="col-lg-4 p-0">
                        <div className="col-lg-12 pl-1 pb-1 pr-0 pt-0">
                          <img src={img1} class="w-100" />
                        </div>

                        <div className="col-lg-12 pl-1  pb-1 pr-0 pt-0">
                          <img src={img1} class="w-100" />
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
                        You will Experience the Great Rann of Kutch and
                        Rannutsav along with Dholavira archaeological site and
                        some less explored hidden gems of Kutch. Trip will also
                        include tourist attractions of Bhuj city and will end on
                        beautiful Mandvi beach.You will Experience the Great
                        Rann of Kutch and Rannutsav and will end on beautiful
                        Mandvi beach.You beautiful Mandvi beach.You will
                        Experience beautiful Mandvi beach.You will Experience{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 " style={{ background: "#F0F0F0" }}>
              <div className="container ">
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-start align-items-center">
                    <div ref={scrollRef} />
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <button
                          class={
                            "nav-link rounded-0 text-capitalize pl-0 pr-0 " +
                            (activeTab === x ? " active" : "")
                          }
                          onClick={() => this.handleTabs(x)}
                        >
                          {"Overview"}
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          class={
                            "nav-link rounded-0 text-capitalize pl-0 pr-0 " +
                            (activeTab === x ? " active" : "")
                          }
                          onClick={() => this.handleTabs(x)}
                        >
                          {"Itinerary"}
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          class={
                            "nav-link rounded-0 text-capitalize pl-0 pr-0 " +
                            (activeTab === x ? " active" : "")
                          }
                          onClick={() => this.handleTabs(x)}
                        >
                          {"Price Guideline"}
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          class={
                            "nav-link rounded-0 text-capitalize pl-0 pr-0 " +
                            (activeTab === x ? " active" : "")
                          }
                          onClick={() => this.handleTabs(x)}
                        >
                          {"Photo Gallery"}
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          class={
                            "nav-link rounded-0 text-capitalize pl-0 pr-0 " +
                            (activeTab === x ? " active" : "")
                          }
                          onClick={() => this.handleTabs(x)}
                        >
                          {"Photo Gallery"}
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          class={
                            "nav-link rounded-0 text-capitalize pl-0 pr-0 " +
                            (activeTab === x ? " active" : "")
                          }
                          onClick={() => this.handleTabs(x)}
                        >
                          {"Photo Gallery"}
                          {/* {x === "photoGallery"
                                  ? "Photo Gallery"
                                  : x === "priceGuideLine"
                                  ? "Price Guideline"
                                  : x === "termsConditions"
                                  ? "Terms Conditions"
                                  : x} */}
                        </button>
                      </li>
                      {/* )
                      )} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row">
                <div className="col-lg-12 mb-5 mt-4">
                  {/* {result?.tabs &&
                  Object.keys(result?.tabs).map(
                    (x) =>
                      activeTab === x && ( */}
                  <div className={"cms-details-" + x}>
                    {x === "overview" && packageData?.overview && (
                      <p>{ReactHtmlParser(decode(packageData?.overview))}</p>
                    )}
                    {x === "overview" && data?.overview && (
                      <p>{ReactHtmlParser(decode(packageData?.overview))}</p>
                    )}
                    {x === "termsConditions" ||
                      (true && packageData?.overview && (
                        <p>{ReactHtmlParser(decode(packageData?.overview))}</p>
                      ))}

                    {x === "inclusion" ||
                      x === "exclusion" ||
                      (true && packageData?.overview && (
                        <p>{ReactHtmlParser(decode(packageData?.overview))}</p>
                      ))}

                    {x === "photoGallery" && packageData?.overview && (
                      <p>{ReactHtmlParser(decode(packageData?.overview))}</p>
                    )}
                    <div id="accordion">
                      <div class="card">
                        <div class="card-header" id="day1Heading">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link"
                              data-toggle="collapse"
                              data-target="#day1"
                              aria-expanded="true"
                              aria-controls="day1"
                            >
                              Day 1: Arrival and Sightseeing
                            </button>
                          </h5>
                        </div>

                        <div
                          id="day1"
                          class="collapse show"
                          aria-labelledby="day1Heading"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <p>
                              On Day 1, you will arrive at the airport and be
                              greeted by our representative. After checking in
                              to your hotel, you will begin your sightseeing
                              tour of the city. Some of the places you will
                              visit include:
                            </p>
                            <ul>
                              <li>The historic Old Town</li>
                              <li>The majestic City Palace</li>
                              <li>The beautiful Jantar Mantar Observatory</li>
                            </ul>
                            <p>
                              After a full day of sightseeing, you will return
                              to your hotel for dinner and overnight stay.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header" id="day2Heading">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#day2"
                              aria-expanded="false"
                              aria-controls="day2"
                            >
                              Day 2: Exploring the Countryside
                            </button>
                          </h5>
                        </div>
                        <div
                          id="day2"
                          class="collapse"
                          aria-labelledby="day2Heading"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <p>
                              On Day 2, you will venture out of the city to
                              explore the countryside. Some of the places you
                              will visit include:
                            </p>
                            <ul>
                              <li>The stunning Amber Fort</li>
                              <li>The serene Jal Mahal Palace</li>
                              <li>The tranquil Sisodia Rani Garden</li>
                            </ul>
                            <p>
                              After a full day of exploration, you will return
                              to your hotel for dinner and overnight stay.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header" id="day3Heading">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#day3"
                              aria-expanded="false"
                              aria-controls="day3"
                            >
                              Day 3: Departure
                            </button>
                          </h5>
                        </div>
                        <div
                          id="day3"
                          class="collapse"
                          aria-labelledby="day3Heading"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <p>
                              On Day 3, you will check out of your hotel and be
                              transported to the airport for your departure
                              flight.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <h3>Includes</h3>
                        <ul>
                          <li>
                            <i class="fas fa-check text-success"></i>{" "}
                            Accommodation
                          </li>
                          <li>
                            <i class="fas fa-check text-success"></i>{" "}
                            Transportation
                          </li>
                          <li>
                            <i class="fas fa-check text-success"></i> Meals
                          </li>
                          <li>
                            <i class="fas fa-check text-success"></i> Tour guide
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <h3>Excludes</h3>
                        <ul>
                          <li>
                            <i class="fas fa-check text-success"></i> Flights
                          </li>
                          <li>
                            <i class="fas fa-check text-success"></i> Personal
                            expenses
                          </li>
                          <li>
                            <i class="fas fa-check text-success"></i> Travel
                            insurance
                          </li>
                          <li>
                            <i class="fas fa-check text-success"></i> Optional
                            activities
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="accordion" id="faqAccordion">
                      <div class="card">
                        <div class="card-header" id="headingOne">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Question 1: What is Lorem Ipsum?
                            </button>
                          </h5>
                        </div>

                        <div
                          id="collapseOne"
                          class="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#faqAccordion"
                        >
                          <div class="card-body">
                            Answer 1: Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed nec ipsum vel odio consequat
                            faucibus. In hac habitasse platea dictumst. Ut
                            faucibus sapien sed justo dignissim, ut malesuada
                            sapien tristique.
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header" id="headingTwo">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Question 2: Where does it come from?
                            </button>
                          </h5>
                        </div>

                        <div
                          id="collapseTwo"
                          class="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#faqAccordion"
                        >
                          <div class="card-body">
                            Answer 2: Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed nec ipsum vel odio consequat
                            faucibus. In hac habitasse platea dictumst. Ut
                            faucibus sapien sed justo dignissim, ut malesuada
                            sapien tristique.
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header" id="headingThree">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Question 3: Why do we use it?
                            </button>
                          </h5>
                        </div>

                        <div
                          id="collapseThree"
                          class="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#faqAccordion"
                        >
                          <div class="card-body">
                            Answer 3: Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed nec ipsum vel odio consequat
                            faucibus. In hac habitasse platea dictumst. Ut
                            faucibus sapien sed justo dignissim, ut malesuada
                            sapien tristique.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* )
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Details;
