import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { ShowError } from "../../common/errors";
import urls from "../../common/urls";

export const TechnicalissueCreate = ({ show, setShow, action }) => {
  const message = useRef("");
  const title = useRef("");
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      dir="rtl"
      style={{
        fontFamily: "B-Nazanin",
      }}
      centered
    >
      <Modal.Header>
        <Modal.Title>{"گزارش مشکل فنی "} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>{"موضوع:"}</Form.Label>
            <Form.Control
              ref={title}
              placeholder="لطفا موضوع مشکل فنی خود را بنویسید"
              rows="4"
              dir="rtl"
            />
            <Form.Label>{"جزئیات:"}</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="لطفا توضیحات مشکل خود را بنویسید"
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
            sendTechnicalIssue(title.current.value, message.current.value);
            setShow(false);
          }}
        >
          {"ثبت"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export const TechnicalissueAnswer = ({ disabled, name, id }) => {
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  const message = useRef("");
  const title = useRef("");
  return (
    <>
      <Modal
        show={showAnswerModal}
        onHide={() => setShowAnswerModal(false)}
        size="lg"
        dir="rtl"
        style={{
          fontFamily: "B-Nazanin",
        }}
        centered
      >
        <Modal.Header>
          <Modal.Title>{"پاسخ گزارش مشکل فنی "} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
          <Form.Label>{"موضوع:"}</Form.Label>
            <Form.Control
              ref={title}
              placeholder="لطفا موضوع پاسخ مشکل فنی خود را بنویسید"
              rows="4"
              dir="rtl"
            />
            <Form.Group>
              <Form.Label>{"پاسخ:"}</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="لطفا پاسخ مشکل را بنویسید"
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
              setShowAnswerModal(false);
            }}
          >
            {"انصراف"}
          </Button>
          <Button
            variant="success"
            onClick={() => {
              answerTechnicalIssue(id,title.current.value, message.current.value);
              setShowAnswerModal(false);
            }}
          >
            {"ثبت"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Button disabled={disabled} onClick={() => setShowAnswerModal(true)}>
        {name}
      </Button>
    </>
  );
};
function sendTechnicalIssue(title, content) {
  axios
    .post(
      urls.technicalIssue.send(),
      {
        ticket: {
          content: content,
          title: title,
        },
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت مشکل با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      ShowError(error)
    });
}
function answerTechnicalIssue(id, title, content) {
  axios
    .post(
      urls.technicalIssue.answer(id),
      {
        content: content,
        title: title,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("پاسخ مشکل با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      ShowError(error)
    });
}
