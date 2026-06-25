import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/checkout.css";
import { useState } from "react";


function Checkout() {

  const [paymentMode, setPaymentMode] = useState("");

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleContinue = () => {
  const allFilled = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  if (!allFilled) {
    alert("Please fill all delivery information");
    return;
  }

  if (paymentMode === "") {
    alert("Please select a payment method");
    return;
  }

  navigate("/payment");
};


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

      <section className="checkout-page">
        <h2>Check Out</h2>

        <div className="checkout-container">
          <div className="checkout-form">
            <div className="checkout-step-bar">
  <div className="checkout-step active">
    <span>1</span>
    <p>Shipping</p>
  </div>

  <div className="checkout-line active-line"></div>

  <div className="checkout-step">
    <span>2</span>
    <p>Payment</p>
  </div>

  <div className="checkout-line"></div>

  <div className="checkout-step">
    <span>3</span>
    <p>Confirm</p>
  </div>
</div>
            <h3>Delivery Information</h3>

            <form>
              <div className="two-inputs">
  <div className="form-group">
    <input name="firstName" value={formData.firstName} onChange={handleChange} />

    <input type="text" />
  </div>

  <div className="form-group">
   <input name="lastName" value={formData.lastName} onChange={handleChange} />

    <input type="text" />
  </div>
</div>

<div className="form-group">
  <label>Email Address</label>
  <input name="email" value={formData.email} onChange={handleChange} />
</div>

<div className="form-group">
  <label>Phone Number</label>
  <input name="phone" value={formData.phone} onChange={handleChange} />
</div>

<div className="form-group">
  <label>Street Address</label>
  <input name="address" value={formData.address} onChange={handleChange} />

</div>

<div className="three-inputs">
  <div className="form-group">
    <label>City</label>
    <input name="city" value={formData.city} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>State / Province</label>
    <input name="state" value={formData.state} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>ZIP / Postal Code</label>
    <input name="zip" value={formData.zip} onChange={handleChange} />
  </div>
</div>

<div className="form-group">
  <label>Country</label>
  <input name="country" value={formData.country} onChange={handleChange} />
</div>

             <h3>Payment Options</h3>

<div className="payment-options">
  <label>
    <input
  type="radio"
  name="payment"
  value="card"
  checked={paymentMode === "card"}
  onChange={(e) => setPaymentMode(e.target.value)}
/>
    <FaCreditCard className="payment-icon" />
    Card
  </label>

  <label>
    <input
  type="radio"
  name="payment"
  value="upi"
  checked={paymentMode === "upi"}
  onChange={(e) => setPaymentMode(e.target.value)}
/>
    <FaMobileAlt className="payment-icon" />
    UPI
  </label>

  <label>
    <input
  type="radio"
  name="payment"
  value="netbanking"
  checked={paymentMode === "netbanking"}
  onChange={(e) => setPaymentMode(e.target.value)}
/>
    <FaUniversity className="payment-icon" />
    Netbanking
  </label>
</div>
              <h3>Promo Code</h3>
              <div className="promo-box">
                <input type="text" placeholder="Enter promo code" />
                <button type="button">Apply</button>
              </div>

              <button
                type="button"
                className="continue-btn"
                onClick={handleContinue}
              >
                Continue To Payment
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>

            {cartItems.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p>₹{item.price}</p>
              </div>
            ))}

            <hr />

            <p>Subtotal <span>₹{subtotal}</span></p>
            <p>Shipping <span>₹{shipping}</span></p>
            <h4>Total <span>₹{total}</span></h4>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;