import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import SidebarNavItems from "./SidebarNavItems";

const MainSidebar = ({
  sidebarItems,
  hideFeedback = false,
  color="black",
  image,
}) => {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color} style={{paddingTop: '1%'}}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="/"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require('./../../../assets/logo.png')} alt="..." />
            </div>
          </a>
          <h3 >
            خدمتکار
          </h3>
        </div>
        <Nav>
          {sidebarItems.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.to}
                    className="nav-link inline-flex"
                  >
                    
                    <h5>{prop.htmlBefore} {' '} {prop.title}</h5>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
  // return (
  //   <>
  //     <SidebarNavItems items={sidebarItems} hideFeedback={hideFeedback} />
  //   </>
  // );
};

export default MainSidebar;
