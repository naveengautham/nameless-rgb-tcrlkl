import React, { useRef, useState } from "react";

export default function Demo1() {
  const [name, setName] = useState("");
  const ageRef = useRef("");
  const handleChange = (e) => {
    e.preventDefault();
    console.log(`controlled component name: ${name}`);
    console.log(`uncontrolled component age : ${ageRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <h1>Control vs uncontrol component</h1>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>{" "}
        <br />
        <br />
        <label>
          Age:
          <input type="number" ref={ageRef} />
        </label>
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
