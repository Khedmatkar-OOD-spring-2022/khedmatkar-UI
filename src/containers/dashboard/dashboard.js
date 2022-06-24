import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useAuth } from "../../providers/authentication";
import { Navigate } from "react-router-dom";
import MainNavbar from "../../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../../components/layout/MainSidebar/MainSidebar";
import { CustomerSidebar, SpecialistSidebar, SuperAdminSidebar } from "./options";
import ServiceRequest from "../../components/request/servicRequest";

import "./dashboard.css";
import NotificationPanel from "../../common/notification";
import Service from "../service";
import Chat from "../chat";
import ProfilePanel from "../../components/profile/Panel/Panel";
import UserTable from "../../components/request/userTable";
import SpecialityList from "../../components/profile/specialityList";
import SpecialistList from "../../components/request/specialistList";
import AdminList from "../../components/request/adminList";
const Dashboard = ({}) => {
  const [user, isLoggedIn] = useAuth();
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Container fluid>
        <MainNavbar />
        <Row>
          <MainSidebar sidebarItems={CustomerSidebar} />
          <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            {/* <NotificationPanel /> */}
            {/* <Service /> */}
            {/* <Chat /> */}
            {/* <ProfilePanel onLogOut={() => {}} /> */}
            {/* <UserTable /> */}
            {/* <SpecialistList /> */}
            {/* <SpecialityList /> */}
            <AdminList />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
