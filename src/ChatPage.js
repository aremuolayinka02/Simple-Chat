import React, { useEffect, useState, useRef } from "react";
import "./ChatPage.css";
import Chat from "./Chat";

export const ChatPage = ({ username }) => {
  const [message, setMessage] = useState("");
  const bottomRef = useRef(null);

  const addMessageToLS = (message, username) => {
    //Save the message with the username
    let messageData = {
      sender: username,
      msg: message,
    };

    if (messageData.sender !== "" && messageData.msg !== "") {
      let chats = getChatsFromLocalStorage();

      chats.push(messageData);

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

  let messages = getChatsFromLocalStorage();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat__room">
      <p className="chat__header">CHAT ROOM</p>

      <div className="chats__section">
        {getChatsFromLocalStorage().map((chat, index) => (
          <Chat username={chat.sender} chat={chat.msg} key={index} />
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="chat__send">
        <input
          type="text"
          placeholder="Enter Message"
          onChange={(text) => setMessage(text.target.value)}
        />
        <button onClick={() => addMessageToLS(message, username)}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
