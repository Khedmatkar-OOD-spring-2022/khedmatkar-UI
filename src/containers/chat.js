import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, useAccordionButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../common/urls";
import ChatRoom from "../components/chat/ChatRoom";
import { useAuth } from "../providers/authentication";
import { useFetch } from "../utils/useFetch";
const ChatApp = () => {
  const [user] = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  const [chatroom, setChatroom] = useState();
  const { data, error, loading } = useFetch(
    urls.chat.getByServicRequest(params.id),
    "GET"
  );

  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
    }
    setChatroom(data && data[0]);
  }, [error, data]);

  function sendMessage(chatId, text) {
    axios
      .post(
        urls.chat.sendMessage(),
        {
          chatId: chatId,
          text: text,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload(true)
        }
      })
      .catch((error) => {
        toast.error(error && error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  }

  return (
    <React.Fragment>
      {chatroom && (
        <ChatRoom chatroom={chatroom} user={user} onSend={sendMessage} />
      )}
    </React.Fragment>
  );
};

export default ChatApp;
