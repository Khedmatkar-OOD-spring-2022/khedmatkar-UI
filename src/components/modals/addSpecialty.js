import React, { useRef,useState,useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";

const AddSpecialty = ({ show, setShow, action }) => {
  const [specialtyList, setSpecialityList] = useState(null);
  const nameRef = useRef("");
  const selectRef = useRef("");
  const { data, error, loading } = useFetch(
    urls.speciality.getAll(true),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, { position: toast.POSITION.BOTTOM_RIGHT });
    }
    setSpecialityList(data);
  }, [error, data]);

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
                <Form.Control
                  ref={nameRef}
                  placeholder="لطفا نام تخصص را بنویسید"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>{"بخش اصلی:"}</Form.Label>
                <Form.Select ref={selectRef}>
                  {specialtyList &&
                    specialtyList.map((s) => (
                      <option id={s.id}>{s.name}</option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>بارگذاری مدارک:</Form.Label>
              <Form.Control type="file" />
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
              action(selectRef.current.options[selectRef.current.selectedIndex].id)
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

export default AddSpecialty;
