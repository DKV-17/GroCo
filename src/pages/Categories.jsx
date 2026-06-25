import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { FaHeart } from "react-icons/fa";
import "../css/categories.css";



function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("all");

const isLoggedIn = localStorage.getItem("isLoggedIn");

const navigate = useNavigate();

if (!isLoggedIn) {
  return <Navigate to="/login" />;
}


  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

      

  return (
    <>
      <Navbar />

      <section className="categories-page">
        <h2>Our Categories</h2>

        <div className="categories-container">

          <div className="sidebar">
            <button
  className={selectedCategory === "all" ? "active-category" : ""}
  onClick={() => setSelectedCategory("all")}
>
  All
</button>

<button
  className={selectedCategory === "vegetables" ? "active-category" : ""}
  onClick={() => setSelectedCategory("vegetables")}
>
  Vegetables
</button>

<button
  className={selectedCategory === "fruits" ? "active-category" : ""}
  onClick={() => setSelectedCategory("fruits")}
>
  Fruits
</button>

<button
  className={selectedCategory === "dairy" ? "active-category" : ""}
  onClick={() => setSelectedCategory("dairy")}
>
  Dairy Products
</button>

<button
  className={selectedCategory === "meat" ? "active-category" : ""}
  onClick={() => setSelectedCategory("meat")}
>
  Meat & Seafood
</button>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div
  className="category-card"
  key={product.id}
  onClick={() => navigate(`/product/${product.id}`)}
>

                <FaHeart className="heart-icon" />

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p className="price">
                  ₹{product.price}
                </p>

                <button>Buy Now</button>

              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Categories;