import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../common/urls";

const SystemConfig = ({}) => {
  const [specialistStrategy, setSpecialistStrategy] = useState("");
  const [concurrentReq, setConcurrentReq] = useState("");

  return (
    <>
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          {"تنظیمات سامانه"}
        </h2>

        <Row>
          <Col>
            <Card
              style={{
                marginTop: "10px",
              }}
            >
              {" "}
              <Card.Header>{"استراتژی جست‌وجوی متخصص"}</Card.Header>
              <Card.Body>
                <FormControl
                  value={specialistStrategy}
                  onChange={(e) => setSpecialistStrategy(e.target.value)}
                  placeholder=""
                ></FormControl>
                <Button
                  style={{
                    margin: "5px",
                    width: "100px",
                  }}
                  onClick={() =>
                    changeConfig(
                      "SPECIALIST_FINDER_STRATEGY",
                      specialistStrategy
                    )
                  }
                >
                  ثبت
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>{"توضیحات انواع استراتژی"}</Card.Header>
              <Card.Body>
                <Card.Link
                  onClick={() =>
                    setSpecialistStrategy(
                      "com.khedmatkar.demo.service.domain.RandomCertificatedSpecialistFinder"
                    )
                  }
                >
                  {" "}
                  RandomCertificatedSpecialistFinder
                </Card.Link>
                <Card.Text>
                  هر مرتبه یک متخصص با مدرک تایید شده مربوط و تصادفی انتخاب
                  میکند
                </Card.Text>
                <hr />{" "}
                <Card.Link
                  onClick={() =>
                    setSpecialistStrategy(
                      "com.khedmatkar.demo.service.domain.RandomSpecialistFinder"
                    )
                  }
                >
                  RandomSpecialistFinder
                </Card.Link>
                <Card.Text>
                  صرفا یک متخصص انتخاب میکند که ممکن است مدرک مرتبط و تایید شده
                  نداشته باشد.
                </Card.Text>
                <hr />{" "}
                <Card.Link
                  onClick={() =>
                    setSpecialistStrategy(
                      "com.khedmatkar.demo.service.domain.NewCertificatedSpecialistFinder"
                    )
                  }
                >
                  {" "}
                  NewCertificatedSpecialistFinder
                </Card.Link>
                <Card.Text>
                  یک متخصص با مدرک تایید شده انتخاب میکند که در فهرست متخصصان
                  قبلی که این درخواست را رد کرده اند نیست.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                marginTop: "10px",
              }}
            >
              <Card.Header>{"محدودیت تعداد درخواست خدمت"}</Card.Header>
              <Card.Body>
                <FormControl
                  onChange={(e) => setConcurrentReq(e.target.value)}
                  placeholder="123"
                ></FormControl>
                <Button
                  style={{
                    margin: "5px",
                    width: "100px",
                  }}
                  onClick={() =>
                    changeConfig(
                      "CONCURRENT_ONGOING_SERVICES_LIMIT",
                      concurrentReq
                    )
                  }
                >
                  ثبت
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
function changeConfig(key, value) {
  axios
    .post(
      urls.admin.changeConfig(),
      {
        key: key,
        value: value,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت تنظیمات با موفقیت انجام شد.", {
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
export default SystemConfig;
