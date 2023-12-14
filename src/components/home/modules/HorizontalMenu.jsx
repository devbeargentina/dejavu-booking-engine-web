import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">Menu Item 1</Menu.Item>
    <Menu.Item key="2">Menu Item 2</Menu.Item>
    <Menu.Item key="3">Menu Item 3</Menu.Item>
  </Menu>
);

const HorizontalMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Dropdown <DownOutlined />
        </a>
      </Dropdown>
    </Menu>
  );
};

export default HorizontalMenu;
