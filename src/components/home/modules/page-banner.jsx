import React from "react";
import HeaderImg from "../../../assets/images/web/header-img.png";
import { Link } from "react-router-dom";

const SPageBanner = ({ BannerImg }) => {
  return (
    <div
      className="cp-home-slider"
      style={{ position: "relative", paddingTop: "-78px" }}
    >
      <div className="d-flex align-items-center justify-content-center">
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
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SPageBanner;
