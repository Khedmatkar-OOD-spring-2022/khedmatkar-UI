import axios from "axios";
import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";

const NewSpecialty = ({ show, setShow, id = null, name = "" }) => {
  const [inputText,setInput] = useState("");
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
                <Form.Control onChange={(e)=>setInput(e.target.value)} placeholder="لطفا نام تخصص را بنویسید" />
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
function makeNewSpecialty(name, id = null) {
 axios 
    .post(urls.speciality.new(), { name: name, parentId: id })
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت تخصص با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }else{
        console.log(res)
      }
    })
    .catch((error) => {
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
    });
}
export default NewSpecialty;
