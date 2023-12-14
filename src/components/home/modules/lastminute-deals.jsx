import React from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import SVGIcon from "../../../helpers/svg-icon";
import { useContext } from "react";
import { Context } from "../../../screens/web/context";

const LastMinuteDeals = ({ lastMinuteDeals }) => {
  const { State, Props } = useContext(Context);
  const { Settings, Contents } = State;
  let imageURL =
    process.env.REACT_APP_CMSIMAGEHANDLER_ENDPOINT +
    Settings?.portalID +
    "/SpecialsPromotions/images/";

  const params = {
    navigation: {
      nextEl: ".swiper-button-next-lm-deal1",
      prevEl: ".swiper-button-prev-lm-deal1",
    },
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
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
    document.querySelector(".swiper-button-next-lm-deal1").click();
  };

  const goPrev = () => {
    document.querySelector(".swiper-button-prev-lm-deal1").click();
  };
  return (
    <React.Fragment>
      <div className="cp-home-lastminute-deals">
        <div className="container">
          <p className="lastminute-deals-sub-title">EASY</p>
          <h2 className="lastminute-deals-title">VISA DESTINATIONS</h2>
          <div className="row">
            {" "}
            <div className="col-lg-12">
              <div className="swiper-button-prev-custom" onClick={goPrev}>
                <SVGIcon
                  name="chevron-left"
                  width="28"
                  height="28"
                  className="fa-2x text-dark swipper-navigation-prev"
                ></SVGIcon>
              </div>
              <div className="swiper-button-next-custom" onClick={goNext}>
                <SVGIcon
                  name="chevron-right"
                  width="28"
                  height="28"
                  className="fa-2x text-dark swipper-navigation-next"
                ></SVGIcon>
              </div>

              <Swiper {...params}>
                {Contents.lastMinuteDealsContent &&
                  Contents.lastMinuteDealsContent.map((x, key) => (
                    <div
                      key={key}
                      className="lastminute-deal-item"
                      style={{ boxSizing: "border-box", height: "auto" }}
                      title={x?.packageTitle}
                    >
                      <div className="lastminute-deals">
                        <div className="lastminute-deal-item-img">
                          {x?.galleryImages?.filter(
                            (x) => x.IsDefaultImage && x.fileExtension !== "pdf"
                          ).length == 0 &&
                            x?.galleryImages
                              ?.filter(
                                (x) =>
                                  x.isDefaultImage && x.fileExtension !== "pdf"
                              )
                              .map((itemm, index) => {
                                return (
                                  <img
                                    src={itemm.fileURL || itemm.fileData}
                                    alt="sfd"
                                    className="img-fluid"
                                  />
                                );
                              })}
                        </div>
                        <div className="lastminute-deals-content">
                          <h5>
                            <Link to={"/details/" + x?.id}>
                              {x?.packageTitle.length > 25
                                ? x?.packageTitle.substring(0, 25) + "..."
                                : x?.packageTitle}
                            </Link>
                          </h5>
                          <div
                            className="days font-weight-bold"
                            style={{ display: "none" }}
                          >
                            {x?.duration.length > 1 && x?.duration}
                          </div>
                          <div
                            className="price w-100"
                            style={{ display: "none" }}
                          >
                            Starting at
                            <SVGIcon
                              name="rupee"
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
                      </div>
                    </div>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 pt-5">
              <div className="swiper-button-prev-custom" onClick={goPrev}>
                <SVGIcon
                  name="chevron-left"
                  width="28"
                  height="28"
                  className="fa-2x text-dark swipper-navigation-prev"
                ></SVGIcon>
              </div>
              <div className="swiper-button-next-custom" onClick={goNext}>
                <SVGIcon
                  name="chevron-right"
                  width="28"
                  height="28"
                  className="fa-2x text-dark swipper-navigation-next"
                ></SVGIcon>
              </div>

              <div className="d-flex align-items-center justify-content-center mt-2 h-100 ">
                {Contents.lastMinuteDealsContent.length > 4 && (
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
      </div>
    </React.Fragment>
  );
};

export default LastMinuteDeals;
