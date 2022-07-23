import axios from "axios";
import React, { useState, useEffect } from "react";
import { Badge, Button, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import urls from "../../common/urls";
import { useFetch } from "../../utils/useFetch";
import AddSpecialty from "../modals/addSpecialty";

const SpecialityList = ({}) => {
  const [specialtyList, setSpecialtyList] = useState();
  const [showNewSpecialtyModal, setShowNewSpecialtyModal] = useState(false);
    const { data, error, loading } = useFetch(urls.certificate.get(), "GET");
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
      <AddSpecialty
        show={showNewSpecialtyModal}
        setShow={setShowNewSpecialtyModal}
        action={addSpecialty}
      />
      <div dir="rtl">
        <h2 className="text-center" style={{ padding: "1em" }}>
          فهرست تخصص ها
        </h2>
        <div style={{ textAlign: "left" }}>
          <Button
            color="primary"
            onClick={() => setShowNewSpecialtyModal(true)}
          >
            {"ثبت تخصص جدید"}
          </Button>
        </div>
        <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>شماره تخصص</th>
                {/* <th>بخش اصلی</th>
                <th>نام تخصص</th> */}
                {/* <th>تاریخ ثبت</th> */}
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {specialtyList &&
                specialtyList.map((req) => (
                  <tr key={req.id}>
                    <td> {req.specialtyId} </td>
                    {/* <td> {req.description} </td> */}
                    {/* <td dir="ltr"> {req.date} </td> */}
                    <td>
                      {req.validated ? (
                        <h5>
                          <Badge bg="success">{req.status}</Badge>
                          {"  "}
                          <Button
                            style={{ marginLeft: "1em" }}
                            onClick={() => removeSpecialty(req.specialtyId)}
                            variant="danger"
                          >
                            حذف
                          </Button>{" "}
                        </h5>
                      ) : (
                        <div>
                          <h5>
                            <Badge>{req.status}</Badge>
                            {"   "}
                            <Button
                              style={{ marginLeft: "1em" }}
                              onClick={() => removeSpecialty(req.specialtyId)}
                              variant="danger"
                              disabled
                            >
                              لغو
                            </Button>{" "}
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

function removeSpecialty(id) {
  axios
    .delete(urls.certificate.remove(id), { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        toast.success("حذف تخصص با موفقیت انجام شد.", {
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
function addSpecialty(id) {
  axios
    .post(
      urls.certificate.add(),
      {
        specialtyId: id,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.status === 200) {
        toast.success("ثبت تخصص با موفقیت انجام شد.", {
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
export default SpecialityList;
