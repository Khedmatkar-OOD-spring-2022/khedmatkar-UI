import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import Maps from "../../common/maps";

import NotificationPanel from "../../common/notification";
import ProfilePanel from "../../components/profile/Panel/Panel";
import SpecialityList from "../../components/profile/specialityList";
import Evaluation from "../../components/QA/evaluation";
import RequestDetails from "../../components/request/requestDetails";
import SuggestedRequests from "../../components/request/serviceSuggestedRequests";
import ServiceRequest from "../../components/request/servicRequest";
import UserTable from "../../components/request/userTable";

import TechnicalIssuePanel from "../../components/technicalIssue";
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
        return <Navigate to={"/dashboard/request-details/" + detailsId} />;
      case "profile":
        return <ProfilePanel />;
      case "technicalissues":
        return <TechnicalIssuePanel />;
      case "location":
        return <Maps />;
      case "evaluation":
        return <Evaluation type="customer" />;
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
      case "profile":
        return <ProfilePanel />;
      case "technicalissues":
        return <TechnicalIssuePanel />;
      case "evaluation":
        return <Evaluation type="specialist" />;
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
