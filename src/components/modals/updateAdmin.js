import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";

const UpdateAdmin = ({ show, setShow, permissions, email }) => {
  const [checkedPermissions, setCheckedPermissions] = useState([]);
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
          <Modal.Title>{"به‌روزرسانی مدیر"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>{"ایمیل:"}</Form.Label>
                <Form.Label>{email}</Form.Label>
              </Form.Group>
            </Row>
            <Row>
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
              updateAdmin(email, checkedPermissions);
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
function updateAdmin(email, permissions) {
  axios
    .post(
      urls.admin.update(),
      {
        email: email,
        permissions: permissions,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("به‌روزرسانی مدیر با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      } else {
        console.log(res);
      }
    })
    .catch((error) => {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
export default UpdateAdmin;
