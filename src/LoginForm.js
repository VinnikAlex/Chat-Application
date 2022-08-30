/** @format */

import { useState } from "react";
import users from "./Axios/users";

const LoginForm = () => {
  const [newUser, setUsername] = useState("");

  const formhandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted", newUser);

    users.create({ username: newUser });
  };

  const loginhandler = (event) => {
    event.preventDefault();

    users.getUser(newUser);
  };

  return (
    <form onSubmit={loginhandler}>
      <label htmlFor="newUser">Username</label>
      <input
        type="text"
        name="newUser"
        onChange={(e) => setUsername(e.target.value)}
      ></input>{" "}
      <button className="button-primary">Register</button>
      <button className="button-primary">Login</button>
    </form>
  );
};

export default LoginForm;
