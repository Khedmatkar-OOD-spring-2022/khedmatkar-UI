import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Tab, Table, Tabs } from "react-bootstrap";

import { StyleSheet } from "aphrodite";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Evaluation = ({ type }) => {
  //   const [questionaire, setQuestionaire] = useState();
  //   const { data, error, loading } = useFetch(urls.admin.getFeedbacks(), "GET");
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (error) {
  //       toast.error(error && error.message, {
  //         position: toast.POSITION.BOTTOM_RIGHT,
  //       });
  //     }
  //     if (typeof data == "string") {
  //       localStorage.removeItem("user");
  //       navigate("/login");
  //     }
  //     setQuestionaire(data);
  //   }, [error, data]);

  return <div dir="rtl"><AdminEvaluation /></div>;
};

const AdminEvaluation = () => {
  const [key, setKey] = useState("customer");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey="customer" title="ارزیابی مشتری"></Tab>
      <Tab eventKey="specialist" title="ارزیابی متخصص"></Tab>
    </Tabs>
  );
};
export default Evaluation;
