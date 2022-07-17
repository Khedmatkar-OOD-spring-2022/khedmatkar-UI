import React from "react";

import SidebarNavItems from "./SidebarNavItems";

const MainSidebar = ({ sidebarItems,hideLogoText = false }) => {
  return (
    <>
      <SidebarNavItems items={sidebarItems}/>
    </>
  );
};



export default MainSidebar;
