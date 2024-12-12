import React, { useState, useEffect } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(false);
  const [data, setData] = useState([]);
  const handleCount = () => {
    setCount((prevVal) => prevVal + 1);
    setCount((prevVal) => prevVal + 2);
  };
  const handleReset = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <label>Data: </label> <br />
      <button onClick={() => setCount(count)}>Same value </button>
      <hr />
      <button onClick={handleCount}>Increment</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset me </button>
    </div>
  );
}
