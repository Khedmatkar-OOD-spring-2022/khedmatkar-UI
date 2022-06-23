import React from "react";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import "./css/ChatList.css";

export default function ChatList({ db, user }) {
  const [chats, setChats] = useState([
    {
      uid: "2",
      msg: "سلام",
      time: new Date().getTime(),
      dp: "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-character-avatar-icon-design-image_2292859.jpg",
    },
    {
        uid: "1",
        msg: "سلام",
        time: new Date().getTime(),
        dp: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      },
  ]);
  return (
    <div className="all-chats" id="allChats">
      {chats.map((e, i) => {
        if (e.uid == user.uid) {
          return <Chat data={e} user={user} key={i} loggedIn={true} />;
        } else {
          return <Chat data={e} user={user} key={i} loggedIn={false} />;
        }
      })}
    </div>
  );
}
