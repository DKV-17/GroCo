import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import "../css/orderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />

      <section className="success-page">
        <div className="success-card">
          <h2>Thank You!</h2>

          <div className="success-steps">
            <div className="success-step">
              <span>1</span>
              <p>Shipping</p>
            </div>

            <div className="success-step">
              <span>2</span>
              <p>Payment</p>
            </div>

            <div className="success-step">
              <span>3</span>
              <p>Confirm</p>
            </div>
          </div>

          <FaCheckCircle className="success-icon" />

          <h1>Payment Confirmed</h1>
          <p className="success-message">
            Thank you for your purchase! Your order has been successfully processed.
          </p>

          <div className="success-summary">
            <h3>Order Summary</h3>

            {cartItems.map((item) => (
              <div className="success-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <p>₹{item.price}</p>
              </div>
            ))}

            <hr />

            <p>
              Subtotal <span>₹{subtotal}</span>
            </p>

            <p>
              Shipping <span>₹{shipping}</span>
            </p>

            <h4>
              Total <span>₹{total}</span>
            </h4>
          </div>

          <div className="next-steps">
            <h3>Next Steps</h3>

            <p>
              You will receive an email confirmation shortly with your order details
              and tracking information.
            </p>

            <p>
              If you have any questions, please contact our support team.
            </p>

            <div className="success-buttons">
              <button onClick={() => navigate("/categories")}>
                Continue Shopping
              </button>

              <button
                className="track-btn"
                onClick={() => navigate("/tracking")}
              >
                View Tracking Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OrderSuccess;