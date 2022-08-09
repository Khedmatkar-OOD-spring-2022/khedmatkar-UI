import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Table } from "react-bootstrap";

import { StyleSheet } from "aphrodite";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../common/urls";
import { useFetch } from "../utils/useFetch";

const FeedbackPanel = ({}) => {
  const [notifs, setNotifs] = useState();
  const { data, error, loading } = useFetch(urls.admin.getFeedbacks(), "GET");
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error && error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (typeof data == "string") {
      localStorage.removeItem("user");
      navigate("/login");
    }
    setNotifs(data);
  }, [error, data]);

  return (
    <div dir="rtl">
      <h2 className="text-center" style={{ padding: "1em" }}>
        فهرست پیشنهادات و انتقادات
      </h2>
      <Row>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>موضوع</th>
              <th>فرستنده</th>
              <th>توضیحات</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {notifs &&
              notifs.map((notif) => (
                <tr key={notif.id}>
                  <td> {notif.title} </td>
                  <td> {notif.writerEmail} </td>
                  <td>
                    <DescriptionModal description={notif.content}
                     /> 
                  </td>
                  <td dir="ltr"> {notif.timeStamp.slice(0, 10)} </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

function DescriptionModal({description}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      {"مشاهده توضیحات"}
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  notificationList: {
    direction: "rtl",
  },
  notificationItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10px",
  },
});
export default FeedbackPanel;
