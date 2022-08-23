import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NotificationPanel from "../common/notification";
import FeedbackPanel from "../components/feedbacks";
import ProfilePanel from "../components/profile/Panel/Panel";
import Evaluation from "../components/QA/evaluation";
import AdminList from "../components/request/adminList";
import UserTable from "../components/request/userTable";
import ServicePanel from "../components/servicePanel";
import SpecialityApproveList from "../components/specialityList";
import SpecialityManagmentPanel from "../components/specialityManagment";
import SystemConfig from "../components/systemSettings";
import TechnicalIssuePanel from "../components/technicalIssue";
import { useAuth } from "../providers/authentication";
import "./dashboard/dashboard.css";
const Admin = () => {
  const [user, _] = useAuth();
  const params = useParams();
  function GetAdminSection({ section }) {
    switch (section) {
      case "notification":
        return <NotificationPanel />;
      case "list":
        return <AdminList />;
      case "request-list":
        return <UserTable isAdmin />;
      case "profile":
        return <ProfilePanel />;
      case "speciality-approve":
        return <SpecialityApproveList />;
      case "speciality-managment":
        return <SpecialityManagmentPanel />;
      case "feedbacks":
        return <FeedbackPanel />;
      case "technicalissues":
        return <TechnicalIssuePanel isAdmin />;
      case "system-settings":
        return <SystemConfig />;
      case "evaluation":
        return <Evaluation type="admin" />;
      case "evaluation-list":
        return <Evaluation type="admin" />;
      default:
        return <></>;
    }
  }
  return (
    <>
      <Container fluid>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <GetAdminSection section={params.section} />
        </div>
      </Container>
    </>
  );
};

export default Admin;
