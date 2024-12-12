import { useState } from "react";

export default function SearchBar({
  filterText,
  inStock,
  onFilterTextChange,
  onStockOnlyChange,
}) {
  return (
    <form>
      <p>Search bar</p>
      <label>Search: </label>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => onStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
