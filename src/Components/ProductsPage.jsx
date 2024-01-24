import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "./../data.json";

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  const filterProducts = (search, inStock) => {
    const filteredProducts = jsonData.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (inStock ? product.inStock : true)
    );
    setProducts(filteredProducts);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>IronStore 🏀⚾ 📱</h1>
      <SearchBar
        onSearch={(newSearchString, inStockOnly) =>
          filterProducts(newSearchString, inStockOnly)
        }
        onStockChange={(inStockOnly, currentSearchString) =>
          filterProducts(currentSearchString, inStockOnly)
        }
      />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
