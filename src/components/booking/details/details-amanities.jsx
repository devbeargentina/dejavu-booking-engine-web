import React from "react";
import TimerIcon from "../../../assets/images/web/SVG/image 11.svg";
import Athentic from "../../../assets/images/web/SVG/Frame 390.svg";
import TraditinalHomeStay from "../../../assets/images/web/SVG/Frame 397-1.svg";
import SightSeen from "../../../assets/images/web/SVG/Frame 396.svg";
import OffbeatExperiences from "../../../assets/images/web/SVG/Frame 482.svg";

const DetailAmenities = (props) => {
  return (
    <div className="col-lg-12 p-0 mb-2">
      <div className="d-flex justify-content-between">
        <div
          className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
          style={{ width: "5.5rem" }}
        >
          <div className="d-flex w-100 justify-content-center">
            <img
              src={TimerIcon}
              alt=""
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
            <small className="w-100 d-block h-25">Comfortable Transport</small>
          </div>
        </div>
        <div
          className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
          style={{ width: "5.5rem" }}
        >
          <div className="d-flex w-100 justify-content-center">
            <img
              src={Athentic}
              alt=""
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
            <small className="w-100 d-block h-25">Authentic Food</small>
          </div>
        </div>
        <div
          className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
          style={{ width: "5.5rem" }}
        >
          <div className="d-flex w-100 justify-content-center">
            <img
              src={TraditinalHomeStay}
              alt=""
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
            <small className="w-100 d-block h-25">Traditinal Home Stay</small>
          </div>
        </div>
        <div
          className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
          style={{ width: "5.5rem" }}
        >
          <div className="d-flex w-100 justify-content-center">
            <img
              src={OffbeatExperiences}
              alt=""
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
            <small className="w-100 d-block h-25">Offbeat Experiences</small>
          </div>
        </div>
        <div
          className="pt-2 pr-1 pl-1 pb-2 border border-radius align-items-center justify-content-center"
          style={{ width: "5.5rem" }}
        >
          <div className="d-flex w-100 justify-content-center">
            <img
              src={SightSeen}
              alt=""
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <div className="d-flex w-100 justify-content-center text-center text-wrap text-break">
            <small className="w-100 d-block h-25">Sight Seen</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAmenities;
