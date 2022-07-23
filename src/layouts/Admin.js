import React from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import { AdminSidebar, CustomerSidebar, SuperAdminSidebar } from "./options";
import { useAuth } from "../providers/authentication";

const AdminLayout = ({ children, noNavbar = false }) => {
  const [user, isLoggedIn] = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else if (user.type !== "ADMIN") {
    return <Navigate to="/dashboard" />
  }
  return (
    <Container fluid>
      <MainNavbar user={user} isAdmin/>
      <Row>
        <MainSidebar sidebarItems={SuperAdminSidebar} hideFeedback={true} />
        {children}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AdminLayout;
