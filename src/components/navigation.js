import React from "react";
import {
  FiShoppingCart,
  FiMessageSquare,
  FiUser,
  FiPackage,
} from "react-icons/fi";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const MainNavigation = ({ activePane }) => {
  const expand = "md";
  return (
    <>
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
              <FiPackage />
              {'  سامانه خدمتکار'}</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            dir={'rtl'}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                سامانه خدمتکار
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/home">خانه</Nav.Link>
                <Nav.Link href="/aboutus">درباره ما</Nav.Link>
                <Nav.Link href="/login">ورود</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="به چه خدمتی نیاز دارید؟"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">جست‌وجو</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default MainNavigation;
