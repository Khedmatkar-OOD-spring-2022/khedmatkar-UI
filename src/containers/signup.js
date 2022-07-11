import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import RegisterForm from "../components/profile/Forms/RegisterForm/RegisterForm";

class SignUp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <RegisterForm />
      </React.Fragment>
    );
  }
}

export default SignUp;
