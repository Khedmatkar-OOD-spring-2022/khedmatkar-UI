import React from "react";
import { Row, Center } from "react-bootstrap";
import MainNavigation from "../components/navigation";
import Search from "../components/search";
import UserDetails from "../components/profile/userDetails";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <MainNavigation /> */}
        {/* <Row className="d-flex justify-content-center">
          <Search />
        </Row> */}
      </React.Fragment>
    );
  }
}

export default Home;
