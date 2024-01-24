import React from "react";

const ProductRow = ({ product }) => {
  const textColor = product.inStock ? "black" : "red";

  return (
    <tr style={{ color: textColor, backgroundColor: "#f9f9f9" }}>
      <td style={tableCellStyle}>{product.name}</td>
      <td style={tableCellStyle}>{product.category}</td>
      <td style={tableCellStyle}>{product.price}</td>
      <td style={tableCellStyle}>{product.inStock ? "Yes" : "No"}</td>
    </tr>
  );
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

export default ProductRow;
