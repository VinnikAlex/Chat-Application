/** @format */

import axios from "axios";

import { io } from "socket.io-client";

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
  console.log("got here");
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

// const createConversation = (token) => {};

export default {
  createUser: createUser,
  getConversations: getConversations,
  createConversation: createConversation,
};
