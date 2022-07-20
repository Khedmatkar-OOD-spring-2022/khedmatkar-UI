import React, { useState } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import { FiDownload, FiUploadCloud } from "react-icons/fi";

const SpecialityApproveList = ({}) => {
  const [specialtyList, setSpecialtyList] = useState([
    {
      id: "123456",
      topic: "باربری",
      description: "وانت حمل",
      date: "۱۴۰۱ / ۲/ ۲۸",
      documentLink: '',
      status: "در حال بررسی",
      isDone: false,
    },
    {
      id: "234567",
      topic: "باربری",
      description: "موتور",
      date: "۱۴۰۱ / ۲/ ۲۸",
      status: "تایید شده",
      documentLink: '',
      isDone: true,
    },
  ]);

  return (
    <>
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          {'بررسی وضعیت مدارک متخصصان'}
        </h2>

        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>شماره درخواست</th>
                <th>بخش اصلی</th>
                <th>نام تخصص</th>
                <th>تاریخ ثبت</th>
                <th>مدرک بارگذاری شده</th>
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
                  <td><Button variant="secondary"><FiDownload /></Button>  </td>
                  <td>
                    {req.isDone ? (
                      <h5>
                        <Badge bg="success">{req.status}</Badge>
                      </h5>
                    ) : (
                      <div>
                        <h5>
                          <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => {}}
                            variant="primary"
                          >
                          تایید درخواست
                          </Button>{" "}    
                                                <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => {}}
                            variant="danger"
                          >
                            رد درخواست
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

export default SpecialityApproveList;
