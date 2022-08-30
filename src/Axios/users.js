/** @format */

import axios from "axios";
// import jwt from " jsonwebtoken";

// const jwt = require("jsonwebtoken");

// const baseURL = "http://localhost:8102/";

const getUser = (user) => {
  //   const token = jwt.sign(user, process.env.SECRET);

  return axios
    .get("http://localhost:8102/auth/", {
      headers: {
        authorization: "Basic 630ea12ff0bd4551c9a669b8",
      },
      username: user,
    })
    .then((response) => console.log(response.data));
};

const create = (newUser) => {
  return axios.post("http://localhost:8102/auth/register", newUser);
};

const remove = (id) => {
  return axios.delete("/" + id);
};

export default {
  getUser: getUser,
  create: create,
  remove: remove,
};
