import React, { useState } from "react";
import { Button, Row, Table } from "react-bootstrap";

const UserTable = ({}) => {
  const [userList, setUserList] = useState([
    {
      id: "123456",
      topic: "باربری-وانت حمل",
      description: "تقاضا دارم وانتی برای حمل  بار به مرکز شهر به مدت ۲ ساعت خدمت دهد",
      date: "۱۴۰۱ / ۲/ ۲۸",
    },
  ]);

  return (
    <>
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
         فهرست درخواست خدمت ها
        </h2>
        <div style={{ textAlign: "left" }}>
          <Button color="primary" onClick={() => {}}>
            درخواست خدمت جدید
          </Button>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>شماره درخواست</th>
                <th>خدمت مورد نظر</th>
                <th>توضیحات</th>
                <th>تاریخ ثبت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((req) => (
                <tr key={req.id} >
                  <td> {req.id} </td>
                  <td> {req.topic} </td>
                  <td> {req.description} </td>
                  <td dir='ltr'> {req.date} </td>
                  <td>
                    <Button onClick={() => {}} variant="outline-warning">
                      بررسی وضعیت
                    </Button>
                    {' '}
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
