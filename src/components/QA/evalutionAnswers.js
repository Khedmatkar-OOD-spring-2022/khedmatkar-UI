import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { getPermissionLabel } from "../../utils/permissions";
import { useFetch } from "../../utils/useFetch";
import AddAdmin from "../modals/newAdmin";
import UpdateAdmin from "../modals/updateAdmin";
import Evaluation from "./evaluation";

const EvaluationAnswers = ({ name, id }) => {
  const [show, setShow] = useState();
  const [answers, setAnswers] = useState();
  const { data, error, loading } = useFetch(
    urls.evaluation.getAnswers(id),
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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dir="rtl"
        style={{ fontFamily: "B-Nazanin" }}
        fullscreen
      >
        <Modal.Header>
          <Modal.Title>{"فهرست پاسخ های ارزیابی"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div dir="rtl">
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
                  {answers && answers.map((a) => <AnswerItem answer={a} />)}
                </tbody>
              </Table>
            </Row>
          </div>{" "}
          <Button
            variant="outline-danger"
            onClick={() => setShow(false)}
            style={{ width: "20%" }}
          >
            بستن
          </Button>
        </Modal.Body>
      </Modal>

      <Button onClick={() => setShow(true)}>{name}</Button>
    </>
  );
};

const AnswerItem = ({ answer }) => {
  const [item, setItem] = useState();
  const { data, error, loading } = useFetch(
    urls.evaluation.getQuestionById(answer.questionId),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error("درخواست اطلاعات به مشکل خورد", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    setItem(data);
  }, [error, data]);

  return (
    <tr key={answer.id}>
      <td> {answer.answererEmail} </td>
      <td>{item && item.answererType === "CUSTOMER" ? "مشتری" : "متخصص"}</td>
      <td>{item && getContentTypeMessage(item.content.contentType)}</td>
      <td>{item && item.content.questionText}</td>
      <td>{item && getAnswerByContent(item.content.contentType, answer.content)}</td>
    </tr>
  );
};
function getAnswerByContent(type, answer) {
  switch (type) {
    case "SCORE":
      console.log(answer);
      return answer.scoreContent && answer.scoreContent.score;
    case "DOUBLE_CHOICE":
      return answer.doubleChoiceContent && answer.doubleChoiceContent.answerChoice;

    case "TEXT":
      return answer.textContent && answer.textContent.text;

    case "MULTIPLE_CHOICE":
      return answer.multipleChoiceContent && answer.multipleChoiceContent.answerChoices[0];

    default:
      return "";
  }
}
function getContentTypeMessage(type) {
  switch (type) {
    case "SCORE":
      return "امتیاز";
    case "DOUBLE_CHOICE":
      return "دو گزینه ای";

    case "TEXT":
      return "متن";

    case "MULTIPLE_CHOICE":
      return "چند گزینه ای";

    default:
      return "";
  }
}
export default EvaluationAnswers;
