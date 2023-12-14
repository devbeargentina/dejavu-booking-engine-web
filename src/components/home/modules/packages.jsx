import React from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { Grid, Pagination } from "swiper";
import SVGIcon from "../../../helpers/svg-icon";
import { useContext } from "react";
import { Context } from "../../../screens/web/context";

const Packages = ({ packages }) => {
  const { State, Props } = useContext(Context);
  const { Settings, Contents } = State;
  //const packages = deals;
  let imageURL =
    process.env.REACT_APP_CMSIMAGEHANDLER_ENDPOINT +
    Settings?.portalID +
    "/SpecialsPromotions/images/";

  const params = {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next-package",
      prevEl: ".swiper-button-prev-package",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
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
  const goNext = () => {
    document.querySelector(".swiper-button-next-package").click();
  };

  const goPrev = () => {
    document.querySelector(".swiper-button-prev-package").click();
  };

  const css = `.swiper-container-multirow-column > .swiper-wrapper {
    flex-direction: inherit;
  }`;
  return (
    <React.Fragment>
      <div className="cp-home-packages">
        <style>{css}</style>
        <div className="container">
          <p className="packages-sub-title">BEST OFFERS</p>
          <h2 className="packages-title">FLIGHTS</h2>
          <div className="row">
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
                {Contents.packagesContent &&
                  Contents.packagesContent.map((x, key) => (
                    <div
                      key={key}
                      className={"mb-4 mt-0 praful-" + x?.packageTitle}
                      title={x?.packageTitle}
                    >
                      <div className="col-lg-12 p-0 bg-white packages ">
                        <div className="col-lg-5 p-0 pull-left package-item-img">
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
                        <div className="col-lg-7 package-item-content">
                          <h5>
                            <Link to={"/details/" + x?.id}>
                              {x?.packageTitle}
                            </Link>
                          </h5>
                          <div
                            className="days font-weight-bold"
                            style={{ display: "none" }}
                          >
                            {x?.duration.length > 1 && x?.duration}
                            {/* {Math.ceil(
                                Math.abs(
                                  new Date(x?.validFrom).getTime() -
                                    new Date(x?.validTo).getTime()
                                ) /
                                  (1000 * 3600 * 24)
                              ) + " "}
                              Nights /{" "}
                              {Math.ceil(
                                Math.abs(
                                  new Date(x?.validFrom).getTime() -
                                    new Date(x?.validTo).getTime()
                                ) /
                                  (1000 *to3600 * 24)
                              ) - 1}{" "}
                              Days */}
                          </div>
                          <div className="price summery w-100">
                            {x?.overview.length > 50
                              ? x?.overview.substring(0, 50) + "..."
                              : x?.overview}
                          </div>
                          <div className="d-flex align-items-start justify-content-start mt-2 h-100 ">
                            <Link
                              to={"/details/" + x?.id}
                              className="btn-booknow"
                            >
                              BOOK NOW
                            </Link>
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
                {Contents.packagesContent.length > 4 && (
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

export default Packages;
