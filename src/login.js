import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:5000/login", user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/"); // Use navigate instead of history.push
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <div className="button" onClick={login}>
        Login
      </div>
      <div>if not register click below to register</div>
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;