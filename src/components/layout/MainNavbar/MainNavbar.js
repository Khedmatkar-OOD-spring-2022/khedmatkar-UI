import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  FiShoppingCart,
  FiMessageSquare,
  FiUser,
  FiPackage,
} from "react-icons/fi";
import { React_Base_URL } from "../../../common/urls"
import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";

const MainNavbar = ({ layout, stickyTop }) => {
  const expand = "md";

  return (
    <div className="sticky-top" >
      <Navbar key={expand} bg="light" expand={expand} className="mb-3" dir="rtl">
        <Container fluid>
          <Navbar.Brand href="/">
            <FiPackage />
            {"سامانه خدمتکار"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            dir={"rtl"}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                سامانه خدمتکار
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="به چه خدمتی نیاز دارید؟"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">جست‌وجو</Button>
                  </Form>
                </Nav.Item>
                <Nav.Link href={`${React_Base_URL}/`}>خانه</Nav.Link>
                <Nav.Link href={`${React_Base_URL}/aboutus`}>
                  درباره ما
                </Nav.Link>
                <Nav.Link href={`${React_Base_URL}/register`}>
                  ساخت حساب
                </Nav.Link>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
