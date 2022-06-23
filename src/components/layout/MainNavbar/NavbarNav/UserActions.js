import React from "react";
import { Dropdown, Collapse, Nav, Button } from "react-bootstrap";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <Nav.Item as={Dropdown} style={{ "text-align": "end", width: "30%" }}>
        <Dropdown.Toggle variant="outline" id="dropdown-basic">
          <span className="d-none d-md-inline-block">عرفان فراوانی</span>
          {"  "}
          <img
            className="user-avatar rounded-circle mr-2"
            width={"12%"}
            src={require("./../../../../assets/avatar.png")}
            alt="User Avatar"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu dir="rtl">
          <Dropdown.Item href="#/action-1">نمایه کاربر</Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ color: "red" }}>
            خروج
          </Dropdown.Item>
        </Dropdown.Menu>
      </Nav.Item>
    );
  }
}
