import { useCallback, useState } from "react";
import CallbackIncrement from "./CallbackIncrement";

export default function UseCallbackCount() {
  const [count, setCount] = useState(0);
  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  });

  return (
    <div>
      <h1>Use Callback</h1>
      {count}
      <CallbackIncrement data={increase} />
    </div>
  );
}
