import axios from "axios";
import { useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";
import StarRatingComponent from "react-star-rating-component";

import urls from "../../common/urls";

export const EvaluationForm = ({ type, questions }) => {
  function getQuestionByType(content, id) {
    switch (content.contentType) {
      case "SCORE":
        const scoreContent = content.scoreContent;
        return (
          <StarRatingComponent
            name="score"
            starCount={scoreContent.maxScore}
            value={scoreContent.minScore}
          />
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

  return (
    <Container>
      <h3>سوالات ثبت شده </h3>
      <Form>
        {questions &&
          questions.map((e) => {
            if (e.answererType === type) {
              return (
                <Card>
                  <Card.Header>{e.content.questionText}</Card.Header>
                  <Card.Body style={{ marginRight: "2rem" }}>
                    {getQuestionByType(e.content, e.id)}
                  </Card.Body>
                  <Card.Footer dir="ltr">
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteQuestion(e.id)}
                    >
                      حذف سوال
                    </Button>
                  </Card.Footer>
                </Card>
              );
            }
          })}
      </Form>
    </Container>
  );
};
export const EvaluationCreateQuestion = ({ userType }) => {
  const [newQuestionType, setNewQuestionType] = useState("MULTIPLE_CHOICE");
  const [multipleChoice, setMultipleChoice] = useState([]);
  const questionText = useRef("");
  const choice1 = useRef("");
  const choice2 = useRef("");
  const maxScore = useRef("");
  const minScore = useRef("");
  const isSingleSelection = useRef(true);
  const answerWordLength = useRef("");
  const addChoice = useRef("");

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="questiontype">
          <Form.Label>انتخاب نوع ارزیابی جدید:</Form.Label>
          <Form.Select
            style={{ paddingRight: "30px" }}
            onChange={(e) =>
              setNewQuestionType(e.target.options[e.target.selectedIndex].id)
            }
          >
            <option id="MULTIPLE_CHOICE">{"چند گزینه‌"}</option>
            <option id="DOUBLE_CHOICE">{" دوگزینه"}</option>
            <option id="SCORE">{" امتیاز"}</option>
            <option id="TEXT">{" متن"}</option>
          </Form.Select>
        </Form.Group>
        <hr />
        <Form.Group style={{ marginBottom: "10px" }}>
          <Form.Label>{"سوال مورد نظر خود را بنویسید"}</Form.Label>
          <FormControl ref={questionText} />
        </Form.Group>
        {newQuestionType === "DOUBLE_CHOICE" ? (
          <div>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>گزینه اول</Form.Label>
                <FormControl ref={choice1} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>گزینه دوم</Form.Label>
                <FormControl ref={choice2} />{" "}
              </Form.Group>
            </Row>
          </div>
        ) : null}
        {newQuestionType === "MULTIPLE_CHOICE" ? (
          <div>
            <Form.Group>
              <Form.Label>{"گزینه ها"}</Form.Label>
              <Form.Group style={{ marginRight: "50px" }}>
                {multipleChoice && multipleChoice.map((c) => <h6>{c}</h6>)}
              </Form.Group>
            </Form.Group>
            <Form.Group>
              <Form.Label>متن گزینه جدید</Form.Label>
              <FormControl ref={addChoice} />
              <Button
                variant="secondary"
                style={{ marginTop: "5px" }}
                onClick={() =>
                  setMultipleChoice([
                    ...multipleChoice,
                    addChoice.current.value,
                  ])
                }
              >
                اضافه کردن
              </Button>
            </Form.Group>
            <Form.Group
              style={{ width: "20%", margin: "1rem", fontSize: "20px" }}
            >
              <Form.Check
                type="checkbox"
                id={`single`}
                label="قابلیت انتخاب چند تایی"
                ref={isSingleSelection}
              />
            </Form.Group>
          </div>
        ) : null}
        {newQuestionType === "SCORE" ? (
          <Row>
            <Form.Group as={Col}>
              <Form.Label>بیشترین امتیاز ممکن</Form.Label>
              <FormControl ref={maxScore} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>کمترین امتیاز ممکن</Form.Label>
              <FormControl ref={minScore} />{" "}
            </Form.Group>
          </Row>
        ) : null}
        {newQuestionType === "TEXT" ? (
          <div>
            <Form.Group>
              <Form.Label>طول پاسخ</Form.Label>
              <FormControl ref={answerWordLength} />
            </Form.Group>
          </div>
        ) : null}
        <Button
          variant="primary"
          style={{ marginTop: "15px", width: "40%" }}
          onClick={() =>
            createQuestion({
              answererType: userType,
              content: {
                questionText: questionText.current.value,
                contentType: newQuestionType,
                textContent: {
                  answerWordLength: answerWordLength.current
                    ? answerWordLength.current.value
                    : "",
                },
                scoreContent: {
                  maxScore: parseInt(maxScore.current.value),
                  minScore: parseInt(minScore.current.value),
                },
                doubleChoiceContent: {
                  choice1: choice1.current.value,
                  choice2: choice2.current.value,
                },
                multipleChoiceContent: {
                  isSingleSelection: !isSingleSelection.current.checked,
                  choices: multipleChoice,
                },
              },
            })
          }
        >
          ثبت ارزیابی جدید
        </Button>
      </Form>
    </Container>
  );
};

function createQuestion(content) {
  axios
    .post(urls.evaluation.createQuestion(), content, {
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
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
function deleteQuestion(id) {
  axios
    .delete(urls.evaluation.deleteQuestion(id), {
      withCredentials: true,
    })
    .then((res) => {
      if (res.status === 200) {
        toast.success("سوال با موفقیت حذف شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload();
      }
    })
    .catch((error) => {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
}
