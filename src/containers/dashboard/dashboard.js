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
import { useFetch } from "../../utils/useFetch";
import axios from "axios";
import SpecialityManagmentPanel from "../../components/specialityManagment";
const Dashboard = () => {
  const [user, _] = useAuth();
  const [use, setUse] = useState(false);
  const params = useParams();
  function delReq() {
    const requestOptions = {
      method:'delete',
      url: 'http://localhost:8080/api/specialties/2',
      withCredentials: true,
    };

    axios(requestOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then()
      .catch()
  }
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
          {/* <GetSection section={params.section} /> */}
          {/* <NotificationPanel /> */}
          {/* <Service /> */}
          {/* <Chat /> */}
          {/* {use ? <ProfilePanel onLogOut={() => {}} /> : null} */}
          {/* <UserTable /> */}
          {/* <SpecialistList /> */}
          {/* <SpecialityManagmentPanel /> */}
          {/* <SpecialityApproveList /> */}
          {/* <SuggestedRequests /> */}
          {/* <AdminList /> */}

          {/* <Button onClick={() => delReq()}>Show Profile</Button> */}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
