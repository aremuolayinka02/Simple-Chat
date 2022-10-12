import React from "react";
import "./Chat.css";

export const Chat = () => {
  return (
    <div className="chat__room">
      <p className="chat__header">CHAT ROOM</p>

      <div className="chat__send">
        <input type="text" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
