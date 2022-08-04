import React from "react";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import "./css/ChatList.css";

export default function ChatList({ messages, user }) {
  return (
    <div className="all-chats" id="allChats">
      {messages.map((e, i) => {
        if (e.senderEmail === user.email) {
          return <Chat data={e} user={user} key={i} loggedIn={true} />;
        } else {
          return <Chat data={e} user={user} key={i} loggedIn={false} />;
        }
      })}
    </div>
  );
}
