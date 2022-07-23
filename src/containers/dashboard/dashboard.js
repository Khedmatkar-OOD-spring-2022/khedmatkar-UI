import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import NotificationPanel from "../../common/notification";
import ChatRoom from "../../components/chat/ChatRoom";
import ProfilePanel from "../../components/profile/Panel/Panel";
import SpecialityList from "../../components/profile/specialityList";
import RequestDetails from "../../components/request/requestDetails";
import SuggestedRequests from "../../components/request/serviceSuggestedRequests";
import ServiceRequest from "../../components/request/servicRequest";
import UserTable from "../../components/request/userTable";

import ServicePanel from "../../components/servicePanel";
import { useAuth } from "../../providers/authentication";
import "./dashboard.css";
const Dashboard = () => {
  const [user, _] = useAuth();
  const params = useParams();
  const [detailsId, setDetailsId] = useState();
  function GetCustomerSection({ section }) {
    switch (section) {
      case "notification":
        return <NotificationPanel />;
      case "make-request":
        return <ServiceRequest />;
      case "request-list":
        return <UserTable setDetailsId={setDetailsId} />;
      case "request-details":
        return <RequestDetails id={detailsId} />;
      case "chat":
        return <ChatRoom user={user} />;
      case "profile":
        return <ProfilePanel />;

      default:
        return <></>;
    }
  }
  function GetSpecialistSection({ section }) {
    switch (section) {
      case "notification":
        return <NotificationPanel />;
      case "addSpecialty":
        return <SpecialityList />;
      case "request-list":
        return <SuggestedRequests />;
      case "chat":
        return <ChatRoom user={user} />;
      case "profile":
        return <ProfilePanel />;
      default:
        return <></>;
    }
  }
  return (
    <>
      <Container fluid>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          {user.type === "CUSTOMER" ? (
            <GetCustomerSection section={params.section} />
          ) : (
            <GetSpecialistSection section={params.section} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
