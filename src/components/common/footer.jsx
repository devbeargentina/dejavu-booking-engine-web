import React from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../../helpers/svg-icon";
import CustomerLogo from "../../assets/images/web/Deja-vu-white.png";
import Instagram from "../../assets/images/web/social-instagram.png";
import Facebook from "../../assets/images/web/social-facebook.png";
import Youtube from "../../assets/images/web/social-youtube.png";
import Twitter from "../../assets/images/web/social-twitter.png";

const Footer = ({ Settings }) => {
  const companyName = Settings?.footerText;
  return (
    <React.Fragment>
      <div className="cp-footer pt-5 pb-4">
        <div className="container">
          <div className="row border-bottom border-dark d-flex justify-content-between">
            <div className="col-lg-6">
              <div>
                <Link to="/">
                  <img src={CustomerLogo} alt={companyName} className="mb-2" />
                </Link>

                <p className="text-secondary mt-1 text-justify">
                  "Deja-vu Tours Treks and Travel" is started with the idea of
                  combining traditional leisure tours and adventure travel
                  experience at same place, where exploring different Culture,
                  local Accommodation, delicious local Cusine, Trekking,
                  Adventure sports and some not for tourist places make the
                  whole travel experience unique. <br />
                  We are a group of experienced travellers, who are aimed to
                  provide well-crafted travel and tour experience across India.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="col-lg-4c pull-left text-secondary">
                <div>
                  <div>
                    <b className="d-block text-secondary mb-2">Contact</b>
                    <p>
                      11, Patelkunj, Maninagar East, <br />
                      Ahmedabad, India.
                    </p>
                    <a
                      href={
                        window.innerWidth <= 768
                          ? "https://wa.me/918976997098"
                          : "https://web.whatsapp.com/send?phone=+918976997098"
                      }
                      className="d-inline mb-2 text-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SVGIcon
                        name="phone"
                        className="mr-2 white "
                        width="15"
                        height="15"
                      ></SVGIcon>
                      +91 897 699 7098
                    </a>
                    <br />
                    <a
                      href={"mailto:sales@dejavu.com"}
                      className="text-secondary"
                    >
                      <SVGIcon
                        name="envelope"
                        className="mr-2 white "
                        width="15"
                        height="15"
                      ></SVGIcon>
                      sales@dejavu.com
                    </a>
                  </div>
                  <div className="mb-2 mt-4">
                    <div className="footer-socialicons">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="shadow-sm bg-white"
                      >
                        <img src={Instagram} alt="" />
                      </Link>
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        className="shadow-sm bg-white"
                      >
                        <img src={Facebook} alt="" />
                      </Link>
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="shadow-sm bg-white"
                      >
                        <img src={Twitter} alt="" />
                      </Link>
                      <Link
                        to="https://www.youtube.com"
                        target="_blank"
                        className="shadow-sm bg-white"
                      >
                        <img src={Youtube} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cp-copyrights">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex align-items-center justify-content-center">
                <div>
                  {
                    "Copyright ©2022 All rights reserved | Deja-vu Outdoors Pvt. Ltd"
                  }{" "}
                  | <Link to="/terms">Terms of Use | Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
