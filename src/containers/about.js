import React from "react";
import { Container, Row } from "react-bootstrap";
import { Cardinfo } from "../components/welcome";
class AboutUs extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <br />
          <br />
          <h2 className="text-color" style={{textAlign:'center'}}>تیم ما</h2>
          <br />
          <br />
          <br />
          <Cardinfo /> <hr class="solid"></hr>
        </Row>
      </Container>
    );
  }
}

export default AboutUs;
