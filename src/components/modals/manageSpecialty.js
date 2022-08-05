import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";

export const NewSpecialty = ({ show, setShow, id = null, name = "" }) => {
  const [inputText, setInput] = useState("");
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dir="rtl"
        aria-labelledby="contained-modal-title-vcenter"
        style={{
          fontFamily: "B-Nazanin",
        }}
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
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="لطفا نام تخصص را بنویسید"
                />
              </Form.Group>
              {id && (
                <Form.Group as={Col}>
                  <Form.Label>{"بخش اصلی:"}</Form.Label>
                  <Form.Select>
                    <option>{name}</option>
                  </Form.Select>
                </Form.Group>
              )}
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
              makeNewSpecialty(inputText, id);
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
export const RemoveSpecialty = ({ show, setShow, specialtyList, action }) => {
  const selectedRef = useRef("");
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dir="rtl"
        style={{
          fontFamily: "B-Nazanin",
        }}
        centered
      >
        <Modal.Header>
          <Modal.Title>{"حذف تخصص اصلی"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              {" "}
              <Form.Group as={Col}>
                <Form.Label>{"بخش اصلی:"}</Form.Label>{" "}
                <Form.Select ref={selectedRef}>
                  {specialtyList &&
                    specialtyList.map((s) => (
                      <option id={s.id}>{s.name}</option>
                    ))}{" "}
                </Form.Select>
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
            onClick={(e) => {
              action(
                selectedRef.current.options[selectedRef.current.selectedIndex]
                  .id
              );
              setShow(false);
            }}
          >
            {"حذف"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function makeNewSpecialty(name, id = null) {
  axios
    .post(urls.speciality.new(), { name: name, parentId: id })
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت تخصص با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload(true);
      } else {
        console.log(res);
      }
    })
    .catch((error) => {
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
    });
}
