import React, { useRef } from "react";

export default function InputRef() {
  const inputField = useRef("");
  const handleSubmit = () => {
    inputField.current.focus();
  };
  return (
    <div>
      <h1>Input Reference</h1>
      <input type="text" ref={inputField} />
      <button onClick={handleSubmit}>Focus Input</button>
    </div>
  );
}
