import React, { useState } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import AddSpecialty from "../modals/newSpecialty";

const SpecialityList = ({}) => {
  const [specialtyList, setSpecialtyList] = useState([
    {
      id: "123456",
      topic: "باربری",
      description: "وانت حمل",
      date: "۱۴۰۱ / ۲/ ۲۸",
      status: "در حال بررسی",
      isDone: false,
    },
    {
      id: "234567",
      topic: "باربری",
      description: "موتور",
      date: "۱۴۰۱ / ۲/ ۲۸",
      status: "تایید شده",
      isDone: true,
    },
  ]);
  const [showNewSpecialtyModal, setShowNewSpecialtyModal] = useState(false);

  return (
    <>
      <AddSpecialty
        show={showNewSpecialtyModal}
        setShow={setShowNewSpecialtyModal}
      />
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          فهرست تخصص ها
        </h2>
        <div style={{ textAlign: "left" }}>
          <Button
            color="primary"
            onClick={() => setShowNewSpecialtyModal(true)}
          >
            {"ثبت تخصص جدید"}
          </Button>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>شماره درخواست</th>
                <th>بخش اصلی</th>
                <th>نام تخصص</th>
                <th>تاریخ ثبت</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {specialtyList.map((req) => (
                <tr key={req.id}>
                  <td> {req.id} </td>
                  <td> {req.topic} </td>
                  <td> {req.description} </td>
                  <td dir="ltr"> {req.date} </td>
                  <td>
                    {req.isDone ? (
                      <h5>
                        <Badge bg="success">{req.status}</Badge>
                      </h5>
                    ) : (
                      <div>
                        <h5>
                          <Badge>{req.status}</Badge>
                          {"   "}
                          <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => {}}
                            variant="danger"
                          >
                            لغو
                          </Button>{" "}
                        </h5>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </div>
    </>
  );
};

export default SpecialityList;
