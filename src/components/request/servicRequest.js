import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShowError } from "../../common/errors";
import Maps from "../../common/maps";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";

const ServiceRequest = ({}) => {
  const [mainSpecialty, setMainSpecialty] = useState(null);
  const [subSpecialty, setSubSpecialty] = useState(null);
  const [specialtyList, setSpecialityList] = useState(null);
  const [position, setPosition] = useState({
    lat: 35.68658125560941,
    lng: 51.38819652084644,
  });
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
      ShowError(error);
    }
    setSpecialityList(data);
    if (data && data.length > 0) {
      setMainSpecialty(data[0].id);
    }
  }, [error, data]);

  function makeRequest() {
    toast.success("ثبت درخواست خدمت با موفقیت انجام شد.", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  return (
    <Container>
      <Form dir="rtl" onSubmit={makeRequest}>
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
          {mainSpecialty && (
            <SubSpecialties set={setSubSpecialty} id={mainSpecialty} />
          )}
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group as={Row} className="mb-3" controlId="formGridAddress">
              <Form.Label>آدرس</Form.Label>
              <Form.Control
                ref={address}
                placeholder="ادرس خود را وارد کنید."
                as="textarea"
                rows={2}
              />
            </Form.Group>

            <Form.Group as={Row} controlId="formGridCity">
              <Form.Label>شهر</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Row} controlId="formGridState">
              <Form.Label>استان</Form.Label>
              <Form.Select defaultValue="انتخاب کنید...">
                <option>تهران</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridZip">
              <Form.Label>تاریخ</Form.Label>
              <Form.Control
                as={DatePicker}
                onChange={onChangeDate}
                value={date}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>موقعیت مکانی</Form.Label>
              <Maps position={position} setPosition={setPosition} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>توضیحات</Form.Label>
          <Form.Control ref={description} as="textarea" rows={3} />{" "}
        </Form.Group>

        <Button
          variant="success"
          style={{ width: "30%" }}
          onClick={() => {
            submitRequest(
              description.current.value,
              address.current.value,
              date.toISOString(),
              subSpecialty,
              { latitude: position.lat, longitude: position.lng },
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

const SubSpecialties = ({ id, set }) => {
  const [specialtyList, setSpecialityList] = useState();
  const { data, error, loading } = useFetch(
    urls.speciality.getChildren(id),
    "GET"
  );
  useEffect(() => {
    if (error) {
ShowError(error)    }
    setSpecialityList(data);
    if (data && data.length > 0) {
      set(data[0].id);
    }
  }, [error, data]);

  return (
    <>
      <Form.Label>نوع تخصص</Form.Label>
      <Form.Select
        style={{ paddingRight: "30px" }}
        onChange={(e) => set(e.target.options[e.target.selectedIndex].id)}
      >
        {specialtyList &&
          specialtyList.map((s) => <option id={s.id}>{s.name}</option>)}
      </Form.Select>
    </>
  );
};

function submitRequest(
  description,
  address,
  date,
  mainSpecialty,
  geoPoint,
  navigate
) {
  axios
    .post(
      urls.servic.servicRequest(),
      {
        specialtyId: mainSpecialty,
        description: description,
        address: address,
        receptionDate: date,
        geoPoint: geoPoint,
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
        window.location.reload()
      }
    })
    .catch((error) => {
      ShowError(error)
    });
}
export default ServiceRequest;
