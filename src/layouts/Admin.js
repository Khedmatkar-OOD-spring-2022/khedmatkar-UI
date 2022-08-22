import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import {
  AdminSidebar,
  CustomerSidebar,
  getSideBarWithPermission,
  SuperAdminSidebar,
} from "./options";
import { useAuth } from "../providers/authentication";
import axios from "axios";
import urls from "../common/urls";

const AdminLayout = ({ children, noNavbar = false }) => {
  const [user, isLoggedIn] = useAuth();
  const [permissions, setPermissions] = useState(
    JSON.parse(localStorage.getItem("permissions"))
  );
  if (!permissions) {
    axios
      .get(urls.admin.getPermissions(), { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          if (res.headers["content-type"] === "text/html;charset=UTF-8") {
            localStorage.removeItem("permissions");
          }
          setPermissions(res.data);
          localStorage.setItem("permissions", JSON.stringify(res.data));
        }
      });
  }
  if (!isLoggedIn) {  
    return <Navigate to="/" />;
  } else if (user.type !== "ADMIN") {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Container fluid>
      <MainNavbar user={user} isAdmin />
      <Row>
        <MainSidebar
          sidebarItems={permissions && getSideBarWithPermission(permissions)}
          hideFeedback={true}
        />
        {children}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AdminLayout;
