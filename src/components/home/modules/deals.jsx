import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import CompanyProf from "../../../assets/images/web/icons (3).png";
import ItemDuration from "../../../assets/images/web/icons-107.png";
import flight from "../../../assets/images/no-image.png";
import hotel from "../../../assets/images/no-image.png";
import holiday from "../../../assets/images/no-image.png";
import life from "../../../assets/images/no-image.png";
import transfers from "../../../assets/images/no-image.png";
import visas from "../../../assets/images/no-image.png";
import cruises from "../../../assets/images/no-image.png";
import attractions from "../../../assets/images/no-image.png";
import villa from "../../../assets/images/no-image.png";
import SVGIcon from "../../../helpers/svg-icon";
import { Context } from "../../../context/context";
import { decode } from "html-entities";
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { FetchPackageUpcoming } from "../../../redux/packageSliceNew";

const Deals = (props) => {
  const { State } = useContext(Context);
  const { Contents } = State;
  const params = {
    navigation: {
      nextEl: ".swiper-button-next-deal",
      prevEl: ".swiper-button-prev-deal",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  const goNext = () => {
    document.querySelector(".swiper-button-next-deal").click();
  };

  const goPrev = () => {
    document.querySelector(".swiper-button-prev-deal").click();
  };

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, "");
  };

  const dispatch = useDispatch();

  const { loading, upcomingPackages } = useSelector((state) => state.package);

  useEffect(() => {
    if (!upcomingPackages || upcomingPackages.length === 0) {
      dispatch(FetchPackageUpcoming());
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      {false && (
        <div className="cp-home-our-service d-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pb-5 pt-5">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <h2 className="our-services-title">OUR SERVICES</h2>
                    <p className="our-services-p">
                      Become an Agent & Get Access to Our Wide Array at Travel
                      Services
                    </p>
                    <div className="d-flex justify-content-center our-services-all-items">
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={flight} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Flights</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={hotel} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Hotels</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={holiday} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Holiday Packages</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={villa} alt="" className="w-50" />
                        </div>
                        <div className="our-services-name">
                          <span>Villas</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={attractions} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Attractions</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={transfers} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Transfers</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={cruises} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Cruises</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={visas} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Visas</span>
                        </div>
                      </div>
                      <div className="our-services-item">
                        <div className="our-services-icon">
                          <img src={life} alt="" />
                        </div>
                        <div className="our-services-name">
                          <span>Insurance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="cp-home-deals bg-white">
        <div className="container">
          <h2 className="deals-title">Upcoming Trips</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-button-prev-custom" onClick={goPrev}></div>
              <div className="swiper-button-next-custom" onClick={goNext}></div>

              <Swiper {...params}>
                {upcomingPackages &&
                  upcomingPackages.map((x, key) => (
                    <div key={key} className="">
                      <div className="bg-white populer-deals shadow-sm mb-2">
                        <div>
                          {x?.packageMedia?.filter(
                            (xx) =>
                              xx.IsDefaultImage && xx.fileExtension !== "pdf"
                          ).length === 0 &&
                            x?.packageMedia
                              ?.filter(
                                (xx) =>
                                  xx.isDefaultImage &&
                                  xx.fileExtension !== "pdf"
                              )
                              .map((itemm, index) => {
                                return (
                                  <img
                                    key={index}
                                    src={itemm.fileURL || itemm.fileData}
                                    alt="sfd"
                                    className="img-fluid"
                                  />
                                );
                              })}
                        </div>
                        <div className="populer-deals-content text-truncate">
                          <h5>
                            <Link
                              to={"/details/" + x?.id}
                              className=" text-primary"
                            >
                              {x?.packageTitle}
                            </Link>
                          </h5>
                          <div className="days font-weight-bold"></div>
                          <div className="price w-100 text-secondary li text-truncate-line-3 ">
                            <p>
                              <img
                                ket={key + "overview"}
                                src={CompanyProf}
                                alt="fdg"
                                className=" pr-2"
                              />
                              {removeHtmlTags(decode(x?.overview))}
                            </p>
                          </div>
                          <div
                            className="price w-100"
                            style={{ display: "none" }}
                          >
                            Starting at
                            <SVGIcon
                              name="viewewei"
                              className="ml-1 mr-1"
                              width="12"
                              height="12"
                              type="fill"
                            ></SVGIcon>
                            {x?.destinations[0].adultPrice > 0 && (
                              <span
                                style={{
                                  textDecoration:
                                    x?.destinations[0].adultPrice > 0
                                      ? "line-through"
                                      : "none",
                                  marginRight: ".6rem",
                                }}
                              >
                                {x?.destinations[0].adultPrice + " "}
                              </span>
                            )}
                            {x?.destinations[0].adultPrice > 0 && (
                              <span>{x?.destinations[0].adultPrice + ""}</span>
                            )}
                            /-* per person
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="p-2 mb-2 text-secondary">
                            <img
                              ket={key + "duration"}
                              src={ItemDuration}
                              alt="fdg"
                              className="mr-2"
                            />
                            {x?.destinations[0].bookBefore.days > 1 &&
                              x?.destinations[0].bookBefore.days}
                          </div>
                          <div className="p-2 mb-2 text-primary ">
                            <SVGIcon
                              name="rupee"
                              className="ml-1 mr-1"
                              width="12"
                              height="12"
                              type="fill"
                            ></SVGIcon>
                            {x?.destinations[0].adultPrice + " /-"}
                          </div>
                        </div>
                        <div
                          className="d-none"
                          style={{
                            position: "absolute",
                            bottom: "12px",
                            left: "0",
                            right: "0",
                            height: "26px",
                          }}
                        >
                          <Link
                            to={"/details/" + x?.id}
                            className="btn-booknow d-none"
                          >
                            BOOK NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="d-flex align-items-center justify-content-center mt-2 h-100 ">
              {upcomingPackages.length > 4 && (
                <Link
                  to={"/list/upcomingPackages"}
                  className="btn-showmore"
                  style={{ display: "none" }}
                >
                  SHOW MORE
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Deals;
