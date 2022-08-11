import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  ListGroup,
  Badge,
  Row,
  Container,
} from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import { useFetch } from "../../utils/useFetch";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useNavigate, useParams } from "react-router-dom";
import { getRequestStatusMessage } from "../../utils/statuses";
import { useAuth } from "../../providers/authentication";
import axios from "axios";

export default function RequestDetails() {
  const [user, _] = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  const { data, error, loading } = useFetch(
    urls.servic.servicRequestById(params.id),
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
    navigate("/chat/" + params.id);
  }
  return (
    <>
      <Container fluid>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
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
              <Row></Row>
              {details.acceptedSpecialist ? (
                <Row className={css(styles.groupServicePanel)}>
                  <h3 dir="rtl">متخصص قبول شده برای انجام کار</h3>
                  <SpecialistInfoCard
                    Img={
                      "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-character-avatar-icon-design-image_2292859.jpg"
                    }
                    name={
                      details.acceptedSpecialist.firstName +
                      "  " +
                      details.acceptedSpecialist.lastName
                    }
                    status={details.status}
                    description={details.acceptedSpecialist.email}
                    sendMessageAction={sendMessageAction}
                    id={params.id}
                  />
                </Row>
              ) : null}
              {details.candidateSpecialist ? (
                <Row className={css(styles.groupServicePanel)}>
                  <h4 dir="rtl">متخصصان کاندید برای انجام کار</h4>

                  <SpecialistInfoCard
                    Img={
                      "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-character-avatar-icon-design-image_2292859.jpg"
                    }
                    name={
                      details.candidateSpecialist.firstName +
                      "  " +
                      details.candidateSpecialist.lastName
                    }
                    description={details.candidateSpecialist.email}
                    status={details.status}
                    isCanceled={
                      details.status === "CANCELED" ||
                      details.status === "IN_PROGRESS"
                    }
                    sendMessageAction={sendMessageAction}
                    id={params.id}
                  />
                </Row>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
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
  id,
}) {
  function getFunctionByStatus(status) {
    switch (status) {
      case "CANCELED":
        return <></>;
      case "WAITING_FOR_CUSTOMER_ACCEPTANCE":
        return (
          <>
            {" "}
            <Button
              className="card_btn"
              variant="primary"
              disabled={isCanceled}
              onClick={() => acceptOffer(id)}
            >
              قبول پیشنهاد
            </Button>{" "}
            <Button
              className="card_btn"
              variant="outline-danger"
              disabled={isCanceled}
              onClick={() => rejectOffer(id)}
            >
              رد پیشنهاد
            </Button>{" "}
            <Button
              className="card_btn"
              variant="outline-warning"
              disabled={isCanceled}
              onClick={() => sendMessageAction()}
            >
              {"ارسال پیام"}
            </Button>
          </>
        );
      case "WAITING_FOR_SPECIALIST_ACCEPTANCE":
        return (
          <>
            {" "}
            <Button className="card_btn" variant="primary" disabled>
              قبول پیشنهاد
            </Button>{" "}
            <Button className="card_btn" variant="outline-danger" disabled>
              رد پیشنهاد
            </Button>{" "}
            <Button
              className="card_btn"
              variant="outline-warning"
              disabled
              onClick={() => sendMessageAction()}
            >
              {"ارسال پیام"}
            </Button>
          </>
        );
      case "IN_PROGRESS":
        return (
          <>
            <Button
              className="card_btn"
              variant="outline-warning"
              disabled={isCanceled}
              onClick={() => sendMessageAction()}
            >
              {"ارسال پیام"}
            </Button>
          </>
        );
      case "EVALUATION":
        return (
          <>
            <Button className="card_btn" variant="primary" onClick={() => {}}>
              ارزیابی
            </Button>{" "}
          </>
        );
      case "DONE":
        return <></>;
      default:
        break;
    }
  }
  return (
    <Card
      style={{ width: "90%", "flex-direction": "row" }}
      border={isCanceled ? "light" : "secondary"}
      disabled={status === "WAITING_FOR_SPECIALIST_ACCEPTANCE" || isCanceled}
    >
      <Card.Img
        variant="top"
        src={Img}
        style={{ width: "15%", margin: "10px" }}
      />
      <Card.Body>
        <h2 className="card_title">
          <Card.Title>{name}</Card.Title>
        </h2>
        <div dir="ltr">
          <Badge bg="dark">
            <h5>{getRequestStatusMessage(status)}</h5>
          </Badge>
          {"\n"}
        </div>
        <p className="card_description">
          <Card.Text>{description}</Card.Text>
        </p>
        {getFunctionByStatus(status)}
      </Card.Body>
    </Card>
  );
}
function acceptOffer(id) {
  axios
    .post(urls.servic.customerAccept(id), {}, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        toast.success("قبول درخواست خدمت با موفقیت انجام شد.", {
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
function rejectOffer(id) {
  axios
    .post(urls.servic.customerReject(id), {}, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        toast.success("رد درخواست خدمت با موفقیت انجام شد.", {
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

// function SpecialistInfoCard({
//   Img,
//   description,
//   isCanceled,
//   status,
//   name,
//   sendMessageAction,
// }) {
//   return (
//     <Card
//       style={{ width: "90%", "flex-direction": "row" }}
//       disabled={status === "WAITING_FOR_SPECIALIST_ACCEPTANCE" || isCanceled}
//     >
//       <Card.Img
//         variant="top"
//         src={Img}
//         style={{ width: "15%", margin: "10px" }}
//       />
//       <Card.Body>
//         <h2 className="card_title">
//           <Card.Title>{name}</Card.Title>
//         </h2>
//         <div dir="ltr">
//           <Badge bg="dark">
//             <h5>{getRequestStatusMessage(status)}</h5>
//           </Badge>
//           {"\n"}
//         </div>
//         <p className="card_description">
//           <Card.Text>{description}</Card.Text>
//         </p>
//         <Button className="card_btn" variant="primary" disabled={isCanceled} onClick={}>
//           قبول پیشنهاد
//         </Button>{" "}<Button className="card_btn" variant="outline-danger" disabled={isCanceled}>
//           رد پیشنهاد
//         </Button>{" "}
//         <Button
//           className="card_btn"
//           variant="outline-warning"
//           disabled={isCanceled}
//           onClick={() => sendMessageAction()}
//         >
//           {"ارسال پیام"}
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }
