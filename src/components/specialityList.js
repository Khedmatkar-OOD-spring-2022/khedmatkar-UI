import axios from "axios";
import React, { useState, useEffect } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import { FiDownload, FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";
import urls from "../common/urls";
import { useFetch } from "../utils/useFetch";

const SpecialityApproveList = ({}) => {
  const [specialtyList, setSpecialtyList] = useState();
  const { data, error, loading } = useFetch(urls.admin.getCertificate(), "GET");
  useEffect(() => {
    if (error) {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    setSpecialtyList(data);
  }, [error, data]);

  return (
    <>
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          {"بررسی وضعیت مدارک متخصصان"}
        </h2>

        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>شماره درخواست</th>
                <th>نام تخصص</th>
                <th>وضعیت</th>
                <th>مدرک بارگذاری شده</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {specialtyList &&
                specialtyList.map((req) => (
                  <tr key={req.id}>
                    <td> {req.id} </td>
                    <td> {req.specialtyDTO.name} </td>
                    <td> {req.status} </td>
                    <td>
                      <Button variant="secondary">
                        <FiDownload />
                      </Button>{" "}
                    </td>
                    <td>
                      {req.isDone ? (
                        <h5>
                          <Badge bg="success">{req.status}</Badge>
                        </h5>
                      ) : (
                        <div>
                          <h5>
                            {req.status === "INVALID" ? (
                              <Button
                                style={{ marginLeft: "1em" }}
                                onClick={() => approveSpecialty(req.id)}
                                variant="primary"
                              >
                                تایید درخواست
                              </Button>
                            ) : null}{" "}
                            {req.status === "VALID" ? (
                              <Button
                                style={{ marginLeft: "1em" }}
                                onClick={() => declineSpecialty(req.id)}
                                variant="outline-danger"
                              >
                                رد درخواست
                              </Button>
                            ) : null}{" "}
                          </h5>
                        </div>
                      )}
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

function approveSpecialty(id) {
  axios
    .post(urls.admin.validateCertificate(id), {}, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        toast.success("قبول تخصص با موفقیت انجام شد.", {
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
function declineSpecialty(id) {
  axios
    .post(urls.admin.invalidateCertificate(id), {}, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        toast.success("رد تخصص با موفقیت انجام شد.", {
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
export default SpecialityApproveList;
