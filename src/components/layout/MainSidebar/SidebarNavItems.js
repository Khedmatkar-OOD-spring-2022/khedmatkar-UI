import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import SidebarNavItem from "./SidebarNavItem";
import CommentModal from "../../modals/comment";
import { useNavigate } from "react-router-dom";

const SidebarNavItems = ({ items,hideFeedback }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="nav-wrapper">
      <CommentModal show={showCommentModal} setShow={setShowCommentModal} />
      <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <br></br>
        <div className="sidebar-sticky flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} onClick={navigate} />
          ))}

          {!hideFeedback?<Button
            className={css(styles.commentButton)}
            onClick={() => setShowCommentModal(true)}
          >
            {"ثبت انتقادات و پیشنهادات"}
          </Button>:null}
        </div>
      </Nav>
    </div>
  );
};
const styles = StyleSheet.create({
  commentButton: {
    alignItems: "center",
    float: "left",
    margin: "10%",
    marginTop: "50px",
  },
});
export default SidebarNavItems;
