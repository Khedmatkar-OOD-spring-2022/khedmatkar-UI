import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { getPermissionLabel } from "../../utils/permissions";
import { useFetch } from "../../utils/useFetch";
import AddAdmin from "../modals/newAdmin";
import UpdateAdmin from "../modals/updateAdmin";
import Evaluation from "./evaluation";

const EvaluationAnswers = ({}) => {
  const [answers, setAnswers] = useState();
  const { data, error, loading } = useFetch(
    urls.evaluation.getAnswers(),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error("درخواست اطلاعات به مشکل خورد", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    setAnswers(data);
  }, [error, data]);

  const [choosedEmail, setChoosedEmail] = useState("");

  return (
    <>
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          فهرست پاسخ های ارزیابی
        </h2>

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
              {answers &&
                answers.map((req) => (
                  <tr key={req.id}>
                    <td> {req.email} </td>
                    <td>
                      {" "}
                      {req.permissions &&
                        req.permissions.map((e) => (
                          <tr>{getPermissionLabel(e)}</tr>
                        ))}
                    </td>
                    <td> {req.firstName} </td>
                    <td> {req.lastName} </td>
                    <td>
                      <div>
                        <h5>
                          <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => {
                              setChoosedEmail(req.email);
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

export default EvaluationAnswers;
