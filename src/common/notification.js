import React, { useState } from "react";
import { ListGroup, Badge } from "react-bootstrap";

import { StyleSheet, css } from "aphrodite";

const NotificationPanel = ({ layout, stickyTop }) => {
  const [notifs, setNotifs] = useState([
    {
      topic: "ثبت درخواست خدمت",
      describtion:
        "شما درخواست خود را برای تعمیر کولر خود ثبت کردید به محض پیدا شدن متخصص به شما اعلام خواهیم کرد",
      date: "۱۴۰۱/۱/۱",
      isNew: true,
    },
    {
      topic: "ثبت درخواست خدمت",
      describtion:
        "شما درخواست خود را برای تعمیر کولر خود ثبت کردید به محض پیدا شدن متخصص به شما اعلام خواهیم کرد",
      date: "۱۴۰۱/۱/۱",
      isNew: true,
    },
    {
      topic: "ثبت درخواست خدمت",
      describtion:
        "شما درخواست خود را برای تعمیر کولر خود ثبت کردید به محض پیدا شدن متخصص به شما اعلام خواهیم کرد",
      date: "۱۴۰۱/۱/۱",
      isNew: false,
    },
  ]);
  return (
    <div className={css(styles.notificationList)}>
      <ListGroup>
        <ListGroup.Item>
          <ListGroup horizontal className={css(styles.notificationItem)}>
            <ListGroup.Item style={{ border: "0px" }}>موضوع</ListGroup.Item>
            <ListGroup.Item style={{ border: "0px" }}>توضیحات</ListGroup.Item>
            <ListGroup.Item style={{ border: "0px" }}>تاریخ</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <br />

        {notifs.map((notif) => (
          <ListGroup.Item>
            <ListGroup horizontal className={css(styles.notificationItem)}>
              <ListGroup.Item style={{ border: "0px" }}>
                {notif.topic}
                {notif.isNew ? (
                  <Badge bg="primary" pill>
                    جدید
                  </Badge>
                ) : null}
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "0px" }}>
                {notif.describtion}
              </ListGroup.Item>
              <ListGroup.Item style={{ border: "0px" }}>
                {notif.date}
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
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
export default NotificationPanel;
