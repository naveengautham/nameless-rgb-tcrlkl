import React, { useContext } from "react";
import { FetchApiContext } from "./useFetch";

export default function FetchContext() {
  const { response, loading, error } = useContext(FetchApiContext);
  console.log(response, "---", loading, "---", error);
  return (
    <div>
      <h1>Fetching data from another component </h1>
      {loading && response
        ? response.map((item) => (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          ))
        : null}
    </div>
  );
}
