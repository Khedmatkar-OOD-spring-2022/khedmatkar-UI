import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormControl, Modal, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";
export const EvaluationModal = ({ name, id }) => {
  const [show, setShow] = useState(false);
  const [questionnaire, setQuestionnaire] = useState();
  //   const [answers, setAnswer] = useState([]);
  const answers = useRef([]);
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
    if (data && data.length > 0) {
      answers.current = data.map((item, index) => ({
        questionId: item.id,
        answererType: item.answererType,
        content: null,
      }));
    }
  }, [error, data]);

  function addToAnswer(index, content) {
    console.log(index, content);
    console.log(answers.current);
    answers.current[index].content = content;
  }
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
              questionnaire.map((q, index) => {
                return (
                  <Form.Group>
                    <Form.Label>{q.content.questionText}</Form.Label>
                    {getQuestionByType(
                      q.content,
                      index,
                      q.id,
                      addToAnswer,
                      answers
                    )}
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
              evaluate(id, answers.current);
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
function getQuestionByType(content, index, id, addToAnswer, answers) {
  switch (content.contentType) {
    case "SCORE":
      const scoreContent = content.scoreContent;
      return (
        <div style={{ fontSize: "24px" }}>
          <StarRatingComponent
            name="score"
            starCount={scoreContent.maxScore}
            onStarClick={(nextValue, prevValue, name) =>
              addToAnswer(index, {
                contentType: content.contentType,
                scoreContent: {
                  score: nextValue,
                },
              })
            }
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
              onClick={(e) => {
                addToAnswer(index, {
                  contentType: content.contentType,
                  doubleChoiceContent: {
                    answerChoice: content.doubleChoiceContent.choice1,
                  },
                });
              }}
              id={`${id}-1`}
              label={content.doubleChoiceContent.choice1}
            />
            <Form.Check
              type="radio"
              id={`${id}-2`}
              name="double-choice"
              label={content.doubleChoiceContent.choice2}
              onClick={(e) => {
                addToAnswer(index, {
                  contentType: content.contentType,
                  doubleChoiceContent: {
                    answerChoice: content.doubleChoiceContent.choice2,
                  },
                });
              }}
            />
          </Row>
        </div>
      );
    case "TEXT":
      return (
        <FormControl
          onChange={(e) =>
            addToAnswer(index, {
              contentType: content.contentType,
              textContent: { text: e.target.value },
            })
          }
          placeholder="پاسخ خود را بنویسید"
        />
      );
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
              onClick={() => {
                if (multipleChoiceContent.isSingleSelection) {
                  addToAnswer(index, {
                    contentType: content.contentType,
                    multipleChoiceContent: {
                      answerChoices: [i],
                    },
                  });
                } else {
                  addToAnswer(index, {
                    contentType: content.contentType,
                    multipleChoiceContent: {
                      answerChoices: [i],
                    },
                  });
                }
              }}
            />
          ))}
        </div>
      );
    default:
      return <></>;
  }
}
function evaluate(id, content) {
  console.log(content);
  axios
    .post(urls.servic.evaluate(id), content, {
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
