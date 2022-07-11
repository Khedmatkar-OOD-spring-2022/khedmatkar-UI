import React from "react";
import { Navigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";

const SidebarNavItem = ({ item }) => (
  <Nav.Item>
    <Nav.Link tag={Navigate} to={item.to}>
      <h6>
        <div className="d-inline-block item-icon-wrapper">
          {item.htmlBefore}
          {"  "}
          {item.title}
        </div>
      </h6>
    </Nav.Link>
  </Nav.Item>
);

export default SidebarNavItem;
