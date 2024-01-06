/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import UserContext from "../Content/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handelSubmit = (event) => {
    event.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="Username"
        required
      />{" "}
      <input
        type="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" onClick={handelSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
