import React, { useEffect, useState } from "react";
import { Button, ListGroup, Row, Table } from "react-bootstrap";

import { css, StyleSheet } from "aphrodite";
import { toast } from "react-toastify";
import urls from "../common/urls";
import { useFetch } from "../utils/useFetch";
import { useNavigate } from "react-router-dom";
import { TechnicalissueAnswer, TechnicalissueCreate } from "./modals/technicalissue";
import axios from "axios";

const TechnicalIssuePanel = ({ isAdmin }) => {
  const [technicalIssues, setTechnicalIssues] = useState([]);
  const [showNewModal, setShowNewModal] = useState(false);
  const { data, error, loading } = useFetch(urls.technicalIssue.get(), "GET");
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (typeof data == "string") {
      localStorage.removeItem("user");
      navigate("/login");
    }
    setTechnicalIssues(data);
  }, [error, data]);

  return (
    <div dir="rtl">
      <h2 className="text-center" style={{ padding: "1em" }}>
        {"بررسی وضعیت مشکلات فنی"}
      </h2>
      <TechnicalissueCreate show={showNewModal} setShow={setShowNewModal} />
      {!isAdmin ? (
        <div style={{ textAlign: "left" }}>
          <Button color="primary" onClick={() => setShowNewModal(true)}>
            {"ثبت مشکل"}
          </Button>{" "}
        </div>
      ) : null}
      <Row>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th width="10%">شماره درخواست</th>
              <th width="10%">موضوع </th>
              <th width="30%">جزئیات </th>
              <th width="10%">وضعیت</th>
              <th >پاسخ</th>
              {isAdmin ? <th>عملیات</th> : null}
            </tr>
          </thead>
          <tbody>
            {technicalIssues &&
              technicalIssues.map((req) => (
                <tr key={req.id}>
                  <td> {req.id} </td>
                  <td> {req.ticket.title} </td>
                  <td> {req.ticket.content} </td>
                  <td> {getStatusMessage(req.status)} </td>
                  <td> {req.answers && req.answers.length>0 && req.answers[req.answers.length-1].content} </td>
                  {isAdmin ? (
                    <td>
                      <TechnicalissueAnswer disabled={req.status === "CLOSED"} name='پاسخ' id={req.id} />
                        {"   "}
                      <Button
                        variant="outline-danger"
                        disabled={req.status === "CLOSED"}
                        onClick={() => closeTechnicalIssue(req.id)}
                      >
                        بستن
                      </Button>
                    </td>
                  ) : null}
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};
function closeTechnicalIssue(id) {
  axios
    .post(urls.technicalIssue.close(id), {}, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        toast.success(" مشکل با موفقیت بسته شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
function getStatusMessage(status) {
  switch (status) {
    case "OPENED":
      return "درحال بررسی";
    case "CLOSED":
      return "بسته شده";

    default:
      return "نامشخص";
  }
}
const styles = StyleSheet.create({
  notificationList: {
    direction: "rtl",
  },
  notificationItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10px",
  },
});
export default TechnicalIssuePanel;
