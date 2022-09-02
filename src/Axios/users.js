/** @format */

import axios from "axios";
// import { response } from "express";
// require("dotenv").config();

// const jwt = require("jsonwebtoken");

// const getUser = (user) => {
//   //   console.log(process.env.SESSION_DB_SECRET);

//   const config = {
//     headers: {
//       authorization: "Basic " + { token },
//     },
//   };

//   return axios
//     .get("http://localhost:8102/auth/", config)
//     .then((response) => console.log(response.data));
// };

// let conversationsStore = [];

const createUser = (newUser) => {
  return axios
    .post("http://localhost:8102/auth/register", newUser)
    .catch((err) => console.log(err));
};

const getConversations = (token) => {
  return axios
    .get("http://localhost:8102/api/conversations/", {
      headers: {
        authorization: "Basic " + token,
      },
    })
    .catch((err) => console.log(err));
};

const createConversation = () => {
  return axios
    .post("http://localhost:8102/api/conversations/", {
      headers: {
        authorization: "Basic 63119bcffe2d44a1604577b2",
      },
      title: "newTitle",
    })
    .catch((err) => console.log(err));
};

// const createConversation = (token) => {};

export default {
  createUser: createUser,
  getConversations: getConversations,
  createConversation: createConversation,
};
