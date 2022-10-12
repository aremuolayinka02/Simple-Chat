import React, { useState } from "react";
import "./EnterChat.css";

export const EnterChat = () => {
  const [username, setUsername] = useState("");

  const submitUsername = (userInput) => {
    // if username was non-empty string, true, 42, Infinity, [], ...
    if (username) {
      //Goos
    }
  };

  return (
    <div className="container">
      <p>Enter Username</p>

      <input
        className="username"
        type="input"
        placeholder="Enter Username"
        onChange={(text) => setUsername(text.target.value)}
      />

      <p>{username}</p>

      <button onClick={submitUsername(username)}>Enter</button>
    </div>
  );
};

export default EnterChat;
