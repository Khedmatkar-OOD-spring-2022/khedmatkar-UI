import React, { useState,useEffect } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import AddAdmin from "../modals/newAdmin";
import AddSpecialty from "../modals/addSpecialty";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";
import { toast } from "react-toastify";

const AdminList = ({}) => {
  const [adminList, setAdminList] = useState();
  const { data, error, loading } = useFetch(urls.admin.get(), "GET");
  useEffect(() => {
    if (error) {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    setAdminList(data);
  }, [error, data]);
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
                <th>نام خانوادگی مدیر</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {adminList && adminList.map((req) => (
                <tr key={req.id}>
                  <td> {req.email} </td>
                  <td> {'همه'} </td>
                  <td> {req.firstName} </td>
                  <td> {req.lastName} </td>
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
                          disabled
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
