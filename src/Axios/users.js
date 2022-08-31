/** @format */

import axios from "axios";

const jwt = require("jsonwebtoken");

// const baseURL = "http://localhost:8102/";

const getUser = (user) => {
  const token = jwt.verify(user, process.env.SECRET);

  return axios
    .get("http://localhost:8102/auth/", {
      headers: {
        authorization: "Basic " + token,
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
