import React, { useMemo, useState } from "react";

export default function MemoCount() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const result = useMemo(() => {
    return count * 2;
  }, [count]);
  return (
    <div>
      <h1>Memo Count</h1>
      {count}
      <br />
      {value} <br />
      <label>Expensive result:{result}</label>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setValue(value + 1)}>Change Value</button>
    </div>
  );
}
