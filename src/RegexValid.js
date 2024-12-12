import React, { useEffect, useState } from "react";

export default function RegexValid() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01]))[0-9]{6}$/;
    if (input.length >= 12) {
      setError("value should be exactly 12 digit");
    } else if (!regex.test(value)) {
      setError("value should be only number and not any special character");
    } else {
      setError("");
    }
    console.log(regex.test(value));
    setInput(value);
  };

  return (
    <div>
      <h1>Regex Validation</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={"Enter the nric number"}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
