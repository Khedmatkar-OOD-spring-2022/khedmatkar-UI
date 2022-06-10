import React from "react";
import { Form, Button, Row, Col, FormControl } from "react-bootstrap";
const ServiceRequest = ({}) => {
  return (
    <>
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
              <option>مشهد</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>زمان</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          ثبت درخواست
        </Button>
      </Form>
    </>
  );
};

export default ServiceRequest;
