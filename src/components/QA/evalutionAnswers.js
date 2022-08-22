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
                <th> نوع کاربر </th>
                <th> نوع سوال</th>
                <th>متن سوال</th>
                <th>متن پاسخ</th>
              </tr>
            </thead>
            <tbody>
              {answers &&
                answers.map((a) => (
                  <tr key={a.id}>
                    <td> {a.answererEmail} </td>
                    <td>{}</td>
                    <td> {a.firstName} </td>
                    <td> {a.lastName} </td>
                    <td>
                      <div>
                        <h5>
                          <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => {
                              setChoosedEmail(a.email);
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
