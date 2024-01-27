import { useState } from "react";

const SearchBar = ({ onSearch, onStockChange }) => {
  const [searchString, setSearchString] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleChange = (e) => {
    const newSearchString = e.target.value;
    setSearchString(newSearchString);
    onSearch(newSearchString, inStockOnly);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setInStockOnly(isChecked);
    onStockChange(isChecked, searchString);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ marginRight: "10px" }}>
        Search:
        <input type="text" value={searchString} onChange={handleChange} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />{" "}
        Show products in stock!
      </label>
    </div>
  );
};

export default SearchBar;
