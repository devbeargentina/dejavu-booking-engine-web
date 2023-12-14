import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomerLogo from "../../assets/images/web/dark-logo.png";
import MobileMenu from "../../assets/images/web/Property 1=Menu.png";
import Menu from "./menu";
// import SVGIcon from "../../helpers/svg-icon";

const Header = () => {
  const [isMobileMenu, mobileMenuToggle] = useState(false);
  return (
    <React.Fragment>
      <div className="cp-header d-flex align-items-center border bg-white">
        {/* Test Comment */}
        <div className="container">
          <div className="row justify-content-between align-items-center ">
            <div className="col-lg-2 d-flex align-items-center sfdf">
              <Link to="/">
                <img
                  className="header-logo mr-3  mt-1 mb-1 "
                  src={CustomerLogo}
                  alt="dejavutoours"
                />
              </Link>
            </div>
            <div className="col text-black">
              <Menu />
            </div>
            <div className="col-lg-1 text-black">
              <div className="d-flex align-items-start justify-content-end pt-1 pb-1 w-100 h-50 ">
                <img
                  alt="img"
                  className="cms-mobilemendsddu-icon"
                  src={MobileMenu}
                  onClick={() => mobileMenuToggle(!isMobileMenu ? true : false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
