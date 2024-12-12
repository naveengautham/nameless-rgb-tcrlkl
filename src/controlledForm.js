import React, { useState } from "react";

export default function ControlledForm() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser("");
    console.log(user, email);
  };
  return (
    <form>
      <div>
        <h1>Controlled Form</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user}
            onChange={handleUserChange}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br /> <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
}
