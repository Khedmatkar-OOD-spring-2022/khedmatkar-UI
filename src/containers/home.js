import React from "react";
import { Row } from "react-bootstrap";
import MainNavigation from "../common/navigation";
import Search from "../components/search";
import Welcome from "../components/welcome";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <Row>
          <Welcome />
        </Row>
        <Row className="d-flex justify-content-center">
          <Search />
          
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
