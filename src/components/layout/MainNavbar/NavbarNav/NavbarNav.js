import React from "react";
import { Nav } from "react-bootstrap";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Notifications />
    <UserActions />
  </Nav>
);
