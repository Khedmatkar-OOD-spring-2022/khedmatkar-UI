import React from "react";
import {
  ListGroup,
  Badge,
} from "react-bootstrap";

import { StyleSheet, css } from "aphrodite";

const NotificationPanel = ({ layout, stickyTop }) => {
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

        <ListGroup.Item>
          <ListGroup horizontal className={css(styles.notificationItem)}>
            <ListGroup.Item style={{ border: "0px" }}>
              ثبت درخواست خدمت
              <Badge bg="primary" pill>
                جدید
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "0px" }}>
              شما درخواست خود را برای تعمیر کولر خود ثبت کردید به محض پیدا شدن
              متخصص به شما اعلام خواهیم کرد
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "0px" }}>۱۴۰۱/۱/۱</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <ListGroup horizontal className={css(styles.notificationItem)}>
            <ListGroup.Item style={{ border: "0px" }}>
              ثبت درخواست خدمت
              <Badge bg="primary" pill>
                جدید
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "0px" }}>
              شما درخواست خود را برای تعمیر کولر خود ثبت کردید به محض پیدا شدن
              متخصص به شما اعلام خواهیم کرد
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "0px" }}>۱۴۰۱/۱/۱</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item>
          <ListGroup horizontal className={css(styles.notificationItem)}>
            <ListGroup.Item style={{border:'0px'}}>
              ثبت درخواست خدمت
              <Badge bg="primary" pill>
                جدید
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item style={{border:'0px'}}>شما درخواست خود را برای تعمیر کولر خود ثبت کردید به محض پیدا شدن متخصص به شما اعلام خواهیم کرد</ListGroup.Item>
            <ListGroup.Item style={{border:'0px'}}>۱۴۰۱/۱/۱</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
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
