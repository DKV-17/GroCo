function ProductCard({ product }) {
  return (
    <div className="product-card">
          <div className="product-card-inner">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h1 className="product-price">₹{product.price}</h1>
      <p className="stars">★★★★★</p>
      <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;