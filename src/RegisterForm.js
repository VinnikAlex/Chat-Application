/** @format */

import { useState } from "react";
import users from "./Axios/users";
import Conversations from "./Conversations";

const Register = ({ user, setUser }) => {
  const [newUser, setUsername] = useState("");

  const registerForm = (event) => {
    event.preventDefault();

    console.log("Form Submitted", newUser);

    users.createUser({ username: newUser }).then((data) => {
      if (data.data.status === "username taken") {
        alert("Error: Username Taken");
      } else {
        console.log("Success: ", data);
        setUser(data);
        localStorage.setItem("token", data.data.token);
        console.log("Token localStorage:", localStorage.getItem("token"));
      }
    });
  };

  const signOut = () => {
    localStorage.removeItem("token");
    user = null;
  };

  if (user) {
    return (
      <div className="row">
        <p>Logged in as: {newUser}</p>
        <form onSubmit={signOut}>
          <button className="button-primary">Sign Out</button>
        </form>
        <div>
          <Conversations newUserToken={localStorage.getItem("token")} />
        </div>
      </div>
    );
  } else {
    return (
      <form onSubmit={registerForm}>
        <label htmlFor="newUser">Username</label>
        <input
          type="text"
          name="newUser"
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <button className="button-primary">Register</button>
      </form>
    );
  }
};

export default Register;
