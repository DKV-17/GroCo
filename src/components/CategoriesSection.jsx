import vegetables from "../assets/images/vegetables.png";
import dairy from "../assets/images/dairy.png";
import fruits from "../assets/images/fruits.png";
import "../css/home.css";

function CategoriesSection() {
  return (
    <section className="categories-section">
      <h2 className="section-title">
        Our <span>Categories</span>
      </h2>

      <div className="category-container">
        <div className="category-card">
          <div className="category-card-inner">
            <img src={vegetables} alt="Vegetables" />
            <h3>Fresh Vegetables</h3>
            <p>Up to 45% off</p>
            <button>Shop More</button>
          </div>
        </div>

        <div className="category-card">
          <div className="category-card-inner">
            <img src={dairy} alt="Dairy" />
            <h3>Dairy Products</h3>
            <p>Up to 40% off</p>
            <button>Shop More</button>
          </div>
        </div>

        <div className="category-card">
          <div className="category-card-inner">
            <img src={fruits} alt="Fruits" />
            <h3>Fresh Fruits</h3>
            <p>Up to 50% off</p>
            <button>Shop More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;