import { useState } from "react";
import FilterList from "./FilterList";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function List() {
  const Items = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  const [data, setData] = useState(Items);
  return (
    <div>
      <p>List</p>
      <FilterList item={data} />
    </div>
  );
}
