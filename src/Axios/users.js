/** @format */

import axios from "axios";

// const baseURL = "http://localhost:3000/api";

const createUser = async (newUser) => {
  return axios
    .post("https://secret-gorge-72509.herokuapp.com//auth/register", newUser)
    .catch((err) => console.log(err));
};

const getConversations = async (token) => {
  return axios
    .get("https://secret-gorge-72509.herokuapp.com//api/conversations/", {
      headers: {
        authorization: "Basic " + token,
      },
    })
    .catch((err) => console.log(err));
};

const createConversation = async (token, conversationTitle) => {
  return axios
    .post(
      "https://secret-gorge-72509.herokuapp.com//api/conversations/",
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
      "https://secret-gorge-72509.herokuapp.com//api/conversations/" +
        conversationID,

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
      "https://secret-gorge-72509.herokuapp.com//api/conversations/" +
        conversationID,
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

const deleteMessage = async (token, message, conversation) => {
  return axios
    .delete(
      "https://secret-gorge-72509.herokuapp.com//api/conversations/" +
        conversation +
        "/" +
        message,
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
  deleteMessage: deleteMessage,
};
