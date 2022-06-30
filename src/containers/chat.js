import React, { useState } from "react";
import { Row } from "react-bootstrap";
import ChatRoom from "../components/chat/ChatRoom";
const   Chat = () => {
  const [user, setUser] = useState({ uid: "1" });

  return (
    <React.Fragment>
      <ChatRoom user={user} />
    </React.Fragment>
  );
};

export default Chat;
