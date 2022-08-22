import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";
export const EvaluationModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dir="rtl"
        style={{ fontFamily: "B-Nazanin" }}
        centered
      >
        <Modal.Header>
          <Modal.Title>{"ارزیابی"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form></Form>
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
              evaluate();
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
function evaluate(content) {
  axios
    .post(urls.evaluation.evaluate(), content, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت ارزیابی با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      toast.error("شما قبلا ارزیابی کرده اید", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
