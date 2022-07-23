import axios from "axios";
import React, { useRef } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";

const AddAdmin = ({ show, setShow, action }) => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
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
                <Form.Control
                  ref={firstNameRef}
                  placeholder="لطفا نام را بنویسید"
                />{" "}
                <Form.Label>{"نام خانوادگی مدیر:"}</Form.Label>
                <Form.Control
                  ref={lastNameRef}
                  placeholder="لطفا نام خانوادگی را بنویسید"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>{"سطح دسترسی:"}</Form.Label>
                <Form.Select>
                  <option>همه</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>{"ایمیل:"}</Form.Label>
                <Form.Control
                  ref={emailRef}
                  placeholder="لطفا ایمیل را بنویسید"
                />
              </Form.Group>{" "}
              {/* <Form.Group as={Col}>
                <Form.Label>{"رمز عبور:"}</Form.Label>
                <Form.Control placeholder="لطفا نام تخصص را بنویسید" />
              </Form.Group> */}
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
              makeNewAdmin(
                firstNameRef.current.value,
                lastNameRef.current.value,
                emailRef.current.value
              );
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
function makeNewAdmin(firstName, lastName, email) {
  axios
    .post(
      urls.admin.new(),
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: null,
        permissions: ["USER_LIST_RW", "QUESTIONNAIRE_RW", "FEEDBACK_RW"],
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت مدیر با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        console.log(res);
      }
    })
    .catch((error) => {
      toast.error(error && error.message, { position: toast.POSITION.BOTTOM_RIGHT });
    });
}
export default AddAdmin;
