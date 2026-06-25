
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../css/footer.css";

import "../css/footer.css";

import { FaShoppingBasket } from "react-icons/fa";
import logoIcon from "../assets/images/groco-icon.png";
import logoText from "../assets/images/groco.png";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-logo">
  <img src={logoIcon} alt="GroCo Icon" className="logo-icon" />
  <span>GroCo</span>
</div>
        
        <p>
          Fresh groceries delivered with quality products and easy shopping for every home.
        </p>

        <div className="social-icons">
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </div>

      <div className="footer-box">
        <h3>Contact Info</h3>
        <p><FaPhoneAlt className="footer-icon" /> +91 98765 43210</p>
        <p><FaEnvelope className="footer-icon" /> support@groco.in</p>
        <p><FaMapMarkerAlt className="footer-icon" /> Chennai, Tamil Nadu</p>
      </div>

      <div className="footer-box">
  <h3>Quick Links</h3>

  <p><FaArrowRight className="quick-arrow" /> Home</p>
  <p><FaArrowRight className="quick-arrow" /> Features</p>
  <p><FaArrowRight className="quick-arrow" /> Products</p>
  <p><FaArrowRight className="quick-arrow" /> Categories</p>
  <p><FaArrowRight className="quick-arrow" /> Review</p>
  <p><FaArrowRight className="quick-arrow" /> Blog</p>
</div>

      <div className="footer-box">
        <h3>Newsletter</h3>
        <p>Subscribe for latest updates</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;