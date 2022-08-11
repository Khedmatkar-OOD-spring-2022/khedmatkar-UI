import React, { useEffect, useState } from "react";
import { Button, ListGroup, Row, Table } from "react-bootstrap";

import { css, StyleSheet } from "aphrodite";
import { toast } from "react-toastify";
import urls from "../common/urls";
import { useFetch } from "../utils/useFetch";
import { useNavigate } from "react-router-dom";
import { TechnicalissueCreate } from "./modals/technicalissue";

const TechnicalIssuePanel = ({ isAdmin }) => {
  const [technicalIssues, setTechnicalIssues] = useState();
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
              <th>شماره درخواست</th>
              <th>نام تخصص</th>
              <th>وضعیت</th>
              <th>مدرک بارگذاری شده</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {/* {specialtyList &&
            specialtyList.map((req) => (
              <tr key={req.id}>
                <td> {req.id} </td>
                <td> {req.specialtyDTO.name} </td>
                <td> {getStatusMessage(req.status)} </td>
                <td>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      saveAs(
                        urls.storage.downloadFile(req.filePath),
                        req.filePath
                      );
                    }}
                    disabled={!req.filePath}
                  >
                    <FiDownload />
                  </Button>{" "}
                </td>
                <td>
                  <div>
                    <h5>

                    </h5>
                  </div>
                </td>
              </tr>
            ))} */}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};
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
