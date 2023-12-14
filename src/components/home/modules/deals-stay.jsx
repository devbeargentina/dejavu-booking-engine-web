import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import SVGIcon from "../../../helpers/svg-icon";
import { Context } from "../../../context/context";
import { decode } from "html-entities";

const DealsStay = (props) => {
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
        spaceBetween: 20,
      },
    },
  };

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, "");
  };
  return (
    <React.Fragment>
      <div className="cp-home-deals-stay">
        <div className="container">
          <div className="row align-items-center justify-content-center col">
            <h3 className="deals-title mb-1 text-align-center">
              deja-vu Stays
            </h3>
            <div className="pl-5 pr-5 ">
              <p className="mb-5 text-center pl-5 pr-5 ">
                Our specially identified local Accommodation with Delicious Food
                to fullfill your travel desire !! if you want to drive by your
                own or you like to explore places in Local Transportation, we
                will help you to find out beautiful and unique accomodations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12"></div>
            <div className="col-lg-12">
              <Swiper {...params}>
                {Contents &&
                  Contents.items.map((x, key) => (
                    <div key={key} className="">
                      <div className="bg-white populer-deals-stay shadow-sm mb-2">
                        <div>
                          {x?.galleryImages?.filter(
                            (x) => x.IsDefaultImage && x.fileExtension !== "pdf"
                          ).length === 0 &&
                            x?.galleryImages
                              ?.filter(
                                (x) =>
                                  x.isDefaultImage && x.fileExtension !== "pdf"
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
                        <div className="populer-deals-content text-secondary">
                          <h5>
                            <Link
                              to={"/details/" + x?.id}
                              className="text-dark"
                            >
                              {x?.packageTitle.length > 30
                                ? x?.packageTitle
                                    .split("-")[0]
                                    .substring(0, 30) + "..."
                                : x?.packageTitle}
                            </Link>
                          </h5>
                          <div className="days font-weight-bold">
                            {x?.duration.length > 1 && x?.duration}
                          </div>
                          <div className="price w-100 text-secondary li text-truncate-line-1 ">
                            {removeHtmlTags(decode(x?.overview))}
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
                            {x?.discountPrice > 0 && (
                              <span
                                style={{
                                  textDecoration:
                                    x?.price > 0 ? "line-through" : "none",
                                  marginRight: ".6rem",
                                }}
                              >
                                {x?.discountPrice + " "}
                              </span>
                            )}
                            {x?.price > 0 && <span>{x?.price + ""}</span>}
                            /-* per person
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="p-2 mb-2">
                            {/* <SVGIcon
                              name="rupee"
                              className="ml-1 mr-1"
                              width="12"
                              height="12"
                              type="fill"
                            ></SVGIcon>
                            Flex item 1 */}
                          </div>
                          <div className="p-2 mb-2">
                            <SVGIcon
                              name="rupee"
                              className="ml-1 mr-1"
                              width="12"
                              height="12"
                              type="fill"
                            ></SVGIcon>
                            {x?.totalAmount + " /-"}
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
                            className="btn-booknow"
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
              {Contents.length > 4 && (
                <Link
                  to={"/list/deals"}
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

export default DealsStay;
