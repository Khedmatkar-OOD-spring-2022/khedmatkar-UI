import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ChatList from "./ChatList";
import { StyleSheet, css } from "aphrodite";

import "./css/ChatRoom.css";
import urls from "../../common/urls";
import axios from "axios";
import { toast } from "react-toastify";
import { useFetch } from "../../utils/useFetch";
import { useNavigate } from "react-router-dom";
const styles = StyleSheet.create({
  chatroom: {
    position: "absolute",
    minHeight: "50%",
    justifyContent: "center",
    left: "8%",
    width: "70%",
  },
  send_form: {
    width: "65%",
    left: "10%",
    position: "fixed",
    justifyContent: "center",
    bottom: 20,
    display: "flex",
    paddingTop: "20px",
  },
});
export default function ChatRoom({ chatroom, user, onSend }) {
  const [input, setInput] = useState("");

  function writeUserData() {
    const elem = document.getElementById("allChats");
    if (input === "") {
      elem.scrollTop = elem.scrollHeight;
    }
  }
  function enterUserData(e) {
    if (e.keyCode === 13) {
      writeUserData();
    }
  }
  return (
    <div className={css(styles.chatroom)}>
      <ChatList messages={chatroom.messages} user={user} />
      <div className={css(styles.send_form)} dir="rtl">
        <Form.Control
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            enterUserData(e);
          }}
          placeholder="پیام خود را وارد کنید..."
          style={{ width: "80%" }}
        />
        <Button
          variant="primary"
          style={{ width: "10%", fontSize: 26 }}
          onClick={() => {
            onSend(chatroom.chatId,input)
          }}
          disabled={chatroom.status!=="OPENED"}
        >
          ارسال
        </Button>
      </div>
    </div>
  );
}
