
import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [user, setUser] = useState({
    name: "", email: "", username: "", password: "", age: "", city: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered Successfully");
    window.location.href = "/login";
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <input name="age" onChange={handleChange} placeholder="Age" />
      <input name="city" onChange={handleChange} placeholder="City" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
