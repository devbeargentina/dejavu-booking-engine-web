import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../../assets/images/dejavu/Logo-white.png";
import LogoDark from "../../../assets/images/dejavu/Logo-dark.png";
import CallIcon from "../../../assets/images/dejavu/icons-2.png";
import UserIcon from "../../../assets/images/dejavu/icons-1.png";

import MobileMenu from "../../../assets/images/web/mobile-menu.svg";
import Menu from "./menu";
import SVGIcon from "../../../helpers/svg-icon";
import HtmlParser from "../../../helpers/html-parser";
import { decode } from "html-entities";
import Config from "../../../config.json";

const Header = (props) => {
  const [state, setState] = useState({
    isMobileMenu: false,
    isShowGoToTop: document.documentElement.scrollTop > 300,
  });

  const mobileMenuToggle = () => {
    setState((prevState) => {
      return { ...prevState, isMobileMenu: !state.isMobileMenu };
    });
  };
  const stickyScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      console.log("as");
      setState((prevState) => {
        return { ...prevState, isShowGoToTop: true };
      });
    } else if (scrolled <= 50) {
      setState((prevState) => {
        return { ...prevState, isShowGoToTop: false };
      });
    }
  };
  const handleClick = (e) => {
    var elems = document.querySelectorAll(".agentSignup");
    [].forEach.call(elems, function (el) {
      el.classList.remove("agentSignup");
    });
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    if (
      e.currentTarget.pathname.toLowerCase() === "/signin" ||
      e.currentTarget.pathname.toLowerCase() === "/signup"
    ) {
      e.currentTarget.className += " agentSignup";
    } else {
      e.currentTarget.className += " active";
    }
  };
  const { Settings, Contents } = props;
  const { isMobileMenu, isShowGoToTop } = state;

  window.addEventListener("scroll", stickyScroll);
  const companyLogo = Settings?.logoFile;
  const companyName = "Your Logo";
  const css = `  
.AF-005.cm-pages div.cp-header {
  background: #fff;
  color:#000;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
}
.AF-005.cm-pages div.cp-header .container {
  background: #fff;
  height: 78px;
}

.AF-005 a.header-menu {
  color: #000;
}`;
  return (
    <React.Fragment>
      <div className="cp-header d-flex align-items-center shadodw">
        {/* Test Comment */}
        {isShowGoToTop && <style>{css}</style>}
        <div className="container">
          <div className="row d-flex align-items-center justify-content-end h-100 ">
            <div className="col-lg-3 d-flex align-items-center dsad">
              <Link to="/">
                {isShowGoToTop ? (
                  <img
                    className="header-logo mr-3"
                    src={LogoDark}
                    alt="DejaVu"
                  />
                ) : (
                  <img
                    className="header-logo mr-3"
                    src={LogoWhite}
                    alt="DejaVu"
                  />
                )}
              </Link>
            </div>
            <div className="col-lg-9 d-flex flex-wrap justify-content-between h-100">
              <Menu />

              <div className="d-flex align-items-center justify-content-end">
                <div
                  className={
                    isShowGoToTop
                      ? "rounded-pill border border-dark border-5"
                      : "rounded-pill border border-white border-5"
                  }
                >
                  <Link
                    onClick={(e) => {
                      handleClick(e);
                      mobileMenuToggle(false);
                    }}
                    className="pl-2 pr-2 h-50"
                    to={
                      Config.codebaseType !== "dejavutoours-tripcenter" &&
                      Config.codebaseType !== "dejavutoours-marketplace"
                        ? "/login"
                        : "/signin"
                    }
                  >
                    <img
                      className="p-1"
                      src={CallIcon}
                      alt="DejaVu"
                      style={isShowGoToTop ? { filter: "invert(1)" } : {}}
                    />
                  </Link>
                  <Link
                    onClick={(e) => {
                      handleClick(e);
                      mobileMenuToggle(false);
                    }}
                    className={
                      isShowGoToTop
                        ? "border-left pl-2 pr-2 h-50 border-dark"
                        : "border-left pl-2 pr-2 h-50"
                    }
                    to="/signup"
                  >
                    <img
                      className=" p-1"
                      src={UserIcon}
                      alt="DejaVu"
                      style={isShowGoToTop ? { filter: "invert(1)" } : {}}
                    />
                  </Link>
                </div>
                <img className="cms-mobilemenu-icon d-none" src={MobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
