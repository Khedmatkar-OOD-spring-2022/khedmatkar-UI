import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { ShowError } from "../../common/errors";
import urls from "../../common/urls";

const AddAdmin = ({ show, setShow, permissions }) => {
  const [checkedPermissions, setCheckedPermissions] = useState([]);
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
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
                {permissions.map((e, i) => (
                  <Form.Check
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckedPermissions([
                          ...checkedPermissions,
                          e.target.id,
                        ]);
                      } else {
                        setCheckedPermissions(
                          checkedPermissions.filter((c) => c !== c.target.id)
                        );
                      }
                    }}
                    type="switch"
                    label={e.label}
                    id={e.permission}
                  />
                ))}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>{"ایمیل:"}</Form.Label>
                <Form.Control
                  ref={emailRef}
                  placeholder="لطفا ایمیل را بنویسید"
                />
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
              makeNewAdmin(
                firstNameRef.current.value,
                lastNameRef.current.value,
                emailRef.current.value,
                checkedPermissions
              );
              setShow(false);
              setCheckedPermissions([]);
            }}
          >
            {"ثبت"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
function makeNewAdmin(firstName, lastName, email, permissions) {
  axios
    .post(
      urls.admin.new(),
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: null,
        permissions: permissions,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت مدیر با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload()
      } else {
        console.log(res);
      }
    
    })
    .catch((error) => {
      ShowError(error)
    });
}
export default AddAdmin;
