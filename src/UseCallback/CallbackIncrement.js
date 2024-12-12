export default function CallbackIncrement({ data }) {
  return (
    <div>
      <h3>increment the value using callback function</h3>
      <button onClick={data}>Increment</button>
    </div>
  );
}
