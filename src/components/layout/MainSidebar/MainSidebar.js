import React from "react";

import SidebarNavItems from "./SidebarNavItems";

const MainSidebar = ({ sidebarItems,hideFeedback = false }) => {
  return (
    <>
      <SidebarNavItems items={sidebarItems} hideFeedback={hideFeedback} />
    </>
  );
};



export default MainSidebar;
