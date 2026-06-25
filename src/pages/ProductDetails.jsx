import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productImage from "../assets/images/vegetables/tomato.png";
import { FaShoppingCart } from "react-icons/fa";

import "../css/productdetails.css";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";


function ProductDetails() {

  const buyNow = () => {
  addToCart();
};

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToCart = () => {
    const oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = oldCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    navigate("/cart");
  };


  return (
    <>
      <Navbar />

      <section className="product-details-page">
        <div className="product-top">
          <div className="product-left">
            <img
  src={product.image}
  alt={product.name}
/>
            <p className="rating">4 ⭐</p>
          </div>

          <div className="product-right">
           <h2>{product.name}</h2>
            <p className="sub-title">Farm Fresh Quality</p>
            <h1>₹{product.price}</h1>

            <div className="product-buttons">
              
              <button className="cart-btn" onClick={addToCart}>
  <FaShoppingCart /> Add To Cart
</button>

              <button className="buy-btn" onClick={buyNow}>
  Buy Now
</button>
            </div>
          </div>
        </div>

        <div className="product-info">
          <h3>Product Details</h3>
             <p>
  {product.description ||
    "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness, taste, and nutrition."}
</p>

          <h3>Review</h3>
{product.reviews ? (
  product.reviews.map((review, index) => (
    <div className="review-row" key={index}>
      <div className="review-circle"></div>
      <div>
        <h4>{review.name}</h4>
        <p>{review.comment}</p>
        <p className="stars">{review.rating}</p>
      </div>
    </div>
  ))
) : (
  <>
    <div className="review-row">
      <div className="review-circle"></div>
      <div>
        <h4>Priya</h4>
        <p>The product was fresh and delivered safely.</p>
        <p className="stars">★★★★★</p>
      </div>
    </div>

    <div className="review-row">
      <div className="review-circle"></div>
      <div>
        <h4>Rahul</h4>
        <p>Good quality and neatly packed. Worth buying again.</p>
        <p className="stars">★★★★★</p>
      </div>
    </div>
  </>
)}
          

          <div className="review-row">
            <div className="review-circle"></div>
            <div>
              <h4>Priya</h4>
              <p>Good quality product. Very useful for daily cooking.</p>
              <p className="stars">★★★★★</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;