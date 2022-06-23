import React from "react";
import { Row } from "react-bootstrap";
import ServiceRequest from "../components/request/servicRequest";
import ServicePanel from "../components/servicePanel";
class Service extends React.Component {

  render() {
    return (
      <React.Fragment>
        <ServiceRequest />
        {/* <ServicePanel /> */}
      </React.Fragment>
    );
  }
}

export default  Service;
