import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import products from "../Data/Products";
import "./Products.css";

const categoryList = ["All", ...new Set(products.map((p) => p.category))];

const Products = () => {
  const [list, setList] = useState(products);
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    let temp = [...products];

    if (selectedCat !== "All") {
      temp = temp.filter((item) => item.category === selectedCat);
    }

    if (searchText.trim()) {
      const val = searchText.toLowerCase();
      temp = temp.filter(
        (item) =>
          item.name.toLowerCase().includes(val) ||
          item.description.toLowerCase().includes(val)
      );
    }

    if (sortType === "priceLow") temp.sort((a, b) => a.price - b.price);
    else if (sortType === "priceHigh") temp.sort((a, b) => b.price - a.price);
    else if (sortType === "name") temp.sort((a, b) => a.name.localeCompare(b.name));

    setList(temp);
  }, [selectedCat, searchText, sortType]);

  return (
    <div className="productsPage">

      <div className="topArea">
        <h1 className="title">Products</h1>
        <p className="countText">{list.length} items</p>
      </div>

      <div className="controls">

        <div className="searchBar">
          <span className="icon"> 🔍 </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button className="clearBtn" onClick={() => setSearchText("")}>
              X
            </button>
          )}
        </div>

        <select
          className="sortBox"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="default">Sort</option>
          <option value="priceLow">Price Low → High</option>
          <option value="priceHigh">Price High → Low</option>
          <option value="name">Name A-Z</option>
        </select>

      </div>

      <div className="filterRow">
        {categoryList.map((cat) => (
          <button
            key={cat}
            className={`filterBtn ${selectedCat === cat ? "active" : ""}`}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="emptyBox">
          <div className="emoji">🔍</div>
          <h3>No products found</h3>
          <p>Try something else</p>

          <button
            className="resetBtn" 
            onClick={() => {
              setSearchText("");
              setSelectedCat("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid">
          {list.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Products;