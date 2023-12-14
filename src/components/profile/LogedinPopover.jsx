import React, { useState } from "react";
import { Popover, Form, Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, getUser } from "../../redux/authSlice";
import { useEffect } from "react";

const LogedinUser = (props) => {
  return (
    <ul className="list-unstyled p-0 m-0 d-flexs align-items-center">
      <li className="d-block border-0 w-100">
        <Link
          className="text-secondary pl-4 pr-4 border-0 w-100 mt-2 mb-2"
          style={{
            border: "1px solid #fff",
            padding: "2px 8px",
            borderRadius: "6px",
            fontSize: "16px",
          }}
          to="/acc/my-bookings"
        >
          My Bookings
        </Link>
      </li>
      <Divider className="m-1" />
      <li className="d-block border-0  w-100">
        <Link
          className="text-secondary pl-4 pr-4 border-0 w-100 mt-2 mb-2"
          style={{
            border: "1px solid #fff",
            padding: "2px 8px",
            borderRadius: "6px",
            fontSize: "16px",
          }}
          to="/acc/my-profile"
        >
          My Profile
        </Link>
      </li>
      <Divider className="m-1" />
      <li className="d-block w-100">
        <Link
          className="text-secondary pl-4 pr-4 border-0 w-100 mt-2 mb-2"
          style={{
            border: "1px solid #fff",
            padding: "2px 8px",
            borderRadius: "6px",
            fontSize: "16px",
          }}
          to="/signout"
        >
          SignOut
        </Link>
      </li>
    </ul>
  );
};

const LogedinPopover = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.user);
  //
  // useEffect(() => {
  //   if (!user.firstName) {
  //     dispatch(getUser());
  //   }
  // }, [dispatch]);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  const handleClickChange = (open) => {
    setVisible(true);
  };
  return (
    <Popover
      content={<LogedinUser handleVisibleChange={handleVisibleChange} />}
      open={visible}
      onOpenChange={(e) => handleClickChange(e)}
      trigger="click"
      placement="topLeft"
      className="shadow"
      icons
      style={{ marginTop: "-10px" }}
    >
      <Link
        className="text-white"
        onClick={() => handleVisibleChange(!visible)}
      >
        {user.firstName && user.firstName + " " + user.lastName}
      </Link>
    </Popover>
  );
};

export default LogedinPopover;
