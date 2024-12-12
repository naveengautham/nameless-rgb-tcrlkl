import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

export default function ProductTable({ product, filterText, inStock }) {
  let rows = [];
  let categoryCheck = null;
  console.log(product, "data");
  product.forEach((ele) => {
    if (ele.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStock && !ele.stocked) {
      return;
    }
    if (ele.category !== categoryCheck) {
      rows.push(<ProductCategory category={ele.category} key={ele.category} />);
    }
    rows.push(<ProductRow lists={ele} key={ele.name} />);
    categoryCheck = ele.category;
  });
  return (
    <div>
      <p>Product Table</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
