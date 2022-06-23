import React from "react";
import { Button, Card, Pagination, Row } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import CustomPagination from "../common/pagination";

export default function ServicePanel() {
  return (
    <>
      <Row className={css(styles.groupServicePanel)}>
        <SpecialistCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0PrHZI1jENiXK5lF_4tTupp9ceDVZCS01A&usqp=CAU"
          Title="لوله کش"
          description="  متخصص لوله کشی ساختمان با ده ماه ضمانت"
        />

        <SpecialistCard
          Img="https://mrdariush.ir/wp-content/uploads/2021/09/%D8%A2%D8%B1%D8%A7%DB%8C%D8%B4%DA%AF%D8%B1-%DA%A9%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%D8%AA%D8%AE%D8%B5%D8%B5%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F-1.jpg"
          Title="آرایشگر"
          description="  آرایشگر به همراه لوازم در محل شما جهت انجام خدمات"
        />

        <SpecialistCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          description="  متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
        />

        <SpecialistCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          description="  متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
        />
      </Row>
      <Row className={css(styles.groupServicePanel)}>
        <SpecialistCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0PrHZI1jENiXK5lF_4tTupp9ceDVZCS01A&usqp=CAU"
          Title="لوله کش"
          description="  متخصص لوله کشی ساختمان با ده ماه ضمانت"
        />

        <SpecialistCard
          Img="https://mrdariush.ir/wp-content/uploads/2021/09/%D8%A2%D8%B1%D8%A7%DB%8C%D8%B4%DA%AF%D8%B1-%DA%A9%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%D8%AA%D8%AE%D8%B5%D8%B5%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F-1.jpg"
          Title="آرایشگر"
          description="  آرایشگر به همراه لوازم در محل شما جهت انجام خدمات"
        />

        <SpecialistCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          description="  متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
        />

        <SpecialistCard
          Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp5REx6_ydtZ8n95CJp04TykgFgyVGNrmdXvSHCpRBmEu0ik_wTPpok92vvVirHojLao&usqp=CAU"
          Title="تعمیرات آسانسور"
          description="  متخصص تعمیرات آسانسور ساختمان با دو سال ضمانت"
        />
      </Row>
      <Row className={css(styles.paginationRow)}>
        <CustomPagination />
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
});
function SpecialistCard(props) {
  return (
    <Card style={{ width: "20%" }}>
      <div id="center">
        <Card.Img variant="top" src={props.Img} width="120rem" />
        <Card.Body>
          <h2 className="card_title">
            <Card.Title>{props.Title}</Card.Title>
          </h2>
          <p className="card_description">
            <Card.Text>{props.description}</Card.Text>
          </p>
          <Button className="card_btn" variant="primary">
            ارسال درخواست
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}
