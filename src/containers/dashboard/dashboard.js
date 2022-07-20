import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import NotificationPanel from "../../common/notification";
import ChatRoom from "../../components/chat/ChatRoom";
import ProfilePanel from "../../components/profile/Panel/Panel";
import AdminList from "../../components/request/adminList";
import ServiceRequest from "../../components/request/servicRequest";
import UserTable from "../../components/request/userTable";
import SpecialistList from "../../components/request/specialistList";

import ServicePanel from "../../components/servicePanel";
import { useAuth } from "../../providers/authentication";
import "./dashboard.css";
import SpecialityList from "../../components/profile/specialityList";
import SpecialityApproveList from "../../components/specialityList";
import SuggestedRequests from "../../components/request/serviceSuggestedRequests";
const Dashboard = () => {
  const [user, _] = useAuth();
  const [use, setUse] = useState(false);
  const params = useParams();

  function GetSection({ section }) {
    switch (params.section) {
      case "notification":
        return <NotificationPanel />;
      case "make-request":
        return <ServiceRequest />;
      case "request-list":
        return <ServicePanel />;
      case "chat":
        return <ChatRoom user={user} />;
      case "profile":
        return <ProfilePanel />;
      case "admin":
        return <AdminList />;
      default:
        return <></>;
    }
  }
  return (
    <>
      <Container fluid>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <GetSection section={params.section} />
          {/* <NotificationPanel /> */}
          {/* <Service /> */}
          {/* <Chat /> */}
          {/* {use ? <ProfilePanel onLogOut={() => {}} /> : null} */}
          {/* <UserTable /> */}
          {/* <SpecialistList /> */}
          {/* <SpecialityApproveList /> */}
          <SuggestedRequests />
          {/* <AdminList /> */}
          {/* <Button onClick={() => setUse(!use)}>Show Profile</Button> */}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
