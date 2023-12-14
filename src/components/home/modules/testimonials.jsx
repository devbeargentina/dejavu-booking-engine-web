import React, { useContext } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import HtmlParser from "../../../helpers/html-parser";
import { decode } from "html-entities";
import UserIconImg from "../../../assets/images/no-image.png";
import SVGIcon from "../../../helpers/svg-icon";
import OndGoTravelsIndore from "../../../assets/images/no-image.png";
import RegentTravelsMumbai from "../../../assets/images/no-image.png";
import JaanviHolidaysPune from "../../../assets/images/no-image.png";
import FlyInSkyBangalore from "../../../assets/images/no-image.png";
import EnjoyDaysHoliday from "../../../assets/images/no-image.png";
import BestourTravelsBang from "../../../assets/images/no-image.png";
import AllianceVacations from "../../../assets/images/no-image.png";
import UniversalAirTravel from "../../../assets/images/no-image.png";
import TourismEnterprisesMumbai from "../../../assets/images/no-image.png";
import SunskyHolidaysMumbai from "../../../assets/images/no-image.png";
import { Config } from "../../../helpers/config";
import { Context } from "../../../screens/web/context";

const Testimonial = ({ Title, SubTitle }) => {
  const { State, Props } = useContext(Context);
  const { Settings, Contents } = State;
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: Title === "TESTIMONIALS" ? 2 : 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: Title === "TESTIMONIALS" ? 2 : 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  const goNext = () => {
    document.querySelector(".swiper-button-next").click();
  };

  const goPrev = () => {
    document.querySelector(".swiper-button-prev").click();
  };
  const sadsa = decode(
    (Contents.testimonialContent &&
      Contents.testimonialContent[0]?.desktopHtml) ||
      ""
  );

  const doc = new DOMParser().parseFromString(sadsa, "text/html");
  const HTMLArray = [...doc.body.children].map((el) => el.outerHTML);
  return (
    Contents.testimonialContent !== undefined &&
    Contents.testimonialContent !== "" &&
    Contents.testimonialContent.length > 0 && (
      <div className="cp-home-testimonial">
        <div className="container" style={{ position: "relative" }}>
          <div className="row">
            <div className=" col-lg-12 p-0">
              <div className=" col-lg-3 pull-right testimonial-heading">
                <p className="testimonial-sub-title">{SubTitle}</p>
                <h2 className="testimonial-title">{Title}</h2>
              </div>
              <div className="offset-lg-1 pull-right col-lg-8 testimonial-items">
                <Swiper {...params}>
                  {HTMLArray.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className="p-3 bg-white mb-5 mt-3 shadaow h-100"
                        style={{
                          boxSizing: "border-box",
                          boxShadow: "2px -3px 7px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <HtmlParser text={item} />
                      </div>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Testimonial;
