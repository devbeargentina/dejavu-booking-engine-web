import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../../../assets/images/no-svg.svg";
import Config from "../../../config.json";
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
const Menu = () => {
  const [isMobileMenu, mobileMenuToggle] = useState(false);
  return (
    <React.Fragment>
      <nav
        className={
          "d-flex align-items-center justify-content-start text-uppercase h-100 " +
          (isMobileMenu ? "cms-mobilemenu-show" : "")
        }
      >
        <ul className="list-unstyled p-0 m-0 d-flex align-items-center">
          <li>
            <Link
              className={
                window.location.pathname === "/"
                  ? "header-menu ml-4 active"
                  : "header-menu ml-4"
              }
              to="/"
              onClick={(e) => {
                handleClick(e);
                mobileMenuToggle(false);
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={
                window.location.pathname === "/about"
                  ? "header-menu ml-4 active"
                  : "header-menu ml-4"
              }
              to="/about"
              onClick={(e) => {
                handleClick(e);
                mobileMenuToggle(false);
              }}
            >
              About us
            </Link>
          </li>

          <li>
            <Link
              className={
                window.location.pathname === "/contact"
                  ? "header-menu ml-4 active"
                  : "header-menu ml-4"
              }
              to="/contact"
              onClick={(e) => {
                handleClick(e);
                mobileMenuToggle(false);
              }}
            >
              Contact us
            </Link>
          </li>

          <li>
            <Link
              onClick={(e) => {
                handleClick(e);
                mobileMenuToggle(false);
              }}
              className="header-menu ml-4"
              to={
                Config.codebaseType !== "dejavutoours-tripcenter" &&
                Config.codebaseType !== "dejavutoours-marketplace"
                  ? "/login"
                  : "/signin"
              }
            >
              Sign in
            </Link>
          </li>
          {Config.codebaseType === "dejavutoours-tripcenter" && (
            <li>
              <Link
                onClick={(e) => {
                  handleClick(e);
                  mobileMenuToggle(false);
                }}
                className="header-menu ml-4"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
