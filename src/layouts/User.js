import React from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FixedPlugin from "../common/fixedPlugin";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import { useAuth } from "../providers/authentication";
import { CustomerSidebar, SpecialistSidebar } from "./options";
import sidebarImage from "./../assets/img/welcome3.jpg";

const UserLayout = ({ children, noNavbar = false }) => {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const [user, isLoggedIn] = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else if (user.type === "ADMIN") {
    return <Navigate to="/admin" />;
  }
  return (
    <Container fluid>
      <MainNavbar user={user} />
      <Row>
        <MainSidebar
          sidebarItems={
            user.type === "CUSTOMER" ? CustomerSidebar : SpecialistSidebar
          }
        />
        {children}
      </Row>
      {/* <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      /> */}
      <ToastContainer />
    </Container>
  );
};

export default UserLayout;
