import React from "react";
import {
  FiPackage,
} from "react-icons/fi";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { React_Base_URL } from "./urls";
const MainNavigation = ({ activePane }) => {
  const expand = "md";
  return (
    <>
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <FiPackage />
            {"  سامانه خدمتکار"}
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
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href={`${React_Base_URL}/`}>خانه</Nav.Link>
                <Nav.Link href={`${React_Base_URL}/aboutus`}>
                  درباره ما
                </Nav.Link>
                <Nav.Link href={`${React_Base_URL}/login`}>
                   {'ورود'}
                </Nav.Link>
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
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default MainNavigation;
