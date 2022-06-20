import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
      <InputGroup.Text>
        <i className="material-icons">search</i>
      </InputGroup.Text>
      <Form.Control
        className="navbar-search"
        placeholder="Search for something..."
      />
    </InputGroup>
  </Form>
);
