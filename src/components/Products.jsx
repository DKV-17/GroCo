import products from "../data/products";
import ProductCard from "./ProductCard";
import "../css/product.css";

function Products() {
  return (
    <section className="products-section">
      <h2 className="section-title">
        Our <span>Products</span>
      </h2>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default Products;