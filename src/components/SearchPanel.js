import React, { useRef } from "react";
import {
  Button,
  Card,
  ListGroup,
  Badge,
  Row,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import { useNavigate } from "react-router-dom";

export default function SearchPanel() {
  const searchInputRef = useRef("");
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Container style={{ width: "40%" }}>
          <Form style={{ display: "flex" }} dir={"rtl"}>
            <FormControl
              type="search"
              placeholder="به چه خدمتی نیاز دارید؟"
              aria-label="Search"
              style={{ fontSize: "26px" }}
              ref={searchInputRef}
            />
            <Button
              variant="outline-success"
              onClick={() => {
                console.log(searchInputRef);
                navigate("/search/" + searchInputRef.current.value);
              }}
              style={{ fontSize: "26px" }}
            >
              جست‌وجو
            </Button>
          </Form>
        </Container>
      </Row>
      <br />
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
        {/* <CustomPagination /> */}
      </Row>
    </>
  );
}

export const SearchButton = () => {
  const searchInputRef = useRef("");
  const navigate = useNavigate();
  return (
    <Container id="cont" style={{ flexBasis: "content" }}>
      <Form className="d-inline-flex" dir={"rtl"}>
        <FormControl
          type="search"
          placeholder="به چه خدمتی نیاز دارید؟"
          aria-label="Search"
          ref={searchInputRef}
        />
        <Button
          variant="outline-success"
          onClick={() => {
            console.log(searchInputRef);
            navigate("/search/" + searchInputRef.current.value);
          }}
        >
          جست‌وجو
        </Button>
      </Form>
    </Container>
  );
};

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
