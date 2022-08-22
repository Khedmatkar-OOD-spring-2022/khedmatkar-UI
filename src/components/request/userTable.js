import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { getRequestStatusMessage } from "../../utils/statuses";
import { useFetch } from "../../utils/useFetch";

const UserTable = ({ isAdmin, setDetailsId }) => {
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
          {isAdmin ? null : (
            <Button
              color="primary"
              onClick={() => navigate("/dashboard/make-request")}
            >
              درخواست خدمت جدید
            </Button>
          )}
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th style={{width:'10%'}}>شماره درخواست</th>
                <th>خدمت مورد نظر</th>
                <th>ادرس</th>
                <th>تاریخ ثبت</th>
                {isAdmin ? <th> وضعیت</th> : null}
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {userList &&
                userList.map((req) => (
                  <tr key={req.id}>
                    <td> {req.id} </td>
                    <td> {req.specialty.name} </td>
                    <td> {req.address} </td>
                    <td dir="rtl"> {req.creation.slice(0, 10)} </td>
                    {isAdmin ? (
                      <td>{getRequestStatusMessage(req.status)}</td>
                    ) : null}
                    <td>
                      {isAdmin ? null : (
                        <Button
                          onClick={() => {
                            setDetailsId(req.id);
                            navigate("/dashboard/request-details");
                          }}
                          variant="outline-warning"
                        >
                          بررسی وضعیت
                        </Button>
                      )}{" "}
                      <Button
                        style={{ marginLeft: "1em" }}
                        onClick={() => cancelRequest(req.id, isAdmin)}
                        variant="outline-danger"
                        disabled={
                          req.status === "DONE" || req.status === "CANCELED"
                        }
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
function cancelRequest(id, isAdmin) {
  const url = isAdmin
    ? urls.admin.cancelServiceRequest(id)
    : urls.servic.cancel(id);
  axios
    .post(
      url,
      {},
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("لغو درخواست خدمت با موفقیت انجام شد.", {
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
export default UserTable;
