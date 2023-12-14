import React from "react";
import { Form } from "antd";
import NormalLoginForm from "./NormalLoginForm";

const HomePage = () => {
  const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
    NormalLoginForm
  );

  return <WrappedNormalLoginForm />;
};

export default HomePage;
