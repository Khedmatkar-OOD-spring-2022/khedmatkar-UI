import React, { useRef } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const AddAdmin = ({ show, setShow, action }) => {
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
          <Modal.Title>{"ثبت مدیر جدید"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>{"نام مدیر:"}</Form.Label>
                <Form.Control placeholder="لطفا نام تخصص را بنویسید" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>{"سطح دسترسی:"}</Form.Label>
                <Form.Select>
                  <option>گزارش گیری</option>
                  <option>گزارش گیری،اضافه</option>
                  <option>گزارش گیری،اضافه ، تغییر</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>{"ایمیل:"}</Form.Label>
                <Form.Control placeholder="لطفا نام تخصص را بنویسید" />
              </Form.Group>{" "}
              <Form.Group as={Col}>
                <Form.Label>{"رمز عبور:"}</Form.Label>
                <Form.Control placeholder="لطفا نام تخصص را بنویسید" />
              </Form.Group>
            </Row>
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

export default AddAdmin;
