import React from "react";
import "./Chat.css";

export const Chat = ({ chat, username }) => {
  return (
    <div className="message__container">
      <p className="avatar">{username[0]}</p>
      <div className="message">
        <p>{username}</p>
        <p>{chat}</p>
      </div>
    </div>
  );
};

export default Chat;
