import React from "react";
import {
  Form,
  Button,
  Row,
  Col,
  FormControl,
  Container,
} from "react-bootstrap";
import Transportation from "./serviceTypes/Transportation";
const ServiceRequest = ({}) => {
  return (
    <Container>
      <Form dir="rtl">
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
            <Form.Label>زمان</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="serviceType">
          <Form.Select>
            <option value="1">باربری</option>
            <option value="2">نظافت</option>
            <option value="3">فنی</option>
          </Form.Select>
        </Form.Group>
        
        <Transportation />
        <Button variant="success" type="submit">
          ثبت درخواست
        </Button>
      </Form>
    </Container>
  );
};

export default ServiceRequest;
