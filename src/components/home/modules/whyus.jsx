import React from "react";
import HtmlParser from "../../../helpers/html-parser";
import { decode } from "html-entities";
import SVGIcon from "../../../helpers/svg-icon";
import onlineBooking from "../../../assets/images/no-svg.svg";
import profits from "../../../assets/images/no-image.png";
import booking from "../../../assets/images/no-svg.svg";
import { useContext } from "react";
import { Context } from "../../../screens/web/context";

const Whyus = () => {
  const { State, Props } = useContext(Context);
  const { Settings, Contents } = State;
  return (
    Contents.howItWorkContent !== undefined &&
    Contents.howItWorkContent !== "" && (
      <div className="cp-home-why-us">
        <div className="container">
          <p className="why-us-sub-title">WHY CHOOSE</p>
          <h2 className="why-us-title">THE TRIP CENTRE ? </h2>
          <div className="row">
            <br />
            <div className="col-lg-4 text-center">
              <div className="why-us-icon">
                <img style={{ width: "32px" }} src={onlineBooking} alt="" />
              </div>
              <h5>Trip centre Offers</h5>
              <p>
                A wide variety of services catering to all travel needs. From
                booking hotels to holidays packages to all ancillary services.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="why-us-icon">
                <img style={{ width: "42px" }} src={profits} alt="" />
              </div>
              <h5>Assured best deals</h5>
              <p>
                Get instant best deals on our hand-picked collections designed
                for you! You can now get affordable and customized packages at
                your convenience.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="why-us-icon">
                <img style={{ width: "42px" }} src={booking} alt="" />
              </div>
              <h5>Flawless Booking Experience</h5>
              <p>
                Basis on the valuable feedback from agents, the user friendly
                interface and easy navigation system enhances booking
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Whyus;
