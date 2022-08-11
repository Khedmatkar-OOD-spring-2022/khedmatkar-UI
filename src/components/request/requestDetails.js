import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, Badge, Row } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import { useFetch } from "../../utils/useFetch";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useNavigate } from "react-router-dom";
import { getRequestStatusMessage } from "../../utils/statuses";

export default function RequestDetails({ id }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  const { data, error, loading } = useFetch(
    urls.servic.servicRequestById(id),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    console.log(data);
    setDetails(data);
  }, [error, data]);

  function sendMessageAction() {
    navigate("/chat/" + id);
  }
  return (
    <>
      {details ? (
        <div>
          <Row dir="rtl" style={{ border: "2rem" }}>
            <ListGroup className={css(styles.serviceRequest)}>
              <ListGroup.Item>
                <h4>درخواست خدمت برای :{details.specialty.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>شماره درخواست: {details.id}</ListGroup.Item>
              <ListGroup.Item>
                تاریخ: {details.creation.slice(0, 10)}
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <h5 dir="rtl">لیست متخصصانی که به درخواست شما جواب دادند:</h5>
          </Row>
          {details.candidateSpecialist ? (
            <Row className={css(styles.groupServicePanel)}>
              <SpecialistInfoCard
                Img={require("./../../assets/avatar.png")}
                name={
                  details.candidateSpecialist.firstName +
                  "  " +
                  details.candidateSpecialist.lastName
                }
                description={details.candidateSpecialist.email}
                status={details.status}
                isCanceled={details.status === "CANCELED"}
                sendMessageAction={sendMessageAction}
              />
            </Row>
          ) : null}
          {details.acceptedSpecialist ? (
            <Row className={css(styles.groupServicePanel)}>
              <SpecialistInfoCard
                Img={require("./../../assets/avatar.png")}
                name={
                  details.acceptedSpecialist.firstName +
                  details.acceptedSpecialist.lastName
                }
                description={details.acceptedSpecialist.email}
                sendMessageAction={sendMessageAction}
              />
            </Row>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
const styles = StyleSheet.create({
  groupServicePanel: {
    direction: "rtl",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10px",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  paginationRow: {
    display: "flex",
    alignItems: "flex-start",
  },
  serviceRequest: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10px",
    border: "2px",
  },
});
function SpecialistInfoCard({
  Img,
  description,
  isCanceled,
  status,
  name,
  sendMessageAction,
}) {
  return (
    <Card style={{ width: "45%", "flex-direction": "row" }}>
      <Card.Img variant="top" src={Img} style={{ width: "30%" }} />
      <Card.Body>
        <h2 className="card_title">
          <Card.Title>{name}</Card.Title>
        </h2>
        <div dir="ltr">
              <Badge bg="dark">{getRequestStatusMessage(status)}</Badge>
              {"\n"}
            </div>
        <p className="card_description">
          <Card.Text>{description}</Card.Text>
        </p>
        <Button className="card_btn" variant="primary" disabled={isCanceled}>
          قبول پیشنهاد
        </Button>{" "}
        <Button
          className="card_btn"
          variant="outline-warning"
          disabled={isCanceled }
          onClick={() => sendMessageAction()}
        >
          {"ارسال پیام"}
        </Button>
      </Card.Body>
    </Card>
  );
}
