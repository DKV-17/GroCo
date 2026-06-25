import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTruck, FaBox, FaCheckCircle, FaHome } from "react-icons/fa";
import "../css/orderTracking.css";

function OrderTracking() {
  return (
    <>
      <Navbar />

      <section className="tracking-page">
        <h2>Order Tracking</h2>

        <div className="delivery-box">
          <h3>Estimated Delivery</h3>
          <div className="delivery-date">
            <div>
              <p>Your order is expected to arrive by</p>
              <h2>Thursday, July 4, 2024</h2>
            </div>
            <FaTruck className="truck-icon" />
          </div>
        </div>

        <div className="status-box">
          <h3>Order Status</h3>

          <div className="progress-line">
    <div className="progress-bg">
        <div className="progress-fill"></div>
    </div>

    <span>70% Complete</span>
</div>

          <div className="status-item active">
            <FaCheckCircle />
            <div>
              <h4>Order Placed</h4>
              <p>We received your order successfully.</p>
            </div>
          </div>

          <div className="status-item active">
            <FaBox />
            <div>
              <h4>Processing</h4>
              <p>Your order is being prepared for shipment.</p>
            </div>
          </div>

          <div className="status-item">
            <FaTruck />
            <div>
              <h4>Shipped</h4>
              <p>Your package has left the warehouse.</p>
            </div>
          </div>

          <div className="status-item">
            <FaHome />
            <div>
              <h4>Out For Delivery</h4>
              <p>Your package is on the way to your address.</p>
            </div>
          </div>

          <div className="status-item">
  <FaCheckCircle />
  <div>
    <h4>Delivered</h4>
    <p>Your package has been delivered successfully.</p>
  </div>
</div>

        </div>

        <div className="help-box">
          <h3>Need Help?</h3>
          <p>If you have any questions about your order, our support team is here to help.</p>
          <span>Contact Support</span>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OrderTracking;