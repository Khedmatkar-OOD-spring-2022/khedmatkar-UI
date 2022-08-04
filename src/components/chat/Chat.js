import React from "react";
import "./css/Chat.css";
export default function Chat({ data, user, loggedIn }) {
  if (loggedIn) {
    return (
      <div className="msg-block-logged">
        <div className="chat-flex-logged">
          <div className="dp-container">
            <img
              className="dp"
              src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
              alt=""
            />
          </div>
          <div className="msg-container">
            <p className="message" >
              {data.text}
            </p>
          </div>
        </div>
        <div className="date-time-container-logged">
          <h6 className="msg-time">
            {new Date(data.timeStamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h6>
          <h6 className="msg-date">
            {new Date(data.timeStamp).toLocaleDateString()}
          </h6>
        </div>
      </div>
    );
  } else {
    return (
      <div className="msg-block">
        <div className="chat-flex">
          <div className="dp-container">
            <img
              className="dp"
              src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-character-avatar-icon-design-image_2292859.jpg"
              alt=""
            />
          </div>
          <div className="msg-container">
            <p className="message" >
              {data.text}
            </p>
          </div>
        </div>
        <div className="date-time-container">
          <h6 className="msg-time">
            {new Date(data.timeStamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h6>
          <h6 className="msg-date">
            {new Date(data.timeStamp).toLocaleDateString()}
          </h6>
        </div>
      </div>
    );
  }
}
