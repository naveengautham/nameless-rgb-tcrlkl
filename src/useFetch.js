import React, { useState, useEffect, createContext } from "react";

export const FetchApiContext = createContext();

export default function UseFetch({ children }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await data.json();
      setResponse(res);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FetchApiContext.Provider value={{ response, loading, error }}>
      {children}
    </FetchApiContext.Provider>
  );
}
