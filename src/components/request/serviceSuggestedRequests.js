import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, Badge, Row } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getRequestStatusMessage } from "../../utils/statuses";

export default function SuggestedRequests() {
  const [customerList, setCustomerList] = useState();
  const { data, error, loading } = useFetch(urls.servic.servicRequest(), "GET");
  useEffect(() => {
    if (error) {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    console.log(data);
    setCustomerList(data);
  }, [error, data]);

  return (
    <>
      <Row dir="rtl" style={{ border: "2rem" }}>
        <h2 className="text-center" style={{ padding: "1em" }}>
          {"فهرست درخواست خدمت ها پیشنهادی"}
        </h2>
      </Row>
      <Row className={css(styles.groupServicePanel)}>
        {customerList &&
          customerList.map((c) => (
            <>
              {" "}
              <RequestInfoCard
                id={c.id}
                Img={require("./../../assets/avatar.png")}
                name={c.receptionDate}
                Title={c.specialty.name}
                address={c.address}
                waitingForAcceptance={
                  c.status === "WAITING_FOR_CUSTOMER_ACCEPTANCE"
                }
                status={c.status}
                isCanceled={c.status === "CANCELED"}
              />
            </>
          ))}
      </Row>
      {/* <Row className={css(styles.groupServicePanel)}>
        <RequestInfoCard
          Img={require("./../../assets/avatar.png")}
          Title="تعمیرات آسانسور"
          name="حسام شاپوری"
          address="تهران میدان آزادی"
          inProgress
        />

        <RequestInfoCard
          Img={require("./../../assets/avatar.png")}
          Title="تعمیرات آسانسور"
          name="کریم اصلانی"
          address="تهران"
        />
      </Row> */}
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
function RequestInfoCard({
  id,
  Img,
  address,
  Title,
  name,
  isCanceled,
  status,
}) {
  const navigate = useNavigate();
  function getFunctionByStatus(status) {
    switch (status) {
      case "CANCELED":
        return <></>;
      case "WAITING_FOR_CUSTOMER_ACCEPTANCE":
        return (
          <>
            <Button
              className="card_btn"
              variant="outline-warning"
              onClick={() => {
                navigate("/chat/" + id);
              }}
            >
              {"ارسال پیام"}
            </Button>
          </>
        );
      case "WAITING_FOR_SPECIALIST_ACCEPTANCE":
        return (
          <>
            <Button
              className="card_btn"
              variant="primary"
              onClick={() => acceptOffer(id)}
            >
              قبول پیشنهاد
            </Button>{' '}
            <Button
              className="card_btn"
              variant="outline-danger"
              onClick={() => rejectOffer(id)}
            >
              رد پیشنهاد
            </Button>
          </>
        );
      case "IN_PROGRESS":
        return (
          <>
            <Button
              className="card_btn"
              variant="primary"
              onClick={() => finishRequest(id)}
            >
              اتمام درخواست خدمت
            </Button>{' '}
            <Button
              className="card_btn"
              variant="outline-warning"
              onClick={() => {
                navigate("/chat/" + id);
              }}
            >
              {"ارسال پیام"}
            </Button>
          </>
        );
      case "EVALUATION":
        return <></>;
      case "DONE":
        return (
          <>
            {" "}
            <Button className="card_btn" variant="primary" onClick={() => {}}>
              مشاهده ارزیابی
            </Button>
          </>
        );
      default:
        break;
    }
  }
  return (
    <Card style={{ width: "45%", "flex-direction": "row" }}>
      <Card.Img
        variant="top"
        src={Img}
        style={{ width: "25%", margin: "10px" }}
      />
      <Card.Body>
        <h2 className="card_title">
          <Card.Title>{Title}</Card.Title>
        </h2>
        <h3 className="card_title">
          <Card.Title dir="rtl">
            {"زمان تحویل: " + name.slice(0, 10)}
          </Card.Title>
        </h3>
        <p className="card_description">
          <Card.Text>{"آدرس : " + address}</Card.Text>
        </p>
        <div>
          <div dir="ltr">
            <Badge bg="dark">{getRequestStatusMessage(status)}</Badge>
            {"\n"}
          </div>
          {getFunctionByStatus(status)}
        </div>
      </Card.Body>
    </Card>
  );
}

function acceptOffer(id) {
  axios
    .post(urls.servic.specialistAccept(id), {}, { withCredentials: true })
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
    .post(urls.servic.specialistReject(id), {}, { withCredentials: true })
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
function finishRequest(id) {
  axios
    .post(urls.servic.specialistFinish(id), {}, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        toast.success("اتمام درخواست خدمت با موفقیت انجام شد.", {
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