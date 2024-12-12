import { useState } from "react";

export default function AddList({ addTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <label>
        Add Data:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          setText("");
          addTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
