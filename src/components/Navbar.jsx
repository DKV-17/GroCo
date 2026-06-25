import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logoIcon from "../assets/images/groco-icon.png";
import "../css/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logoIcon} alt="GroCo Icon" className="nav-logo-icon" />
        <span>GroCo</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="icons">
        <FaSearch onClick={() => navigate("/categories")} />

        <FaShoppingCart onClick={() => navigate("/cart")} />

        <FaUser onClick={() => navigate("/login")} />
      </div>
    </nav>
  );
}

export default Navbar;