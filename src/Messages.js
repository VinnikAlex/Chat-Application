/** @format */

import { useState, useEffect } from "react";
import users from "./Axios/users";

const Messages = ({ newUserToken }) => {
  const [message, createMessage] = useState("");
  const [recentMessages, getRecentMessages] = useState([""]);

  console.log("STATE", recentMessages);

  //   //get recent messages

  useEffect(() => {
    users
      .getMessages(newUserToken, localStorage.getItem("conversation"))
      .then((data) => {
        console.log("Messages", data.data.messages);
        getRecentMessages(data.data.text);
      });

    const interval = setInterval(() => {
      users
        .getMessages(newUserToken, localStorage.getItem("conversation"))
        .then((data) => {
          getRecentMessages(data.data.messages);
        });
    }, 1500);

    return () => clearInterval(interval);
  }, [null]);

  const sendMessage = (event) => {
    event.preventDefault();
    users
      .createMessage(
        newUserToken,
        localStorage.getItem("conversation"),
        message
      )
      .then((data) => {
        console.log("Message Sent:", data);
      });
  };

  const handleMessageDeletion = (e) => {
    console.log("CLICKED", e.target.value);
    users.deleteMessage(
      newUserToken,
      e.target.value,
      localStorage.getItem("conversation")
    );
  };

  //   const deleteMessage = (messageID, conversationID) => {
  //     console.log(
  //       "MessageID",
  //       messageID,
  //       "ConversationID",
  //       conversationID,
  //       "UserToken",
  //       localStorage.getItem("token")
  //     );
  //     users.deleteMessage(newUserToken, conversationID);
  //   };

  if (recentMessages) {
    return (
      <div className="messages">
        {recentMessages.map((message) => (
          <li key={message.id} className="message-list">
            {" "}
            <b>{message.creator}:</b> <br></br>
            {message.text}
            <button
              value={message.id}
              className="delete"
              onClick={handleMessageDeletion}
            >
              Delete
            </button>
          </li>
        ))}

        <div className="textbox">
          <div className="messageSend">
            <form onSubmit={sendMessage}>
              <label htmlFor="newUser">Type Message:</label>
              <input
                type="text"
                name="newUser"
                onChange={(e) => createMessage(e.target.value)}
              ></input>

              <button className="button-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="messages">
        <div className="textbox">
          <div className="messageSend">
            <form onSubmit={sendMessage}>
              <label htmlFor="newUser">Type Message:</label>
              <input
                type="text"
                name="newUser"
                onChange={(e) => createMessage(e.target.value)}
              ></input>

              <button className="button-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Messages;
