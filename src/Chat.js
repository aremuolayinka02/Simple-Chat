import React, { useState } from "react";
import "./Chat.css";

export const Chat = () => {
  const [message, setMessage] = useState("");

  const addMessageToLS = (message) => {
    if (message !== "") {
      let chats = getChatsFromLocalStorage();

      chats.push(message);

      //Store the Array
      localStorage.setItem("chats", JSON.stringify(chats));

      //Clear the text input
      setMessage("");
    }
  };

  const getChatsFromLocalStorage = () => {
    let chats = localStorage.getItem("chats");

    if (chats === null) {
      chats = [];
    } else {
      chats = JSON.parse(chats);
    }

    return chats;
  };

  return (
    <div className="chat__room">
      <p className="chat__header">CHAT ROOM</p>

      <div className="chats__section">
        {getChatsFromLocalStorage().map((chat, index) => (
          <p key={index}>{chat}</p>
        ))}
      </div>

      <div className="chat__send">
        <input
          type="text"
          placeholder="Enter Message"
          onChange={(text) => setMessage(text.target.value)}
        />
        <button onClick={() => addMessageToLS(message)}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
