/** @format */

import { useState } from "react";
import users from "./Axios/users";
import Conversations from "./Conversations";
import Messages from "./Messages";

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
        //storing token
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
      <div>
        <h5>Logged in as: {newUser}</h5>
        <form onSubmit={signOut}>
          <button className="button-primary">Sign Out</button>
        </form>
        <Conversations newUserToken={localStorage.getItem("token")} />
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
