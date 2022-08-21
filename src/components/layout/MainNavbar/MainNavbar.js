import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { FiPackage } from "react-icons/fi";
import { SearchButton } from "../../SearchPanel";
import UserActions from "./NavbarNav/UserActions";

const MainNavbar = ({ user, isAdmin = false }) => {
  const expand = "md";

  return (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3" dir="rtl">
      <Navbar.Brand href="/">
        <FiPackage />
        {"سامانه خدمتکار"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="start"
        dir={"rtl"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            سامانه خدمتکار
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-between flex-grow-1 pe-3">
            <Nav.Item style={{ paddingRight: "8%" }}>
              {user && user.type === "CUSTOMER" ? <SearchButton /> : null}{" "}
            </Nav.Item>

            <UserActions user={user} isAdmin={isAdmin} />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MainNavbar;
