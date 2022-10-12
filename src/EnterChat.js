import React, { useState } from "react";
import ChatPage from "./ChatPage";
import "./EnterChat.css";

export const EnterChat = () => {
  const [username, setUsername] = useState("");
  const [chats, showChats] = useState(false);
  const [showUserField, setShowUserField] = useState(true);

  const submitUsername = () => {
    // if username was not an empty string
    if (username !== "") {
      //display the chat area
      showChats(true);
      setShowUserField(false);
    }
  };

  return (
    <div>
      {showUserField && (
        <div className="container">
          <p>Enter Username</p>

          <input
            className="username"
            type="text"
            placeholder="Enter Username"
            onChange={(text) => setUsername(text.target.value)}
          />

          <button onClick={() => submitUsername(username)}>Enter</button>
        </div>
      )}

      {chats && (
        <div className="chat-area">
          <ChatPage username={username} />
        </div>
      )}
    </div>
  );
};

export default EnterChat;
