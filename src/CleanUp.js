import React, { useState, useEffect } from "react";

export default function ClaenUp() {
  const [term, setTerm] = useState("");
  const [debounce, setDebounce] = useState(term);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(term);
    }, 2000);
    return () => clearTimeout(handler);
  }, [term]);
  useEffect(() => {
    if (debounce) {
      console.log("entered characters after 2 seconds was," + debounce);
    }
  });
  return (
    <div>
      <h1>ClearTimeout</h1>
      {term ? debounce : "No value Found"} <br /> <br />
      <label>
        Search: <input type="text" value={term} onChange={handleChange} />{" "}
      </label>
    </div>
  );
}
