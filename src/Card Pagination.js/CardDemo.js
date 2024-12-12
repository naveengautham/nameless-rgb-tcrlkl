import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function CardDemo() {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h1>Pagination</h1>
      <Pagination page={items} itemsPerPage={10} />
    </div>
  );
}
