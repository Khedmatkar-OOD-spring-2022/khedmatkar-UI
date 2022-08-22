import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Modal, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";
export const EvaluationModal = ({ name, id }) => {
  const [show, setShow] = useState(false);
  const [questionnaire, setQuestionnaire] = useState();

  const { data, error, loading } = useFetch(
    urls.servic.getQuestionnaire(id),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error("شما قبلا ارزیابی کرده اید", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    setQuestionnaire(data);
  }, [error, data]);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dir="rtl"
        style={{ fontFamily: "B-Nazanin" }}
        centered
      >
        <Modal.Header>
          <Modal.Title>{"ارزیابی"} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {questionnaire &&
              questionnaire.map((q) => {
                return (
                  <Form.Group>
                    <Form.Label>{q.content.questionText}</Form.Label>
                    {getQuestionByType(q.content, q.answererType, q.id)}
                    <hr />
                  </Form.Group>
                );
              })}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="outline-danger"
            onClick={() => {
              setShow(false);
            }}
          >
            {"انصراف"}
          </Button>
          <Button
            variant="success"
            onClick={() => {
              evaluate(id, {});
              setShow(false);
            }}
          >
            {"ثبت"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Button onClick={() => setShow(true)}>{name}</Button>
    </>
  );
};
function getQuestionByType(content, answererType, id) {
  switch (content.contentType) {
    case "SCORE":
      const scoreContent = content.scoreContent;
      return (
        <div style={{ fontSize: "24px" }}>
          <StarRatingComponent
            name="score"
            starCount={scoreContent.maxScore}
            value={scoreContent.minScore}
          />
        </div>
      );
    case "DOUBLE_CHOICE":
      return (
        <div className="mb-3" style={{ width: "30%", color: "black" }}>
          <Row>
            {" "}
            <Form.Check
              type="radio"
              name="double-choice"
              id={`${id}-1`}
              label={content.doubleChoiceContent.choice1}
            />
            <Form.Check
              type="radio"
              id={`${id}-2`}
              name="double-choice"
              label={content.doubleChoiceContent.choice2}
            />
          </Row>
        </div>
      );
    case "TEXT":
      return <FormControl placeholder="پاسخ خود را بنویسید" />;
    case "MULTIPLE_CHOICE":
      const multipleChoiceContent = content.multipleChoiceContent;
      const type = multipleChoiceContent.isSingleSelection
        ? "radio"
        : "checkbox";
      return (
        <div className="mb-3" style={{ width: "30%", color: "black" }}>
          {multipleChoiceContent.choices.map((c, i) => (
            <Form.Check
              type={type}
              name="multiple-choice"
              id={`${id}-choice-${i}`}
              label={c}
            />
          ))}
        </div>
      );
    default:
      return <></>;
  }
}
function evaluate(id, content) {
  axios
    .post(urls.evaluation.evaluate(id), content, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت ارزیابی با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      toast.error("شما قبلا ارزیابی کرده اید", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
