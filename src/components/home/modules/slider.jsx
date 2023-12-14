import React from "react";
import nArrow from "../../../assets/images/web/slider-arrow.png";
import Slider1 from "../../../assets/images/web/slider1.png";
import Slider2 from "../../../assets/images/web/slider1.png";
import { Link } from "react-router-dom";
// import HtmlParser from "../../../helpers/html-parser";
// import { decode } from "html-entities";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Slider = ({ sliderImages, Settings, Contents, imageSliderContent }) => {
  const css = `
  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    display: none;
}
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  display: none;
}
  .swiper-button-prev {    
    left: 5%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    transform: rotate(-180deg);
    background-color: #00000052;
    padding: 25px;
    background-image: url(${nArrow}) !important;
  }
  
  .swiper-button-next {
    right: 5%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    background-color: #00000052;
    padding: 25px;
    background-image: url(${nArrow}) !important;
  }
  `;
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay:{
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    loop: false,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };

  return (
    <div className="cp-home-slider" style={{ position: "relative" }}>
      <style>{css}</style>
      <Swiper
        className="d-flex align-items-center justify-content-center"
        {...params}
      >
        <div className="sliderContainer" key={1}>
          <div className="contentdivv align-items-center justify-content-center">
            <div className="text-left">
              <h1 className="text-white w-100">Title</h1>
              <h3 className="text-white w-100">Sub Title</h3>
              {false && (
                <Link
                  className="btn btn-lg btn-primary mt-4 shadow"
                  to="/login"
                >
                  Sign In to Learn More
                </Link>
              )}
            </div>
          </div>
          <img src={Slider1} alt="" style={{ height: "540px" }} />
        </div>
        <div className="sliderContainer" key={2}>
          <div className="contentdivv align-items-center justify-content-center">
            <div className="text-left">
              <h1 className="text-white w-100">Title</h1>
              <h3 className="text-white w-100">Sub Title</h3>
              {false && (
                <Link
                  className="btn btn-lg btn-primary mt-4 shadow"
                  to="/login"
                >
                  Sign In to Learn More
                </Link>
              )}
            </div>
          </div>
          <img src={Slider2} alt="" style={{ height: "540px" }} />
        </div>
        {/* );
        })} */}
      </Swiper>
    </div>
  );
};

export default Slider;
