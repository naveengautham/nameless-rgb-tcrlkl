import React, { useState } from "react";
export default function ButtonList({ list, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [enable, setEnable] = useState(false);
  const totalLength = list.length;

  const paginate = (list, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return list.slice(startIndex, startIndex + itemsPerPage);
  };
  const displayItems = paginate(list, currentPage, itemsPerPage);
  const handleNext = () => {
    if (totalLength > currentPage) setCurrentPage((prev) => prev + 1);
  };
  const descCheck = () => {
    setEnable(!enable);
  };
  return (
    <div>
      <button onClick={handleNext} disabled={totalLength === currentPage}>
        Next
      </button>{" "}
      <br />
      <br />
      {displayItems.map((artist, i) => (
        <label>
          <h4 key={artist.name}>
            {artist.name} by {artist.artist}
          </h4>
        </label>
      ))}
      <p>
        {currentPage} of {totalLength}
      </p>
      <div>
        <button onClick={descCheck}>
          {enable ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {enable &&
        displayItems.map((desc) => (
          <ul>
            <h5>{desc.description}</h5>
            <img src={desc.url} alt={desc.alt} />
          </ul>
        ))}
    </div>
  );
}
