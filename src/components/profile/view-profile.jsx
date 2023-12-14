import React, { Component } from "react";
import moment from "moment";
import * as DropdownList from "../../helpers/dropdown-list";
import * as Global from "../../helpers/global";
import CMSSPageBanner from "../../components/home/modules/page-banner";
import NavigationArrowImg from "../../assets/images/web/right-menu-arrow.png";
import LocationIcon from "../../assets/images/web/location-icon.png";
import TimerIcon from "../../assets/images/web/clock-icon.png";
import HtmlParser from "../../helpers/html-parser";
import SVGIcon from "../../helpers/svg-icon";
import { decode } from "html-entities";
import editIcon from "../../assets/images/web/edit-icon.png";

import Form from "../../components/booking/common/form";
import MyCoravellers from "./my-co-travellers";
import { useState } from "react";
import UserProfileForm from "./UserProfileForm";
import { getUser, updateUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
const ViewProfile = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useDispatch();
  const user = props.user;
  const handleEdit = (value) => {
    setIsEditMode(value);
  };
  const onSubmit = async (value) => {
    console.log(value);
    const updatedData = { ...value };
    await dispatch(updateUser({ updatedData }));
    await dispatch(getUser());
    setIsEditMode(false);
  };
  return (
    <React.Fragment>
      <div className="col-lg-12 mb-3 p-0 pb-3 border-radius shadow-sm bg-white">
        <div className="col-lg-12 p-3 pl-4 pr-4">
          <div className="col-lg-12 d-flex p-0 mb-4">
            <div className="col-lg-12 p-0">
              <h5 className="font-weight-bold mb-0">My Profile</h5>
              <hr />
            </div>
          </div>
          <div className="col-lg-12 p-0 pb-2 mb-2 border-bottom">
            {!isEditMode ? (
              <>
                <div className="col-lg-12 d-flex p-0 mt-1 d-flex align-items-end justify-content-between">
                  <div className="p-0 ">
                    <span className="w-100 d-block h-100 font-weight-bold">{`${
                      user.firstName + " " + user.lastName
                    }`}</span>
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
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Contact Number
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="w-100 d-block h-100 h-25">{`${user.phoneNumber}`}</span>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Email Id
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="w-100 d-block h-100 h-25">{`${user.email}`}</span>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Gender
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="w-100 d-block h-100 h-25">{`${user.gender}`}</span>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-lg-3 pull-left">
                    <span className="w-100 d-block h-100 text-secondary">
                      Birth Date
                    </span>
                  </div>
                  <div className="col-lg-9 pull-left">
                    <span className="mr-4">{`${user.birthdate}`}</span>
                    <span className="mr-2 text-secondary">Age</span>
                    <span>{`29`}</span>
                  </div>
                </div>
              </>
            ) : (
              <UserProfileForm
                user={user}
                onSubmit={onSubmit}
                onCancle={handleEdit}
              />
            )}
          </div>
        </div>
        <MyCoravellers coTravellers={user.coTravellers} />
      </div>
    </React.Fragment>
  );
};

export default ViewProfile;
