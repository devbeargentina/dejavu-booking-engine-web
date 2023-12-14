import React, { useState } from "react";
import { Popover, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/authSlice";
import { useEffect } from "react";

const LoginForm = (props) => {
  // useEffect(() => {
  //   if (!user) {
  //     dispatch(FetchPackageByCategory());
  //   }
  // }, [dispatch]);
  const onFinish = (values) => {
    console.log("Success:", values);
    const loginRQ = { ...values };
    props.handleVisibleChange(false, loginRQ);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout={"vertical"}
      style={{ fontSize: "16px", textTransform: "uppercase" }}
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password size="large" />
      </Form.Item>

      <Form.Item>
        <Button size="large" type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

const LoginPopover = (props) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible, loginRQ) => {
    if (loginRQ) {
      setVisible(visible);
      props.handleVisibleChange(loginRQ);
    }
  };

  const handleClickChange = (open) => {
    setVisible(true);
  };
  return (
    <Popover
      content={<LoginForm handleVisibleChange={handleVisibleChange} />}
      open={visible}
      onOpenChange={(e) => handleClickChange(e)}
      trigger="click"
      placement="topLeft"
      icons
      style={{ marginTop: "-10px" }}
    >
      <Link className="text-white" onClick={handleVisibleChange(!visible)}>
        LOGIN
      </Link>
    </Popover>
  );
};

export default LoginPopover;
