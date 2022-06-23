import React from "react";
import {
  Container,
  ListGroup,
  Badge,
  Col,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import {
  FiShoppingCart,
  FiMessageSquare,
  FiUser,
  FiPackage,
} from "react-icons/fi";
import { StyleSheet, css } from "aphrodite";

const Transportation = ({}) => {
  return (
    <div class="border border-success border-radius-sm">
      <Container className={css(styles.groupServiceForm)}>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>آدرس مقصد</Form.Label>
          <Form.Control />{" "}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>وزن تقریبی</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group  controlId="serviceType">
            <Form.Label>نوع وسیله مورد نظر</Form.Label>
            <Form.Select>
              <option value="1">موتور</option>
              <option value="2">وانت</option>
              <option value="3">کامیون</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Container>
    </div>
  );
};
const styles = StyleSheet.create({
  groupServiceForm: {
    direction: "rtl",
  },
  notificationItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10px",
  },
});
export default Transportation;
