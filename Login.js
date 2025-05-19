
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === credentials.username && user.password === credentials.password) {
      localStorage.setItem("loggedInUser", JSON.stringify(true)); // fixed to store boolean
      alert("Login Successful");
      navigate("/catalogue"); // go to catalogue
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
