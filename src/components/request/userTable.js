import React, { useState, useEffect } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";

const UserTable = ({}) => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState();
  const { data, error, loading } = useFetch(urls.servic.servicRequest(), "GET");
  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
    }
    setUserList(data);
  }, [error, data]);

  return (
    <>
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          فهرست درخواست خدمت ها
        </h2>
        <div style={{ textAlign: "left" }}>
          <Button
            color="primary"
            onClick={() => navigate("/dashboard/make-request")}
          >
            درخواست خدمت جدید
          </Button>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>خدمت مورد نظر</th>
                <th>ادرس</th>
                <th>تاریخ ثبت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {userList && userList.map((req) => (
                <tr key={req.id}>
                  <td> {req.id} </td>
                  <td> {req.address} </td>
                  <td dir="ltr"> {req.creation} </td>
                  <td>
                    <Button onClick={() => {}} variant="outline-warning">
                      بررسی وضعیت
                    </Button>{" "}
                    <Button
                      style={{ marginLeft: "1em" }}
                      onClick={() => {}}
                      variant="danger"
                    >
                      لغو
                    </Button>
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

export default UserTable;
