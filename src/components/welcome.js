import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./welcome.css";
const Welcome = ({}) => {
  return (
    <Container className="land">
      <Row>
        <Col>
          <img
            className="back"
            src={require("./../assets/shape.jpg")}
            alt="Background"
          />
        </Col>

        <Col>
          <h1 className="text-color">خدمتکار</h1>
          <br />
          <h5>پلتفرم آنلاین خدمات منزل</h5>
          <p>
            {" "}
            در خدمتکار درخواست خود را ثبت کنید تا در سریع ترین
            <br /> زمان از تخصص بهترین متخصصان کشور استفاده کنید
          </p>
          <Button variant="primary">جستجو انواع خدمت</Button>&nbsp;&nbsp;
          <Button variant="info">ثبت نام </Button>
          <br />
          <div>
            <img
              width={"400px"}
              className="a"
              src={require("./../assets/a.jpg")}
              alt="Background"
            />
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <h2 className="text-color">سوالات پر تکرار</h2>
          <br />
          <hr class="solid"></hr>
          <Questions />
          <br />
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <br />
        <br />
        <hr class="solid"></hr>
        <h2 className="text-color">تیم ما</h2>
        <br />
        <br />
        <br />
        <Cardinfo />
      </Row>
    </Container>
  );
};

function Questions() {
  return (
    <Accordion defaultActiveKey="0" className="shadow">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          چگونه میتوانم به متخصصین اعتماد کنم؟
        </Accordion.Header>
        <Accordion.Body>
          متخصصین باید مراحل احراز هویت را به صورت کامل انجام دهند و در این
          فرایند تیم ما آنهارا شناسایی می کند و بهترین ها را استخدام می کند.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          تایید مدارک متخصصین چقدر زمان می برد؟
        </Accordion.Header>
        <Accordion.Body>
          مدارک شما تا 48 ساعت بعداز تکمیل فرم اطلاعات بررسی می شود
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>پرداخت وجه چگونه انجام می شود؟ </Accordion.Header>
        <Accordion.Body>به راحتی</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function Cardinfo() {
  return (
    <Container>
      <Row style={{ justifyContent: "space-around" }}>
        <Card style={{ width: "18%", alignItems: "center" }} className="shadow">
          <Card.Img
            style={{ width: "50%", margin: "10%" }}
            variant="top"
            src={require("./../assets/avatar.png")}
          />
          <Card.Body>
            <Card.Title>
              <h4>عرفان فراوانی</h4>
            </Card.Title>
            <Card.Text>
              دانشجوی مقطع کارشناسی
              <br />
              مهندسی کامپیوتر
              <br />
              دانشگاه صنعتی شریف
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18%", alignItems: "center" }} className="shadow">
          <Card.Img
            style={{ width: "50%", margin: "10%" }}
            variant="top"
            src={require("./../assets/avatar.png")}
          />
          <Card.Body>
            <Card.Title>
              <h4>عرفان فراوانی</h4>
            </Card.Title>{" "}
            <Card.Text>
              دانشجوی مقطع کارشناسی
              <br />
              مهندسی کامپیوتر
              <br />
              دانشگاه صنعتی شریف
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18%", alignItems: "center", paddingBottom: "20px" }}
          className="shadow"
        >
          <Card.Img
            style={{ width: "50%", margin: "10%" }}
            variant="top"
            src={require("./../assets/avatar.png")}
          />
          <Card.Body>
            <Card.Title>
              <h4>عرفان فراوانی</h4>
            </Card.Title>{" "}
            <Card.Text>
              دانشجوی مقطع کارشناسی
              <br />
              مهندسی کامپیوتر
              <br />
              دانشگاه صنعتی شریف
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18%", alignItems: "center", paddingBottom: "20px" }}
          className="shadow"
        >
          <Card.Img
            style={{ width: "50%", margin: "10%" }}
            variant="top"
            src={require("./../assets/avatar.png")}
          />
          <Card.Body>
            <Card.Title>
              <h4>عرفان فراوانی</h4>
            </Card.Title>{" "}
            <Card.Text>
              دانشجوی مقطع کارشناسی
              <br />
              مهندسی کامپیوتر
              <br />
              دانشگاه صنعتی شریف
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Welcome;
