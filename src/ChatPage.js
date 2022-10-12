import React, { useEffect, useState, useRef } from "react";
import "./ChatPage.css";
import Chat from "./Chat";

export const ChatPage = ({ username }) => {
  const [message, setMessage] = useState("");
  const bottomRef = useRef(null);
  const msgRef = useRef(null);
  const [data1, setData1] = useState({});

  let LSdata = JSON.parse(localStorage.getItem("chats"))[0];

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
      msgRef.current.value = "";
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

  useEffect(() => {
    setData1(LSdata);
  }, [LSdata]);

  let messages = data1;

  //Allows the chat to scroll to the bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      getChatsFromLocalStorage();
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="chat__room">
      <p className="chat__header">CHAT ROOM</p>

      <div className="chats__section">
        {getChatsFromLocalStorage().map(
          (chat, index) =>
            //This will limit the data shown to 25
            index < 25 && (
              <Chat username={chat.sender} chat={chat.msg} key={index} />
            )
        )}
        <div ref={bottomRef}></div>
      </div>

      <div className="chat__send">
        <input
          type="text"
          ref={msgRef}
          placeholder="Enter Message"
          onChange={(text) => setMessage(text.target.value)}
        />
        <button onClick={() => addMessageToLS(message, username)}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
