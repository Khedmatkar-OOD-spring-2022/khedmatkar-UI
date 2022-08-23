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
  if (specialists.length === 0) {
    return (
      <div style={{ right: "20%", position: "absolute", width: "80%" }}>
        <h2 style={{ padding: "10px", textAlign: "end" }}>
          {"نتیجه ای یافت نشد"}
        </h2>
      </div>
    );
  }
  return (
    <div style={{ right: "20%", position: "absolute", width: "80%" }}>
      <h2 style={{ padding: "10px", textAlign: "end" }}>{"نتیجه جست‌وجو"}</h2>
      <br />
      <Row className={css(styles.groupServicePanel)}>
        {specialists &&
          specialists.map((s) => (
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
            if (isLoggedIn) {
              navigate("/dashboard/search/" + searchInputRef.current.value);
              window.location.reload();
            } else {
              navigate("/search/" + searchInputRef.current.value);
              window.location.reload();
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
    <Card style={{ width: "25%", margin: "10px", backgroundColor: "#fefefe" }}>
      <Card.Img
        style={{
          width: "30%",
          position: "absolute",
          left: "2%",
          paddingTop: "2%",
        }}
        src={require("./../assets/avatar.png")}
      ></Card.Img>
      <div id="center">
        <Card.Body>
          <h2 className="card_title">
            <Card.Title>{firstName + " " + lastName}</Card.Title>
          </h2>
          <p className="card_description">
            <Card.Text>{email}</Card.Text>
          </p>
          <div dir="ltr" style={{}}>
            {specialty.map((e) => (
              <Badge style={{ margin: "5px" }} bg="secondary">
                {e.name}
              </Badge>
            ))}
          </div>
          <br />
          {specialty && specialty.length >0 ? (
            <ServiceReqWithSpecificSpecialist
              specialistId={id}
              specialty={specialty}
            />
          ) : null}
        </Card.Body>
      </div>
    </Card>
  );
}
