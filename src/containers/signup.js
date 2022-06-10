import React from "react";
import { Form,Button } from "react-bootstrap";

class SignUp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>نام</Form.Label>
            <Form.Control type="text" placeholder="نام خود را وارد کنید" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>نام خانوادگی</Form.Label>
            <Form.Control type="text" placeholder="نام خانوادگی را وارد کنید" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>آدرس ایمیل</Form.Label>
            <Form.Control type="email" placeholder="ایمیل خود را وارد کنید" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>رمز عبور</Form.Label>
            <Form.Control type="password" placeholder="رمز خود را وارد کنید" />
          </Form.Group>
          <Button variant="primary" type="submit">
            ثبت نام
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default SignUp;
