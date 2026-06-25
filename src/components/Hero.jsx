import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/hero.png";
import "../css/home.css";

function Hero() {


const navigate = useNavigate();

const handleShopNow = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    navigate("/categories");
  } else {
    navigate("/login");
  }
};


  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Fresh And <span>Organic</span> Products For You
        </h1>

        <p>
  We provide fresh and organic groceries sourced directly from trusted farms.
  Shop vegetables, fruits, dairy products, and household essentials with
  convenience, quality, and quick delivery.
</p>

        <button onClick={handleShopNow}>
  Shop Now
</button>
      </div>
    </section>
  );
}

export default Hero;