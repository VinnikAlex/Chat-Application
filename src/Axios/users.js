/** @format */

import axios from "axios";

const baseURL = "https://secret-gorge-72509.herokuapp.com";

const createUser = async (newUser) => {
  return axios
    .post(baseURL + "/auth/register", newUser)
    .catch((err) => console.log(err));
};

const getConversations = async (token) => {
  return axios
    .get(baseURL + "/api/conversations/", {
      headers: {
        authorization: "Basic " + token,
      },
    })
    .catch((err) => console.log(err));
};

const createConversation = async (token, conversationTitle) => {
  return axios
    .post(
      baseURL + "/api/conversations/",
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
      baseURL + "/api/conversations/" + conversationID,

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
      baseURL + "/api/conversations" + conversationID,
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
    .delete(baseURL + "/api/conversations/" + conversation + "/" + message, {
      headers: {
        ContentType: "application/json",
        authorization: "Basic " + token,
      },
    })
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
