import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterList({ item }) {
  const [filterText, setFilterText] = useState("");
  const [stockOnly, setStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStock={stockOnly}
        onFilterTextChange={setFilterText}
        onStockOnlyChange={setStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStock={stockOnly}
        onStockOnlyChange={setStockOnly}
        product={item}
      />
    </div>
  );
}
