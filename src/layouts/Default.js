import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import { useAuth } from "../providers/authentication";

const DefaultLayout = ({ children, noNavbar = false }) => {
  const [_, isLoggedIn] = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Container fluid>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;
