import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import SubMenuArrow from "../../assets/images/web/Vector 1.png";

const MenuHeader = () => {
  const [isMobileMenu, mobileMenuToggle] = useState(false);
  const css = `.text-dark {
    color: #0B1B3E !important;
}`;
  const menusub = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/" style={{ fontSize: "16px" }}>
          HOME
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about" style={{ fontSize: "16px" }}>
          HOME
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/contact" style={{ fontSize: "16px" }}>
          HOME
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <React.Fragment>
      <style>{css}</style>
      <nav
        className={
          "d-flex align-items-center justify-content-center h-100 " +
          (isMobileMenu ? "cms-mobilemenu-show" : "")
        }
      >
        <ul className="list-unstyled p-0 m-0 d-flex align-items-center">
          <li>
            <Link className="text-dark" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Dropdown
              menu={menusub}
              placement="bottomLeft"
              overlayStyle={{ fontSize: "16px", width: "150px" }}
            >
              <Link className="text-dark ml-4" to="/about">
                ALL TRIPS
                <img
                  alt="menu"
                  className="cms-mobilemendsddu-icon ml-2 mb-1"
                  src={SubMenuArrow}
                  onClick={() => mobileMenuToggle(!isMobileMenu ? true : false)}
                />
              </Link>
              {/* <Link to="/">Page Menu</Link> */}
            </Dropdown>
          </li>
          <li>
            <Link className="text-dark ml-4" to="/contact">
              STAY
            </Link>
          </li>
          <li>
            <Link className="text-dark ml-4" to="/payment">
              BLOG
            </Link>
          </li>
          <li>
            <Link className="text-dark ml-4" to="/contact">
              CUSTOMIZE
            </Link>
          </li>
          <li>
            <Link className="text-dark ml-4" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default MenuHeader;
