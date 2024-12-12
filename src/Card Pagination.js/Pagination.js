import React, { useState } from "react";
export default function Pagination({ page, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(page / itemsPerPage);
  const paginate = (page, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return page.slice(startIndex, startIndex + itemsPerPage);
  };

  const displayItems = paginate(page, currentPage, itemsPerPage);
  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentPage((next) => next + 1);
  };

  return (
    <div>
      <h3>Items per page</h3>

      {displayItems.map((ele, index) => (
        <ul key={index}>
          <li>{ele}</li>
        </ul>
      ))}

      <button disabled={currentPage == 1} onClick={handlePrev}>
        Prev
      </button>
      <br />
      <br />
      <button disabled={currentPage == totalPage} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
