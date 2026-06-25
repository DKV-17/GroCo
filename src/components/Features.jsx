import organic from "../assets/images/organic.png";
import delivery from "../assets/images/delivery.png";
import payment from "../assets/images/payment.png";
import "../css/home.css";

function Features() {
  return (
    <section className="features">

      <h2 className="section-title">
        Our <span>Features</span>
      </h2>

      <div className="feature-container">

        <div className="feature-card">
             <div className="feature-card-inner">
        <img src={organic} alt="Fresh Organic" />
          <h3>Fresh And Organic</h3>
          <p>
            We provide farm-fresh fruits and vegetables sourced directly from trusted farmers.
          </p>
        </div>
        </div>

        <div className="feature-card">
             <div className="feature-card-inner">
         <img src={delivery} alt="Free Delivery" />
          <h3>Free Delivery</h3>
          <p>
            Enjoy fast and free delivery on selected grocery orders right to your doorstep.
          </p>
        </div>
        </div>

        <div className="feature-card">
             <div className="feature-card-inner">
          <img src={payment} alt="Payment" />
          <h3>Easy Payment</h3>
          <p>
            Secure and flexible payment options for a smooth shopping experience.
          </p>
        </div>
        </div>

      </div>

    </section>
  );
}

export default Features;