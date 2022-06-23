import React from "react";
import { Button, Card, ListGroup, Badge, Row } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

export default function SpecialistList() {
  return (
    <>
      <Row dir="rtl" style={{border:'2rem'}}>
        <ListGroup  className={css(styles.serviceRequest)}>
          <ListGroup.Item >
            <h4>درخواست خدمت برای : باربری - وانت</h4>
          </ListGroup.Item>
          <ListGroup.Item >شماره درخواست: ۱۲۳۴۵۶</ListGroup.Item>
          <ListGroup.Item >تاریخ: ۱۴۰۱/۱/۱</ListGroup.Item>
        </ListGroup>
      </Row>
      <Row>
        <h5 dir="rtl">
            لیست متخصصانی که به درخواست شما جواب دادند:
        </h5>
      </Row>
      <Row className={css(styles.groupServicePanel)}>
        <SpecialistInfoCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          name="محمد محمدی"
          description="  متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
        />

        <SpecialistInfoCard
          Img={require("./../../assets/avatar.png")}
          Title="تعمیرات آسانسور"
          name="علی محمدی"
          description="  متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
        />
      </Row>
      <Row className={css(styles.groupServicePanel)}>
        <SpecialistInfoCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          name="حسام شاپوری"
          description="  متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
        />

        <SpecialistInfoCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          name="کریم اصلانی"
          description="متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
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
  serviceRequest:{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10px",
    border: "2px",
  }
});
function SpecialistInfoCard({ Img, description, Title, name }) {
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
          <Card.Text>{description}</Card.Text>
        </p>
        <Button className="card_btn" variant="primary">
          قبول پیشنهاد
        </Button>{" "}
        <Button className="card_btn" variant="outline-warning">
          {"ارسال پیام"}
        </Button>
      </Card.Body>
    </Card>
  );
}
