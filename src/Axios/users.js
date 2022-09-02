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
  return axios.post("http://localhost:8102/auth/register", newUser);
};

const getConversations = (token) => {
  console.log("TOKEN:", token);

  return axios.get("http://localhost:8102/api/conversations/", {
    headers: {
      authorization: "Basic " + token,
    },
  });
  // .then((response) =>
  //   console.log("Convossss: ", response.data.conversations)
  // );
  // .catch((error) => {
  //   console.log(error.response.data.message);
  // });
};

// const createConversation = (token) => {};

export default {
  createUser: createUser,
  getConversations: getConversations,
};
