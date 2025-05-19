
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Message Submitted: " + JSON.stringify(form));
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <input name="name" onChange={handleChange} placeholder="Your Name" />
      <textarea name="message" onChange={handleChange} placeholder="Your Message" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Contact;
