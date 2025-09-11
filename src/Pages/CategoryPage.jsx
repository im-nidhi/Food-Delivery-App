import React from "react";
import { useParams } from "react-router-dom";
import { Asset } from "../assets/Asset";
import categories from "../data/categories.json";
// import "../Styles/SubCategory.css"

function CategoryPage() {
  const { name } = useParams();

  // Find category data
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );

  if (!category) {
    return <h2>Category not found</h2>;
  }

  return (
    <div className="category-page">
      <h2>{category.name}</h2>

      <div className="subcategories-grid">
        {category.subcategories.map((sub, i) => (
          <div key={i} className="subcategory-card">
            <img src={Asset[sub.img]} alt={sub.name} />
            <p>{sub.name}</p>
            <p className="subcategory-price">₹{sub.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default CategoryPage;
