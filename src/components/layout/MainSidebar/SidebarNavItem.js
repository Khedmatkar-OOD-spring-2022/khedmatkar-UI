import React from "react";
import { Nav } from "react-bootstrap";

const SidebarNavItem = ({ item ,onClick}) => (
  <Nav.Item>
    <Nav.Link onClick={()=>onClick(item.to)}>
      <h5>
        <div className="d-inline-block item-icon-wrapper">
          {item.htmlBefore}
          {"  "}
          {item.title}
        </div>
      </h5>
    </Nav.Link>
  </Nav.Item>
);

export default SidebarNavItem;
