import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";
import "../css/cart.css";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increaseQty = (id) => {
  const updatedCart = cartItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );

  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const decreaseQty = (id) => {
  const updatedCart = cartItems
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);

  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};



  return (
    <>
      <Navbar />

      <section className="cart-page">
        <h2>+ Cart</h2>

        {cartItems.length === 0 ? (
          <h3 className="empty-cart">Your cart is empty</h3>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <div className="qty-box">
  <button onClick={() => decreaseQty(item.id)}>-</button>
  <span>{item.quantity}</span>
  <button onClick={() => increaseQty(item.id)}>+</button>
</div>

                <FaTrash
                  className="trash-icon"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))}

            <div className="cart-total">
              <h3>Total</h3>
              <span>:</span>
              <p>₹{total}</p>
              <button onClick={() => navigate("/checkout")}>Checkout</button>
            </div>

            <div className="coupon-box">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
          </>
        )}

        <button className="back-btn" onClick={() => navigate("/categories")}>
          ← Back To Shopping
        </button>
      </section>

      <Footer />
    </>
  );
}

export default Cart;