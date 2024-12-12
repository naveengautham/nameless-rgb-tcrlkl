import React, { useState, useEffect } from "react";

export default function DebounceSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearch, setDebounce] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(searchTerm);
    }, 1000);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (debounceSearch) {
      console.log("api call ends with," + debounceSearch);
    }
  }, [debounceSearch]);

  return (
    <div>
      <h1>Debounce Method</h1>
      <label>
        Please search here:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
    </div>
  );
}
