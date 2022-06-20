import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useAuth } from "../../providers/authentication";
import { Navigate } from "react-router-dom";
import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
import { CustomerSidebar } from "./options";
import "./dashboard.css";
const Dashboard = ({}) => {
  const [user, isLoggedIn] = useAuth();
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (<>
    <MainNavbar />
    <Container fluid>
      <Row>
        <MainSidebar sidebarItems={CustomerSidebar}/>
      </Row>
    </Container>
    </>
  );
};

export default Dashboard;
