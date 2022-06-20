import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const CommentModal = ({ show, setShow, action }) => {
  const message = useRef("");
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        dir="rtl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{"انتقادات و پیشنهادات "} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>{"موضوع:"}</Form.Label>
              <Form.Control
                placeholder="لطفا موضوع پیشنهاد را بنویسید"
                rows="4"
                dir="rtl"
              />
              <Form.Label>{"جزئیات:"}</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="لطفا پیشنهاد خود را بنویسید"
                rows="4"
                dir="rtl"
                ref={message}
              />
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

export default CommentModal;
