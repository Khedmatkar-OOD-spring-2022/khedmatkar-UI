import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  FormControl,
  Container,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Transportation from "./serviceTypes/Transportation";
const ServiceRequest = ({}) => {
  const [requestType, setRequestType] = useState("1");

  function makeRequest() {
    toast.success("ثبت درخواست خدمت با موفقیت انجام شد.",{position: toast.POSITION.BOTTOM_RIGHT});
  }
  return (
    <Container>
      <Form dir="rtl" onSubmit={makeRequest}>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>توضیحات</Form.Label>
          <Form.Control as="textarea" rows={3} />{" "}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>آدرس</Form.Label>
          <Form.Control placeholder="ادرس خود را وارد کنید." />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>شهر</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>استان</Form.Label>
            <Form.Select defaultValue="انتخاب کنید...">
              <option>تهران</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>تاریخ</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="serviceType">
          <Form.Label>نوع خدمت</Form.Label>
          <Form.Select>
            <option value="1">باربری</option>
            <option value="2">نظافت</option>
            <option value="3">فنی</option>
          </Form.Select>
          <Form.Label>نوع تخصص</Form.Label>
          <Form.Select>
            <option> تعمیرات - یخچال</option>
            <option> تعمیرات - کولر</option>
          </Form.Select>
        </Form.Group>
        {/* <Transportation /> */}
        <ToastContainer/>
        <Button onClick={makeRequest} >test toast</Button>
        <Button variant="success" type="submit">
          ثبت درخواست
        </Button>
      </Form>
    </Container>
  );
};

export default ServiceRequest;
