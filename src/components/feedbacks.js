import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal, Row, Table } from "react-bootstrap";

import { css, StyleSheet } from "aphrodite";
import { toast } from "react-toastify";
import urls from "../common/urls";
import { useFetch } from "../utils/useFetch";
import { useNavigate } from "react-router-dom";

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
    // <div className={css(styles.notificationList)}>
    //   <ListGroup>
    //     <ListGroup.Item>
    //       <ListGroup horizontal className={css(styles.notificationItem)}>
    //         <ListGroup.Item style={{ border: "0px" }}>موضوع</ListGroup.Item>
    //         <ListGroup.Item style={{ border: "0px" }}>فرستنده</ListGroup.Item>
    //         <ListGroup.Item style={{ border: "0px" }}>توضیحات</ListGroup.Item>
    //         <ListGroup.Item style={{ border: "0px" }}>تاریخ</ListGroup.Item>
    //       </ListGroup>
    //     </ListGroup.Item>
    //     <br />

    //     {notifs &&
    //       notifs.map((notif) => (
    //         <ListGroup.Item>
    //           <ListGroup horizontal className={css(styles.notificationItem)}>
    //             <ListGroup.Item style={{ border: "0px" }}>
    //               {notif.title}
    //             </ListGroup.Item>{" "}
    //             <ListGroup.Item style={{ border: "0px" }}>
    //               {notif.writerEmail}
    //             </ListGroup.Item>
    //             <ListGroup.Item style={{ border: "0px" }}>
    //               {notif.content}
    //             </ListGroup.Item>
    //             <ListGroup.Item style={{ border: "0px" }}>
    //               {notif.timeStamp.slice(0,10)}
    //             </ListGroup.Item>
    //           </ListGroup>
    //         </ListGroup.Item>
    //       ))}
    //   </ListGroup>
    // </div>
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
