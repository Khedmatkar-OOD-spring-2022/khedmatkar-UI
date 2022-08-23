import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { ShowError } from "../common/errors";
import urls from "../common/urls";
import { useFetch } from "../utils/useFetch";
import { NewSpecialty, RemoveSpecialty } from "./modals/manageSpecialty";

const SpecialityManagmentPanel = ({}) => {
  const [specialtyList, setSpecialityList] = useState(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const { data, error, loading } = useFetch(
    urls.speciality.getAll(true),
    "GET"
  );
  useEffect(() => {
    if (error) {
      ShowError(error);
    }
    setSpecialityList(data);
  }, [error, data]);

  return (
    <div dir="rtl">
      <NewSpecialty show={showNewModal} setShow={setShowNewModal} />
      <RemoveSpecialty
        show={showRemoveModal}
        setShow={setShowRemoveModal}
        specialtyList={specialtyList}
        action={removeSpecialty}
      />
      <h2 className="text-center" style={{ padding: "1em" }}>
        {"مدیریت تخصص های سامانه"}
      </h2>
      <div style={{ textAlign: "left" }}>
        <Button color="primary" onClick={() => setShowNewModal(true)}>
          {"ثبت تخصص اصلی"}
        </Button>{" "}
        <Button
          variant="outline-danger"
          onClick={() => setShowRemoveModal(true)}
        >
          {"حذف تخصص اصلی"}
        </Button>
      </div>
      {specialtyList &&
        specialtyList.map((s) => (
          <Row>
            <MainSpeciality id={s.id} name={s.name} />
          </Row>
        ))}
    </div>
  );
};

const MainSpeciality = ({ id, name }) => {
  const [specialtyList, setSpecialityList] = useState();
  const [showNewModal, setShowNewModal] = useState(false);
  const { data, error, loading } = useFetch(
    urls.speciality.getChildren(id),
    "GET"
  );
  useEffect(() => {
    if (error) {
      ShowError(error);
    }
    setSpecialityList(data);
  }, [error, data]);

  return (
    <>
      <NewSpecialty
        show={showNewModal}
        setShow={setShowNewModal}
        id={id}
        name={name}
      />
      <h3>{name}</h3>
      <div style={{ textAlign: "left" }}>
        <Button color="primary" onClick={() => setShowNewModal(true)}>
          {"ثبت تخصص"}
        </Button>{" "}
      </div>
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th width="40%">نام تخصص</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {specialtyList &&
            specialtyList.map((req) => (
              <tr key={req.id}>
                <td> {req.name} </td>
                <td>
                  <div>
                    <h5>
                      <Button
                        style={{ marginLeft: "1em" }}
                        onClick={() => removeSpecialty(req.id)}
                        variant="outline-danger"
                      >
                        {"حذف تخصص"}{" "}
                      </Button>{" "}
                    </h5>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

function removeSpecialty(id) {
  axios
    .delete(urls.speciality.remove(id))
    .then((res) => {
      if (res.status === 200) {
        toast.success("حذف تخصص با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        window.location.reload(true);
      }
    })
    .catch((error) => {
      ShowError(error);
    });
}
export default SpecialityManagmentPanel;
