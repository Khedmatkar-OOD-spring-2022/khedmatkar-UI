import React from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import { CustomerSidebar } from "../containers/dashboard/options";
import { useAuth } from "../providers/authentication";

const UserLayout = ({ children, noNavbar = false }) => {
  const [user, isLoggedIn] = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <Container fluid>
      <MainNavbar />
      <Row>
        <MainSidebar sidebarItems={CustomerSidebar} />
        {children}
      </Row>
    </Container>
  );
};

export default UserLayout;
