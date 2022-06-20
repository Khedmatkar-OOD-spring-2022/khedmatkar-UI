import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarNavItems from "./SidebarNavItems";

const MainSidebar = ({ sidebarItems,hideLogoText = false }) => {
  return (
    <>
      {/* <SidebarMainNavbar hideLogoText={hideLogoText} /> */}
      <SidebarNavItems items={sidebarItems}/>
    </>
  );
};



export default MainSidebar;
