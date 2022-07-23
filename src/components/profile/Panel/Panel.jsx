import React from "react";

// import styles of this component
import styles from "./Panel.module.css";
import LoadingScreen from 'react-loading-screen';

// import other component
import UserCard from "./UserCard/UserCard";
import UserChangePassword from "./UserChangePassword/UserChangePassword";
import UserInformation from "./UserInformation/UserInformation";

// import other pkgs
import { Lock, ProfileCircle, UserEdit } from "iconsax-react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

// import utils
import urls from "../../../common/urls";
import { useFetch } from "../../../utils/useFetch";
import { useState } from "react";

const ProfilePanel = () => {
  const [toggle,setToggle]= useState("information")
  const sidebarLinks = [
    {
      id: 1,
      border: true,
      text: "اطلاعات شخصی",
      icon: <UserEdit size="20" color="black" />,
      active: true,
    },
    {
      id: 2,
      border: true,
      text: "کلمه عبور",
      icon: <Lock size="20" color="black" />,
      active: false,
    },
    {
      id: 3,
      border: true,
      text: "تنظیمات",
      icon: <ProfileCircle size="20" color="black" />,
      active: false,
    },
  ];
  const { data, error, loading } = useFetch({url:urls.auth.profile(),method:"GET"});

  if(loading){
    return (<LoadingScreen />);
  }else{
    console.log(data)
    console.log(error)
  }

  return (
    <div
      className={`${styles["panel-wrapper"]} d-flex align-items-center justify-content-center`}
    >
      {/* <div className={styles['bg-overlay']}></div> TODO */}
      <div
        className={`${styles.container} d-flex justify-content-center align-items-center p-0`}
      >
        <Row
          className={`${styles["panel"]} flex-column flex-md-row justify-content-center align-items-center px-3`}
        >
          <Col
            xs={12}
            sm={8}
            md={4}
            className="d-flex flex-column justify-content-center p-0"
          >
            <UserCard
              username={data.username}
              userBirthday={data.birthday}
              // userEmail={data.user.email}
              sidebarLinks={sidebarLinks}
              // onChangeToggle={this.changeToggle}
            />
          </Col>

          <Col
            xs={12}
            sm={8}
            md={7}
            className={`${styles["panel-column"]} bg-white border mt-5 mt-md-0 ms-md-5 p-5`}
          >
            {toggle === "information" && (
              <UserInformation
                username={data.username}
                firstName={data.firstName}
                lastName={data.lastName}
                email={data.email}
                birthday={data.birthday}
                // onChangeInfo={this.changeUserInformation}
              />
            )}
            {toggle === "password" && (
              <UserChangePassword
                password={data.password}
                // onChangeInfo={this.changeUserInformation}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

ProfilePanel.propTypes = {
  // onLogOut: PropTypes.func.isRequired,
};

export default ProfilePanel;
