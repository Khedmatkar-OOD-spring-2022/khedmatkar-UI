import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </Container>
  );
};

export default DefaultLayout;
