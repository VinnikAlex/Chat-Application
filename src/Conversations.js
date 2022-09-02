/** @format */

/** @format */

// import { useState } from "react";
import { useState } from "react";
import users from "./Axios/users";

const Conversations = ({ newUserToken }) => {
  const [convo, setconversation] = useState([]);
  //   console.log("Conversations token:", newUserToken);

  users.getConversations(newUserToken).then((data) => {
    setconversation(data.data.conversations);
    // console.log("conversations:", convo);
  });

  return (
    <div>
      <h3>Conversations:</h3>
      {convo.map((conversation) => (
        <li key={conversation.id}> {conversation.title}</li>
      ))}
    </div>
  );
};

export default Conversations;
