/** @format */

/** @format */

// import { useState } from "react";
import { useState } from "react";
import users from "./Axios/users";

const Conversations = ({ newUserToken }) => {
  const [convo, setconversation] = useState([]);
  const [conversationTitle, setConversation] = useState("");
  // loads all conversations
  users.getConversations(newUserToken).then((data) => {
    setconversation(data.data.conversations);
  });

  // creates new conversation
  const createConversation = (event) => {
    event.preventDefault();
    users.createConversation();
    console.log("Token works:", newUserToken);
  };

  return (
    <div>
      <h5>Conversations:</h5>
      {convo.map((conversation) => (
        <li key={conversation.id} className="conversations">
          {" "}
          <b>{conversation.title}</b> <br></br> Messages:{" "}
          {conversation.messages}
        </li>
      ))}
      {/* submission form for new conversation */}
      <div className="postSubmit">
        <form onSubmit={createConversation}>
          <label htmlFor="newUser">Conversation Title</label>
          <input
            type="text"
            name="newUser"
            onChange={(e) => setConversation(e.target.value)}
          ></input>
          <button className="button-primary">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default Conversations;
