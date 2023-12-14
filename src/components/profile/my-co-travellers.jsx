import React, { Component, useState } from "react";
import moment from "moment";
import * as DropdownList from "../../helpers/dropdown-list";
import * as Global from "../../helpers/global";
import CMSSPageBanner from "../home/modules/page-banner";
import NavigationArrowImg from "../../assets/images/web/right-menu-arrow.png";
import LocationIcon from "../../assets/images/web/location-icon.png";
import TimerIcon from "../../assets/images/web/clock-icon.png";
import HtmlParser from "../../helpers/html-parser";
import SVGIcon from "../../helpers/svg-icon";
import { decode } from "html-entities";

import Form from "../booking/common/form";
import editIcon from "../../assets/images/web/edit-icon.png";
import deleteIcon from "../../assets/images/web/delete-icon.png";
import {
  createCoTraveller,
  deleteCoTraveller,
  getCoTravellers,
  updateCoTraveller,
  updateUser,
} from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import UserProfileForm from "./UserProfileForm";
import { useEffect } from "react";
import { Button, Popconfirm } from "antd";
const MyCoravellers = ({ coTravellers1 }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [coTraveller, setCoTraveller] = useState();

  const dispatch = useDispatch();

  const { loading, coTravellers } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getCoTravellers());
  // }, [dispatch]);

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  // useEffect(() => {
  //   if (!user.firstName) {
  //     dispatch(getCoTravellers());
  //   }
  // }, []);

  const onDelete = async (id) => {
    await dispatch(deleteCoTraveller({ id }));
    await dispatch(getCoTravellers());
  };
  const confirm = async (id) => {
    await dispatch(deleteCoTraveller({ id }));
    await dispatch(getCoTravellers());
  };
  const cancel = (e) => {
    console.log(e);
    // message.error("Click on No");
  };
  const handleEdit = (isTrue, value) => {
    setCoTraveller(value);
    setIsEditMode(isTrue);
  };
  const onSubmit = async (value) => {
    console.log(value);
    if (coTraveller) {
      const coTravellerData = {
        ...coTraveller,
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phoneNumber,
        gender: value.gender,
        birthdate: value.birthdate,
      };
      await dispatch(updateCoTraveller({ coTravellerData }));
      await dispatch(getCoTravellers());
    } else {
      const coTravellerData = { ...value };
      await dispatch(createCoTraveller({ coTravellerData }));
      await dispatch(getCoTravellers());
    }

    setIsEditMode(false);
    //dispatch(getCoTravellers());
  };

  // const handleEdit = () => {};
  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <React.Fragment>
      <div className=" col-lg-12 pl-4">
        <div className="col-lg-12 d-flex p-0 mt-1 d-flex align-items-end justify-content-between">
          <div className="p-0 ">
            <span className="w-100 d-block h-100 font-weight-bold">{`${"Co-Travellers"}`}</span>
          </div>
          <div className="d-flex p-0 list-unstyled">
            <small
              className="text-primary cursor-pointer"
              onClick={() => handleEdit(true)}
              role="button"
            >
              <img src={editIcon} alt="edit" />
            </small>
          </div>
        </div>
        <div id="accordion" className="position-relative mt-3">
          {/* <div className="card border-0 mb-3 " key={0}>
            <div
              id={`heading${0}`}
              className={`card-headers bg-white ${
                activeIndex === 0 ? "" : "collapsed"
              }`}
              onClick={() => handleAccordionClick(0)}
              aria-expanded={activeIndex === 0 ? "true" : "false"}
              aria-controls={`collapse${0}`}
            >
              <i
                className={`fa mr-2 pull-right ${
                  activeIndex === 0 ? "fa-chevron-down" : "fa-chevron-up"
                }`}
              ></i>
              <span className="w-100 d-block h-100">{`Praful Chauhan`}</span>
            </div>
            <div
              id={`collapse${0}`}
              className={`collapse ${activeIndex === 0 ? "show" : ""}`}
              aria-labelledby={`heading${0}`}
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Contact Number
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="w-100 d-block h-100 h-25">{`+91 9722813544`}</span>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Email Id
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="w-100 d-block h-100 h-25">{`cprafulm@gmail.com`}</span>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Gender
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="w-100 d-block h-100 h-25">{`Male`}</span>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Birth Date
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="mr-4">{`13/08/1993`}</span>
                    <span className="mr-2 text-secondary">Age</span>
                    <span>{`29`}</span>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Special note if any
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span>{`Special note if any`}</span>
                  </div>
                </div>
                <div className="row text-right mb-3">
                  <div className="col-lg-12 text-right d-flex justify-content-end align-items-right ">
                    <small
                      className="text-primary pull-right cursor-pointer"
                      onClick={() => handleEdit()}
                      role="button"
                    >
                      <img src={editIcon} alt="edit" className="h-75" />
                    </small>
                    <small
                      className="text-primary pull-right ml-2 cursor-pointer"
                      onClick={() => handleEdit()}
                      role="button"
                    >
                      <img src={deleteIcon} alt="delete" className="h-75" />
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {!isEditMode ? (
            <>
              {coTravellers &&
                coTravellers.map((item, index) => {
                  return (
                    <div className="card border-0 mb-3 " key={index}>
                      <div
                        id={`heading${index}`}
                        className={` ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        onClick={() => handleAccordionClick(index)}
                        aria-expanded={activeIndex === index ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        <i
                          className={`fa mr-2 pull-right ${
                            activeIndex === index
                              ? "fa-chevron-down"
                              : "fa-chevron-up"
                          }`}
                        ></i>
                        <span className="w-100 d-block h-100">{`${item.firstName}`}</span>
                      </div>
                      <div
                        id={`collapse${index}`}
                        className={`collapse ${
                          activeIndex === index ? "show" : ""
                        }`}
                        aria-labelledby={`heading${index}`}
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="row mt-3 ">
                            <div className="col-lg-3 pull-left">
                              <span className="w-100 d-block h-100 text-secondary">
                                Contact Number
                              </span>
                            </div>
                            <div className="col-lg-9 pull-left">
                              <span className="w-100 d-block h-100 h-25">{`${item.phoneNumber}`}</span>
                            </div>
                          </div>
                          <div className="row mt-3 ">
                            <div className="col-lg-3 pull-left">
                              <span className="w-100 d-block h-100 text-secondary">
                                Email Id
                              </span>
                            </div>
                            <div className="col-lg-9 pull-left">
                              <span className="w-100 d-block h-100 h-25">{`${item.email}`}</span>
                            </div>
                          </div>
                          <div className="row mt-3 ">
                            <div className="col-lg-3 pull-left">
                              <span className="w-100 d-block h-100 text-secondary">
                                Gender
                              </span>
                            </div>
                            <div className="col-lg-9 pull-left">
                              <span className="w-100 d-block h-100 h-25">{`${item.gender}`}</span>
                            </div>
                          </div>
                          <div className="row mt-3 ">
                            <div className="col-lg-3 pull-left">
                              <span className="w-100 d-block h-100 text-secondary">
                                Birth Date
                              </span>
                            </div>
                            <div className="col-lg-9 pull-left">
                              <span className="mr-4">{`13/08/1993`}</span>
                              <span className="mr-2 text-secondary">Age</span>
                              <span>{`29`}</span>
                            </div>
                          </div>
                          {/* <div className="row mt-3 ">
                        <div className="col-lg-3 pull-left">
                          <span className="w-100 d-block h-100 text-secondary">
                            Special note if any
                          </span>
                        </div>
                        <div className="col-lg-9 pull-left">
                          <span>{`Special note if any`}</span>
                        </div>
                      </div> */}
                          <div className="row text-right mb-3">
                            <div className="col-lg-12 text-right d-flex justify-content-end align-items-right ">
                              <small
                                className="text-primary pull-right cursor-pointer"
                                onClick={() => handleEdit(true, item)}
                                role="button"
                              >
                                <img
                                  src={editIcon}
                                  alt="edit"
                                  className="h-75"
                                />
                              </small>
                              {/* <Popconfirm
                                title="Delete the task"
                                description="Are you sure to delete this task?"
                                onConfirm={confirm(item.id)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                              >
                                <small
                                  className="text-primary pull-right ml-2 cursor-pointer"
                                  // onClick={() => onDelete(item.id)}
                                  role="button"
                                >
                                  <img
                                    src={deleteIcon}
                                    alt="delete"
                                    className="h-75"
                                  />
                                </small>
                              </Popconfirm> */}
                              <Popconfirm
                                title="Delete CoTraveller"
                                description="Are you sure to delete traveller?"
                                onConfirm={() => confirm(item.id)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                              >
                                <small
                                  className="text-primary pull-right ml-2 cursor-pointer"
                                  //onClick={() => onDelete(item.id)}
                                  role="button"
                                >
                                  <img
                                    src={deleteIcon}
                                    alt="delete"
                                    className="h-75"
                                  />
                                </small>
                              </Popconfirm>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            <UserProfileForm
              user={coTraveller}
              onSubmit={onSubmit}
              onCancle={handleEdit}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyCoravellers;
