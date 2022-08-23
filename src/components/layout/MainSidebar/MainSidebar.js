import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import CommentModal from "../../modals/comment";

import SidebarNavItems from "./SidebarNavItems";

const MainSidebar = ({
  sidebarItems,
  hideFeedback = false,
  color = "black",
  image,
}) => {
  const location = useLocation();
  const [showCommentModal, setShowCommentModal] = useState(false);

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div
      className="sidebar"
      data-image={image}
      data-color={color}
      style={{ paddingTop: "1%" }}
    >
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <CommentModal show={showCommentModal} setShow={setShowCommentModal} />

      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="/" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img src={require("./../../../assets/logo.png")} alt="..." />
            </div>
          </a>
          <h3>خدمتکار</h3>
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
                  <NavLink to={prop.to} className="nav-link inline-flex">
                    <h5>
                      {prop.htmlBefore} {prop.title}
                    </h5>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
        <div>
          <Button
            variant="secondary"
            style={{
              alignItems: "center",
              margin: "10%",
              marginTop: "50px",
            }}
            onClick={() => setShowCommentModal(true)}
          >
            {"ثبت انتقادات و پیشنهادات"}
          </Button>
        </div>
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
