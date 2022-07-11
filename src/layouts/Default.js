import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";

const DefaultLayout = ({ children, noNavbar=false }) => (
  <Container fluid>
    <Row>
      {/* <MainSidebar /> */}
      <Col
        // className="main-content"
        // lg={{ size: 10, offset: 2 }}
        // md={{ size: 9, offset: 3 }}
        // sm="12"
        // tag="main"
      >
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
      </Col>
    </Row>
  </Container>
);


export default DefaultLayout;
