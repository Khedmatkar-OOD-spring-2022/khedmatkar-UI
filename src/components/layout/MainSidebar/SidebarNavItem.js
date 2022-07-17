import React from "react";
import { Nav } from "react-bootstrap";

const SidebarNavItem = ({ item ,onClick}) => (
  <Nav.Item>
    <Nav.Link onClick={()=>onClick(item.to)}>
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
