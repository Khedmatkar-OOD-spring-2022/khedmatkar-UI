import React from "react";
import { Dropdown, Collapse, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../providers/authentication";
const UserActions = ({ user, isAdmin }) => {
  const navigate = useNavigate();
  return (
    <Nav.Item as={Dropdown} style={{ textAlign: "end"}}>
      <Dropdown.Toggle variant="outline" id="dropdown-basic" style={{border:'none',margin:0,padding:0,justifyContent:'flex-start'}}>
        <span className="d-none d-md-inline-block" style={{color:'black'}}>
          {user && user.firstName}
        </span>
        {"  "}
        <img
          className="user-avatar rounded-circle mr-2"
          width={"50px"}
          src={require("./../../../../assets/avatar.png")}
          alt="User Avatar"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu dir="rtl" >
        <Dropdown.Item
          onClick={() => {
            if (isAdmin) {
              navigate("/admin/profile");
            } else navigate("/dashboard/profile");
          }}
        >
          نمایه کاربر
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            logout();
          }}
          style={{ color: "red" }}
        >
          خروج
        </Dropdown.Item>
      </Dropdown.Menu>
    </Nav.Item>
  );
};

export default UserActions;
