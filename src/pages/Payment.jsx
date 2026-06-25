import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

import "../css/payment.css";

function Payment() {
  const navigate = useNavigate();

  


const [paymentData, setPaymentData] = useState({
  holder: "",
  card: "",
  expiry: "",
  cvv: "",
});

const handlePaymentChange = (e) => {
  setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
};

const handlePayment = () => {
  const allFilled = Object.values(paymentData).every((value) => value.trim() !== "");

  if (!allFilled) {
    alert("Please fill all payment details");
    return;
  }

  navigate("/success");
};


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

      <section className="payment-page">

        <div className="step-bar">
  <div className="step-item active">
    <span>1</span>
    <p>Shipping</p>
  </div>

  <div className="step-line active-line"></div>

  <div className="step-item active">
    <span>2</span>
    <p>Payment</p>
  </div>

  <div className="step-line"></div>

  <div className="step-item">
    <span>3</span>
    <p>Confirm</p>
  </div>
</div>

        <div className="payment-container">
          <h2>Payment details</h2>

          <div className="payment-content">

            <div className="payment-left">
             <div className="demo-card">
  <div className="card-logo">
    <span></span>
    <span></span>
  </div>

  <div className="card-chip"></div>

  <div className="card-number">9047 9485 2593 6046</div>

  <div className="card-name">DEEPAL P</div>
</div>

              <div className="amount-section">
                <h3>Payment amount</h3>
                <p>₹{total}</p>
              </div>
            </div>

            <div className="payment-right">

              <div className="form-group">
                <label>Card holder name</label>
                <input name="holder" value={paymentData.holder} onChange={handlePaymentChange} />
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text"
  name="card"
  maxLength="16"  name="card" value={paymentData.card} onChange={handlePaymentChange} />
              </div>

              <div className="payment-row">
                <div className="form-group">
                  <label>Expiry date</label>
                  <input name="expiry" value={paymentData.expiry} onChange={handlePaymentChange} />
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input type="password"
  name="cvv"
  maxLength="3"  name="cvv" value={paymentData.cvv} onChange={handlePaymentChange} />
                </div>
              </div>

              <div className="button-row">
                <button
                  className="cancel-btn"
                  onClick={() => navigate("/checkout")}
                >
                  Cancel
                </button>

                <button
                  className="pay-btn"
                  onClick={handlePayment}
                >
                  Pay Now
                </button>
              </div>

            </div>

          </div>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/checkout")}
        >
          ← Back
        </button>

      </section>

      <Footer />
    </>
  );
}

export default Payment;