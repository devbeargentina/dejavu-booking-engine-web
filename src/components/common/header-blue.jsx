import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogedinPopover from "../profile/LogedinPopover";
import LoginPopover from "../profile/LoginPopover";
import { useDispatch, useSelector } from "react-redux";
import { getUser, userLogin } from "../../redux/authSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.firstName) {
      dispatch(getUser());
    }
  }, [dispatch]);
  const handleVisibleChange = async (loginRQ) => {
    await dispatch(userLogin({ loginRQ }));
    await dispatch(getUser());
  };

  return (
    <React.Fragment>
      <div className="cp-header-menu d-flex align-items-center ">
        {/* Test Comment */}
        <div className="container">
          <div className="row text-white">
            <div className="col-lg-6">
              <nav
                className={
                  "d-flex align-items-start justify-content-start pt-1 pb-1 w-100 h-50 "
                }
              >
                <span className="mr-3">{"+91 972 281 3544"}</span>

                <span>{"praful.iteng@gmail.com"}</span>
              </nav>
            </div>
            <div className="col-lg-6 text-white">
              <nav
                className={
                  "d-flex align-items-start justify-content-end pt-1 pb-1 w-100 h-50 "
                }
              >
                <ul className="list-unstyled p-0 m-0 d-flex align-items-center">
                  {!localStorage.getItem("userToken") && !user.firstName ? (
                    <>
                      <li>
                        {/* <Link className="text-white" to={"/login"}>
                      LOGIN
                    </Link> */}
                        <LoginPopover
                          handleVisibleChange={handleVisibleChange}
                        />
                      </li>
                      <li>
                        <Link
                          className="text-white ml-4"
                          style={{
                            border: "1px solid #fff",
                            padding: "2px 8px",
                            borderRadius: "6px",
                          }}
                          to="/signup"
                        >
                          SIGN UP
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <LogedinPopover />
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
