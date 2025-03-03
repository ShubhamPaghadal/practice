import React, { useState } from "react";
import "./Registation.css";
import { Link, useNavigate } from "react-router";

function Registation() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = [
      {
        username: username,
        password: password,
      },
    ];
    localStorage.setItem("user", JSON.stringify(arr));
    navigate("/Login");
    alert("Registration data stored in local storage");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="registation-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Allready have account <Link to="/Login">Login</Link>
      </p>
    </div>
  );
}

export default Registation;
