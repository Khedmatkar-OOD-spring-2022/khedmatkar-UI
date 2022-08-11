import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";

const ServiceRequest = ({}) => {
  const [mainSpecialty, setMainSpecialty] = useState(null);
  const [specialtyList, setSpecialityList] = useState(null);
  const [date, onChangeDate] = useState(new Date());
  const navigate = useNavigate();
  const address = useRef("");
  const description = useRef("");
  const { data, error, loading } = useFetch(
    urls.speciality.getAll(true),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
    }
    setSpecialityList(data);
  }, [error, data]);

  function makeRequest() {
    toast.success("ثبت درخواست خدمت با موفقیت انجام شد.", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  return (
    <Container>
      <Form dir="rtl" onSubmit={makeRequest}>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>توضیحات</Form.Label>
          <Form.Control ref={description} as="textarea" rows={3} />{" "}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>آدرس</Form.Label>
          <Form.Control ref={address} placeholder="ادرس خود را وارد کنید." />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>شهر</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>استان</Form.Label>
            <Form.Select defaultValue="انتخاب کنید...">
              <option>تهران</option>
            </Form.Select>
          </Form.Group>

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
            style={{ paddingRight: "30px" }}
            onChange={(e) =>
              setMainSpecialty(e.target.options[e.target.selectedIndex].id)
            }
          >
            {specialtyList &&
              specialtyList.map((s) => <option id={s.id}>{s.name}</option>)}
          </Form.Select>
          {mainSpecialty && <SubSpecialties id={mainSpecialty} />}
        </Form.Group>
        {/* <Transportation /> */}
        <Button
          variant="success"
          onClick={() => {
            submitRequest(
              description.current.value,
              address.current.value,
              date.toISOString(),
              mainSpecialty,
              navigate
            );
          }}
        >
          ثبت درخواست
        </Button>
      </Form>
    </Container>
  );
};

const SubSpecialties = ({ id }) => {
  const [specialtyList, setSpecialityList] = useState();
  const { data, error, loading } = useFetch(
    urls.speciality.getChildren(id),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
    }
    setSpecialityList(data);
  }, [error, data]);

  return (
    <>
      <Form.Label>نوع تخصص</Form.Label>
      <Form.Select           style={{paddingRight:'30px'}}
>
        {specialtyList &&
          specialtyList.map((s) => <option id={s.id}>{s.name}</option>)}
      </Form.Select>
    </>
  );
};

function submitRequest(description, address, date, mainSpecialty, navigate) {
  axios
    .post(
      urls.servic.servicRequest(),
      {
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
      }
    })
    .catch((error) => {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
export default ServiceRequest;
