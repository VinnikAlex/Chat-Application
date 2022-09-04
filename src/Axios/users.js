/** @format */

import axios from "axios";

const createUser = async (newUser) => {
  return axios
    .post("http://localhost:8102/auth/register", newUser)
    .catch((err) => console.log(err));
};

const getConversations = async (token) => {
  console.log("socket loading");

  return axios
    .get("http://localhost:8102/api/conversations/", {
      headers: {
        authorization: "Basic " + token,
      },
    })
    .catch((err) => console.log(err));
};

const createConversation = async (token, conversationTitle) => {
  return axios
    .post(
      "http://localhost:8102/api/conversations/",
      {
        title: conversationTitle,
      },
      {
        headers: {
          ContentType: "application/json",
          authorization: "Basic " + token,
        },
      }
    )
    .catch((err) => console.log(err));
};

const getMessages = async (token, conversationID) => {
  return axios
    .get(
      "http://localhost:8102/api/conversations/" + conversationID,

      {
        headers: {
          ContentType: "application/json",
          authorization: "Basic " + token,
        },
      }
    )
    .catch((err) => console.log(err.response.data));
};

const createMessage = async (token, conversationID, message) => {
  return axios
    .post(
      "http://localhost:8102/api/conversations/" + conversationID,
      {
        text: message,
      },
      {
        headers: {
          ContentType: "application/json",
          authorization: "Basic " + token,
        },
      }
    )
    .catch((err) => console.log(err));
};

export default {
  createUser: createUser,
  getConversations: getConversations,
  createConversation: createConversation,
  createMessage: createMessage,
  getMessages: getMessages,
};
