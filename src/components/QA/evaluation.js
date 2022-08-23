import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Tab, Table, Tabs } from "react-bootstrap";

import { StyleSheet } from "aphrodite";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EvaluationCreateQuestion, EvaluationForm } from "./evaluationForm";
import { useFetch } from "../../utils/useFetch";
import urls from "../../common/urls";
import { ShowError } from "../../common/errors";

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

  return (
    <div dir="rtl">
      <AdminEvaluation />
    </div>
  );
};

const AdminEvaluation = () => {
  const [questions, setQuestions] = useState([]);
  const [key, setKey] = useState("CUSTOMER");
  const { data, error, loading } = useFetch(
    urls.evaluation.getQuestions(),
    "GET"
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      ShowError((error))
    }
    if (typeof data == "string") {
      localStorage.removeItem("user");
      navigate("/login");
    }
    setQuestions(data);
  }, [error, data]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey="CUSTOMER" title="ارزیابی مشتری">
        <EvaluationCreateQuestion userType={key} />
        <hr />
        <EvaluationForm type={key} questions={questions} />
      </Tab>
      <Tab eventKey="SPECIALIST" title="ارزیابی متخصص">
        <EvaluationCreateQuestion userType={key} />
        <hr />
        <EvaluationForm type={key} questions={questions} />
      </Tab>
    </Tabs>
  );
};
export default Evaluation;
