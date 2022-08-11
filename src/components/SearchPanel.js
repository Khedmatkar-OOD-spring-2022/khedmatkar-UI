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
import { useAuth } from "../providers/authentication";
import ServiceReqWithSpecificSpecialist from "./modals/serviceReqWithSpecificSpecialist";

export default function SearchPanel({ specialists }) {
  const [, isLoggedIn] = useAuth();
  const searchInputRef = useRef("");
  const navigate = useNavigate();
  return (
    <div style={{ right: "20%", position: "absolute" }}>
      <h2 style={{ padding: "10px", textAlign: "end" }}>{"نتیجه جست‌وجو"}</h2>
      {/* <Row>
        <Container style={{ width: "30%" }}>
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
                if (isLoggedIn) {
                  navigate("/dashboard/search/" + searchInputRef.current.value);
                } else {
                  navigate("/search/" + searchInputRef.current.value);
                }
              }}
              style={{ fontSize: "26px" }}
            >
              جست‌وجو
            </Button>
          </Form>
        </Container>
      </Row> */}
      <br />
      <Row className={css(styles.groupServicePanel)}>
        {specialists.map((s) => (
          <>
            <SpecialistCard
              firstName={s.firstName}
              lastName={s.lastName}
              email={s.email}
              specialty={s.specialty}
              id={s.id}
            />
          </>
        ))}
      </Row>
      <Row className={css(styles.paginationRow)}>
        {/* <CustomPagination /> */}
      </Row>
    </div>
  );
}

export const SearchButton = () => {
  const [, isLoggedIn] = useAuth();
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
            if (isLoggedIn) {
              navigate("/dashboard/search/" + searchInputRef.current.value);
            } else {
              navigate("/search/" + searchInputRef.current.value);
            }
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
function SpecialistCard({ firstName, lastName, email, id, specialty }) {
  return (
    <Card style={{ width: "25%", margin: "10px" }}>
      <div id="center">
        <Card.Body>
          <h2 className="card_title">
            <Card.Title>{firstName + " " + lastName}</Card.Title>
          </h2>
          <p className="card_description">
            <Card.Text></Card.Text>
            <Card.Text>{email}</Card.Text>
          </p>
          <div dir="ltr">
            {specialty.map((e) => (
              <Badge style={{ margin: "5px" }} bg="secondary">
                {e.name}
              </Badge>
            ))}
          </div>
          <br />
          <ServiceReqWithSpecificSpecialist
            specialistId={id}
            specialty={specialty}
          />
        </Card.Body>
      </div>
    </Card>
  );
}
