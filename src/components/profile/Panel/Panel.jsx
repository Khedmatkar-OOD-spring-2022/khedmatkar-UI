import React from "react";

// import styles of this component
import styles from "./Panel.module.css";
import LoadingScreen from "react-loading-screen";

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
import { useAuth } from "../../../providers/authentication";
import axios from "axios";
import { toast } from "react-toastify";

const ProfilePanel = () => {
  const [toggle, setToggle] = useState("information");
  const [user, _] = useAuth();
  const sidebarLinks = [
    {
      id: 1,
      border: true,
      text: "اطلاعات شخصی",
      icon: <UserEdit size="20" color="black" />,
      name: "information",
      active: true,
    },
    {
      id: 2,
      border: true,
      text: "کلمه عبور",
      name: "password",
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
              username={user.email}
              userBirthday={""}
              userEmail={user.email}
              sidebarLinks={sidebarLinks}
              onChangeToggle={setToggle}
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
                firstName={user.firstName}
                lastName={user.lastName}
                username={user.email}
                userBirthday={""}
                userEmail={user.email}
                sidebarLinks={sidebarLinks}
                onChangeInfo={updateUserInfo}
              />
            )}
            {toggle === "password" && (
              <UserChangePassword
                password={user.password}
                onChangeInfo={updatePassword}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};
function updatePassword(password) {
  console.log(password);
  axios
    .post(
      urls.common.updatePassword(),
      {
        password: password,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("بروزرسانی با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    })
    .catch((error) => {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
function updateUserInfo(firstName, lastName, email) {
  axios
    .post(
      urls.common.updateUserInfo(),
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("بروزرسانی با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        localStorage.removeItem("user");
      }
    })
    .catch((error) => {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
ProfilePanel.propTypes = {
  // onLogOut: PropTypes.func.isRequired,
};

export default ProfilePanel;
