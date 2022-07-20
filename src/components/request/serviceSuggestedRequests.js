import React from "react";
import { Button, Card, ListGroup, Badge, Row } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

export default function SuggestedRequests() {
  return (
    <>
      <Row dir="rtl" style={{ border: "2rem" }}>
        <h2 className="text-center" style={{ padding: "1em" }}>
          {"فهرست درخواست خدمت ها پیشنهادی"}
        </h2>
      </Row>
      <Row className={css(styles.groupServicePanel)}>
        <RequestInfoCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          name="محمد محمدی"
          address="تهران میدان آزادی"
        />

        <RequestInfoCard
          Img={require("./../../assets/avatar.png")}
          Title="تعمیرات آسانسور"
          name="علی محمدی"
          address="تهران میدان آزادی"
          isAccepted
        />
      </Row>
      <Row className={css(styles.groupServicePanel)}>
        <RequestInfoCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          name="حسام شاپوری"
          address="تهران میدان آزادی"
          inProgress
        />

        <RequestInfoCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          name="کریم اصلانی"
          address="تهران"
        />
      </Row>
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
  Img,
  address,
  Title,
  name,
  isAccepted,
  inProgress,
}) {
  return (
    <Card style={{ width: "45%", "flex-direction": "row" }}>
      <Card.Img variant="top" src={Img} style={{ width: "30%" }} />
      <Card.Body>
        <h2 className="card_title">
          <Card.Title>{name}</Card.Title>
        </h2>
        <h3 className="card_title">
          <Card.Title>{Title}</Card.Title>
        </h3>
        <p className="card_description">
          <Card.Text>{address}</Card.Text>
        </p>
        {inProgress ? (
          <div>
            <div dir="ltr">
              <Badge bg="info">درحال انجام</Badge>
              {"\n"}
            </div>
            <Button className="card_btn" variant="outline-warning">
              {"ارسال پیام"}
            </Button>
          </div>
        ) : isAccepted ? (
          <div>
            <div dir="ltr">
              <Badge bg="secondary">در حال بررسی توسط مشتری</Badge>
              {"\n"}
            </div>
            <Button className="card_btn" variant="outline-warning" disabled>
              {"ارسال پیام"}
            </Button>
          </div>
        ) : (
          <Button className="card_btn" variant="primary">
            قبول پیشنهاد
          </Button>
        )}{" "}
      </Card.Body>
    </Card>
  );
}
