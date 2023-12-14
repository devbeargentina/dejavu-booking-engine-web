import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Instagram from "../../../assets/images/web/Travel-story-instagram.png";
import Facebook from "../../../assets/images/web/Travel-story-facebook.png";
import Youtube from "../../../assets/images/web/Travel-story-youtube.png";
import Twitter from "../../../assets/images/web/Travel-story-twitter.png";
import SVGIcon from "../../../helpers/svg-icon";
import { Context } from "../../../context/context";

const TravelStory = (props) => {
  const { State } = useContext(Context);
  const { Contents } = State;
  const params = {
    navigation: {
      nextEl: ".swiper-button-next-travel-story",
      prevEl: ".swiper-button-prev-travel-story",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  // const goNext = () => {
  //   document.querySelector(".swiper-button-next-travel-story").click();
  // };

  // const goPrev = () => {
  //   document.querySelector(".swiper-button-prev-travel-story").click();
  // };
  return (
    <React.Fragment>
      <div className="cp-home-travel-story bg-white">
        <div className="container">
          <h2 className="travel-story-title deals-title">Travel Stories</h2>
          <div className="row">
            <Swiper {...params}>
              {Contents &&
                Contents.items.map((x, key) => (
                  <div key={key} className="col-lg-4">
                    <div className="bg-white populer-travel-story shadow-sm mb-2">
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
                                  key={key}
                                  src={itemm.fileURL || itemm.fileData}
                                  alt="sfd"
                                  className="img-fluid"
                                />
                              );
                            })}
                      </div>
                      <div className="populer-deals-content">
                        <h5 className="mb-0 h4">
                          <Link to={"/details/" + x?.id}>
                            {x?.packageTitle.length > 50
                              ? x?.packageTitle.substring(0, 50) + "..."
                              : x?.packageTitle}
                          </Link>
                        </h5>
                        {/* <div className="days font-weight-bold">
                          {x?.duration.length > 1 && x?.duration}
                        </div> */}
                        <div className="price w-100 mb-2 text-secondary">
                          <small>Posted on aug 22, 2022</small>
                        </div>
                        <div className="price w-100 text-secondary text-truncate-line-4">
                          {x?.overview}
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
                      <div className="d-flex justify-content-start align-items-center text-secondary">
                        <SVGIcon
                          name="user-circle"
                          className="ml-2 mb-2 mt-3 text-secondary"
                          width="36"
                          height="36"
                          type="fill"
                        ></SVGIcon>
                        <div className="row text-left ml-2">
                          <div className="col-lg-12 p-0 text-left">
                            <small>
                              By <strong>Chintal panchal</strong>
                            </small>
                          </div>
                          <div className="col-lg-12 p-0 text-left">
                            <div className="footer-socialicons text-left">
                              <Link
                                to="https://www.instagram.com"
                                target="_blank"
                                className="shadow-sm bg-white h-auto mr-2"
                              >
                                <img
                                  key={key}
                                  src={Instagram}
                                  className="h-auto"
                                  alt=""
                                />
                              </Link>
                              <Link
                                to="https://www.facebook.com"
                                target="_blank"
                                className="shadow-sm bg-white h-auto mr-2"
                              >
                                <img
                                  key={key}
                                  src={Facebook}
                                  className="h-auto"
                                  alt=""
                                />
                              </Link>
                              <Link
                                to="https://www.twitter.com"
                                target="_blank"
                                className="shadow-sm bg-white h-auto mr-2"
                              >
                                <img
                                  key={key}
                                  src={Twitter}
                                  className="h-auto"
                                  alt=""
                                />
                              </Link>
                              <Link
                                to="https://www.youtube.com"
                                target="_blank"
                                className="shadow-sm bg-white h-auto mr-2"
                              >
                                <img
                                  key={key}
                                  src={Youtube}
                                  className="h-auto"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
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
                        <Link to={"/details/" + x?.id} className="btn-booknow">
                          BOOK NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </Swiper>
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

export default TravelStory;
