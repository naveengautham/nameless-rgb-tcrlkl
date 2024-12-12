import { useReducer } from "react";

export default function Counter() {
  const initialCount = { count: 0 };
  const [state, dispatch] = useReducer(countReducer, initialCount);

  function handleIncrement() {
    dispatch({
      type: "increment",
      payload: 1,
    });
  }
  function handleDecrement() {
    dispatch({
      type: "decrement",
    });
  }
  function countReducer(state, action) {
    switch (action.type) {
      case "increment":
        //one approach
        return { count: state.count + action.payload };

      case "decrement":
        //another approach
        return { count: state.count - 1 };

      default: {
        throw Error("unknown Action:" + action.type);
      }
    }
  }
  return (
    <>
      <p>Counter</p>
      {state.count}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
