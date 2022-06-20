import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Collapse,
  Nav
} from "react-bootstrap";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <Nav.Item tag={Dropdown} caret toggle={this.toggleUserActions}>
        <Dropdown.Toggle caret className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../assets/avatar.png")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">عرفان فراوانی</span>
        </Dropdown.Toggle>
        <Collapse tag={Dropdown.Menu} right small open={this.state.visible}>
          <Dropdown.Item tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </Dropdown.Item>
          <Dropdown.Item divider />
          <Dropdown.Item tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </Dropdown.Item>
        </Collapse>
      </Nav.Item>
    );
  }
}
