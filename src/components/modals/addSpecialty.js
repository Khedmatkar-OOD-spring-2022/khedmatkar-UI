import React, { useRef } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const AddSpecialty = ({ show, setShow, action }) => {
  const message = useRef("");
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dir="rtl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{"ثبت تخصص جدید"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>{"نام تخصص:"}</Form.Label>
                <Form.Control
                  placeholder="لطفا نام تخصص را بنویسید"
                />
              </Form.Group>
              <Form.Group as={Col}>
              <Form.Label>{"بخش اصلی:"}</Form.Label>
                <Form.Select>
                  <option>باربری</option>
                  <option>فنی</option>
                  <option>نظافت</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>بارگذاری مدارک:</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="outline-danger"
            onClick={() => {
              setShow(false);
            }}
          >
            {"انصراف"}
          </Button>
          <Button
            variant="success"
            onClick={() => {
              setShow(false);
            }}
          >
            {"ثبت"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddSpecialty;
