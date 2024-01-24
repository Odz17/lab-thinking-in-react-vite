import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Name</th>
          <th style={tableHeaderStyle}>Category</th>
          <th style={tableHeaderStyle}>Price</th>
          <th style={tableHeaderStyle}>In Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </tbody>
    </table>
  );
};

const tableHeaderStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  backgroundColor: "#f9f9f9",
};

export default ProductTable;
