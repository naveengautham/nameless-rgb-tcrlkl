import React, { useState } from "react";

export default function LargeList() {
  const items = Array.from({ length: 10 }, (_, i) => `Trip ${i + 1}`);

  return (
    <div>
      <h1>Large List</h1>
      {items.map((ele, i) => (
        <ul>
          <li>{ele}</li>
        </ul>
      ))}
    </div>
  );
}
