import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";

class SidebarMainNavbar extends React.Component {
  render() {
    const { hideLogoText } = this.props;
    return (
      <div>
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <Navbar.Brand
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "25px" }}
          >
            <div>
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "25px" }}
                src={require("../../../assets/logo.png")}
              />
              {!hideLogoText && (
                <span className="d-none d-md-inline ml-1">سامانه خدمتکار</span>
              )}
            </div>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

SidebarMainNavbar.propTypes = {
  hideLogoText: PropTypes.bool,
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false,
};

export default SidebarMainNavbar;
