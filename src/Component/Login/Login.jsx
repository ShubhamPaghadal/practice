import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("user")) || {};
    console.log("data", data);
    // alert("Login data stored in local storage");
    if (username === data[0].username && password === data[0].password) {
      navigate("/");
    } else {
      alert("User Not Found");
    }

    setUserName("");
    setPassword("");
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an Account <Link to="/register"> Register Here</Link>
      </p>
    </div>
  );
}

export default Login;
