import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";

const AddSpecialty = ({ show, setShow, action }) => {
  const [specialtyList, setSpecialityList] = useState(null);
  const [choosedSpecialty, setChoosedSpecialty] = useState();
  const [subSpecialties, setSubSpecialties] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const nameRef = useRef("");
  const selectRef = useRef("");
  const { data, error, loading } = useFetch(
    urls.speciality.getAll(true),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    setSpecialityList(data);
    if (data && data.length > 0) {
      setChoosedSpecialty(data[0].id);
    }
  }, [error, data]);

  useEffect(() => {
    if (selectRef && selectRef.current) {
      const id = selectRef.current.options[selectRef.current.selectedIndex].id;
      axios
        .get(urls.speciality.getChildren(id), {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            setSubSpecialties(res.data);
          }
        });
    }
  }, [choosedSpecialty]);
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
                <Form.Select ref={nameRef}>
                  {subSpecialties &&
                    subSpecialties.map((s) => (
                      <option id={s.id}>{s.name}</option>
                    ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>{"بخش اصلی:"}</Form.Label>
                <Form.Select
                  ref={selectRef}
                  onChange={(e) => {
                    setChoosedSpecialty(
                      e.target.options[e.target.selectedIndex].id
                    );
                  }}
                >
                  {specialtyList &&
                    specialtyList.map((s) => (
                      <option id={s.id}>{s.name}</option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>بارگذاری مدارک:</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
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
              action(
                nameRef.current.options[nameRef.current.selectedIndex].id,
                selectedFile
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

export default AddSpecialty;
