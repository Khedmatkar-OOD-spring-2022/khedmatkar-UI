import React, { useState } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import AddAdmin from "../modals/newAdmin";
import AddSpecialty from "../modals/addSpecialty";

const AdminList = ({}) => {
  const [specialtyList, setSpecialtyList] = useState([
    {
      id: "1222",
      email: "erfan@gmail.com",
      name: " عرفان",
      permission: "همه",
    },
    {
      id: "123456",
      email: "erfan1@gmail.com",
      name: " عرفان",
      permission: "همه",
    },
  ]);
  const [showNewAdminModal, setShowNewAdminModal] = useState(false);

  return (
    <>
      <AddAdmin show={showNewAdminModal} setShow={setShowNewAdminModal} />
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          فهرست مدیران
        </h2>
        <div style={{ textAlign: "left" }}>
          <Button color="primary" onClick={() => setShowNewAdminModal(true)}>
            {"ثبت مدیر جدید"}
          </Button>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th> ایمیل </th>
                <th> سطح دسترسی</th>
                <th>نام مدیر</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {specialtyList.map((req) => (
                <tr key={req.id}>
                  <td> {req.email} </td>
                  <td> {req.permission} </td>
                  <td> {req.name} </td>
                  <td>
                    <div>
                      <h5>
                        <Button
                          style={{ marginLeft: "1em" }} 
                          onClick={() => {}}
                          variant="outline-primary"
                        >
                          تغییر سطح دسترسی
                        </Button>{" "}
                        <Button
                          style={{ marginLeft: "1em" }}
                          onClick={() => {}}
                          variant="danger"
                        >
                          حذف مدیر
                        </Button>{" "}
                      </h5>
                    </div>
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

export default AdminList;
