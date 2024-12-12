import List from "./List";

export default function ProductRow({ lists }) {
  const result = lists.stocked ? (
    lists.name
  ) : (
    <span style={{ color: "red" }}>{lists.name}</span>
  );

  return (
    <tr>
      <td>{result}</td>
      <td>{lists.price}</td>
    </tr>
  );
}
