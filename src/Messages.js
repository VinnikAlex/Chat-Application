/** @format */

import { useState, useEffect } from "react";
import users from "./Axios/users";

const Messages = ({ newUserToken }) => {
  const [message, createMessage] = useState("");
  const [recentMessages, getRecentMessages] = useState([""]);

  console.log(message);

  //   //get recent messages

  //   useEffect(() => {
  //     users
  //       .getMessages(newUserToken, localStorage.getItem("conversation"))
  //       .then((data) => {
  //         console.log("Messages", data);
  //         // getRecentMessages(data.data.text);
  //       });

  //     const interval = setInterval(() => {
  //       users.getMessages(newUserToken).then((data) => {
  //         // getRecentMessages(data.data.text);
  //       });
  //     }, 15000);

  //     return () => clearInterval(interval);
  //   }, [null]);

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

  return (
    <div className="messages">
      {/* {recentMessages.map((message) => (
        <li key={message.id} className="message-list">
          {" "}
          <b>{message.creator}</b> <br></br> Messages: {message.text}
        </li>
      ))} */}

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
};

export default Messages;
