import React from "react";
import { FiPackage } from "react-icons/fi";
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
import { SearchButton } from "../components/SearchPanel";
import { useNavigate } from "react-router-dom";
const MainNavigation = ({ activePane }) => {
  const expand = "md";
  const navigate = useNavigate();
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
                <Nav.Link onClick={() => navigate("/")}>خانه</Nav.Link>
                <Nav.Link onClick={() => navigate("/aboutus")}>
                  درباره ما
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/login")}>{"ورود"}</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default MainNavigation;
