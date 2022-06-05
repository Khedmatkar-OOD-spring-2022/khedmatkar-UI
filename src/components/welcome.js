import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Welcome = ({}) => {
  return (
    <Container
      style={{ display: "block", width: 1000, padding: 30 }}
    >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/images/welcome1.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/images/welcome2.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/images/welcome3.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Welcome;
