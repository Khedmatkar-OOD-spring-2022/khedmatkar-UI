import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { toast } from "react-toastify";
import urls from "../../common/urls";

const ServiceReqWithSpecificSpecialist = ({ specialistId, specialty }) => {
  const [show, setShow] = useState(false);
  const [date, onChangeDate] = useState(new Date());
  const [mainSpecialty, setMainSpecialty] = useState(
    specialty && specialty[0].id
  );
  const address = useRef("");
  const description = useRef("");
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dir="rtl"
        aria-labelledby="contained-modal-title-vcenter"
        style={{ fontFamily: "B-Nazanin" }}
        centered
      >
        <Modal.Header>
          <Modal.Title>{"ثبت درخواست خدمت با این متخصص"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form dir="rtl">
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>توضیحات</Form.Label>
              <Form.Control ref={description} as="textarea" rows={3} />{" "}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>آدرس</Form.Label>
              <Form.Control
                ref={address}
                placeholder="ادرس خود را وارد کنید."
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>تاریخ</Form.Label>
                <Form.Control
                  as={DatePicker}
                  onChange={onChangeDate}
                  value={date}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="serviceType">
              <Form.Label>نوع خدمت</Form.Label>
              <Form.Select
                dir="ltr"
                onChange={(e) =>
                  setMainSpecialty(e.target.options[e.target.selectedIndex].id)
                }
              >
                {specialty &&
                  specialty.map((s) => <option id={s.id}>{s.name}</option>)}
              </Form.Select>
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
              submitRequest(
                specialistId,
                description.current.value,
                address.current.value,
                date.toISOString(),
                mainSpecialty
              );
              setShow(false);
            }}
          >
            {"ثبت"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={() => setShow(true)}> ارسال درخواست</Button>
    </>
  );
};
function submitRequest(
  specialistId,
  description,
  address,
  date,
  mainSpecialty
) {
  axios
    .post(
      urls.servic.servicRequest(),
      {
        specialistId: specialistId,
        specialtyId: mainSpecialty,
        description: description,
        address: address,
        receptionDate: date,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت درخواست خدمت با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
export default ServiceReqWithSpecificSpecialist;
