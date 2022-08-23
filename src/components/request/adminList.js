import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { ShowError } from "../../common/errors";
import urls from "../../common/urls";
import { getPermissionLabel } from "../../utils/permissions";
import { useFetch } from "../../utils/useFetch";
import AddAdmin from "../modals/newAdmin";
import UpdateAdmin from "../modals/updateAdmin";

const AdminList = ({}) => {
  const [adminList, setAdminList] = useState();
  const { data, error, loading } = useFetch(urls.admin.get(), "GET");
  useEffect(() => {
    if (error) {
      ShowError(error)
    }
    setAdminList(data);
  }, [error, data]);
  const [showNewAdminModal, setShowNewAdminModal] = useState(false);
  const [showUpdateAdmin, setShowUpdateAdmin] = useState(false);
  const [choosedEmail, setChoosedEmail] = useState("");

  return (
    <>
      <AddAdmin
        show={showNewAdminModal}
        setShow={setShowNewAdminModal}
        permissions={permissions}
      />
      <UpdateAdmin
        show={showUpdateAdmin}
        setShow={setShowUpdateAdmin}
        permissions={permissions}
        email={choosedEmail}
      />
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
              {adminList &&
                adminList.map((req) => (
                  <tr key={req.id}>
                    <td> {req.email} </td>
                    <td> {req.permissions && req.permissions.map((e)=><tr>{getPermissionLabel(e)}</tr>)}</td>
                    <td> {req.firstName} </td>
                    <td> {req.lastName} </td>
                    <td>
                      <div>
                        <h5>
                          <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => {
                              setChoosedEmail(req.email);
                              setShowUpdateAdmin(true);
                            }}
                            variant="outline-primary"
                          >
                            تغییر سطح دسترسی
                          </Button>{" "}
                          <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => {}}
                            variant="outline-danger"
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

const permissions = [
  { permission: "VALIDATE_CERTIFICATE_W", label: "تعیین وضعیت مدارک متخصص" },
  { permission: "SPECIALTY_W", label: "ایجاد تخصص" },
  { permission: "USER_PROFILE_RW", label: "تغییر و مشاهده پروفایل کاربران" },
  { permission: "TECHNICAL_ISSUE_RW", label: "دسترسی به مشکلات سامانه" },
  { permission: "SERVICE_W", label: "ایجاد درخواست خدمت" },
  { permission: "QUESTIONNAIRE_RW", label: "ایجاد و مشاهده ارزیابی" },
  { permission: "USER_LIST_RW", label: "مشاهده و تغییر کاربران سامانه" },
  { permission: "FEEDBACK_RW", label: "مشاهده ی پیشنهادات و انتقادات" },
];
export default AdminList;
