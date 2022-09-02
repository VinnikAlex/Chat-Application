/** @format */

/** @format */

// import { useState } from "react";
import users from "./Axios/users";

const Conversations = ({ newUserToken }) => {
  //   const [allconversations, getConversations] = useState([]);
  console.log("Conversations token:", newUserToken);
  let convo = [];

  users.getConversations(newUserToken).then((data) => {
    convo = data.data.conversations;
    console.log("conversations:", convo);
  });

  return (
    <div>
      <p>Token exists</p>
      {convo.map((conversations) => (
        <li key={conversations.id}>
          {" "}
          {conversations.messages} - {conversations.title}
        </li>
      ))}
    </div>
  );
};

export default Conversations;
