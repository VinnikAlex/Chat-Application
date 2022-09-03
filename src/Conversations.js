/** @format */

/** @format */

// import { useState } from "react";
import { useEffect, useState } from "react";
import users from "./Axios/users";
// import { WebSocketServer } from "ws";

const Conversations = ({ newUserToken }) => {
  const [convo, setconversation] = useState([]);
  const [conversationTitle, setConversationTitle] = useState("");

  // fetches conversations every 1.5s
  useEffect(() => {
    users.getConversations(newUserToken).then((data) => {
      console.log("hey", data);
      setconversation(data.data.conversations);
    });

    const interval = setInterval(() => {
      users.getConversations(newUserToken).then((data) => {
        console.log("hey", data);
        setconversation(data.data.conversations);
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [null]);

  const createConversation = (event) => {
    event.preventDefault();
    users.createConversation(newUserToken, conversationTitle);
    console.log("Token works:", newUserToken);
  };

  return (
    <div>
      <div className="conversation-div">
        <h5>Conversations:</h5>
        {convo.map((conversation) => (
          <li key={conversation.id} className="conversations">
            {" "}
            <b>{conversation.title}</b> <br></br> Messages:{" "}
            {conversation.messages}
          </li>
        ))}
      </div>
      {/* submission form for new conversation */}
      <div className="postSubmit">
        <form onSubmit={createConversation}>
          <label htmlFor="newUser">Conversation Title</label>
          <input
            type="text"
            name="newUser"
            onChange={(e) => setConversationTitle(e.target.value)}
          ></input>
          <button className="button-primary">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default Conversations;
