import React from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import moment from "moment";

const { Option } = Select;

const UserProfileForm = ({ user, onSubmit, onCancle }) => {
  const onFinish = (values) => {
    // Handle form submission
    onSubmit(values);
  };

  const dateFormat = "YYYY-MM-DD";
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      //initialValues={user} // Set initial values from the user object
      initialValues={{
        ...user,
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        phoneNumber: user?.phoneNumber || "",
        gender: user?.gender || "",
        birthdate: user?.birthdate ? moment(user.birthdate) : moment(),
      }}
      //   initialValues={{
      //     ...user,
      //     birthdate: moment(user.birthdate),
      //   }}
      onFinish={onFinish}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please enter your first name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please enter your last name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Contact Number" name="phoneNumber">
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Gender" name="gender">
        <Select>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Birth Date" name="birthdate">
        <DatePicker format={dateFormat} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
        <Button
          htmlType="button"
          className="ml-3"
          onClick={() => onCancle(false)}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserProfileForm;
