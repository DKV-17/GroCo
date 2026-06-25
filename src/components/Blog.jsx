import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import "../css/home.css";

function Blog() {
  return (
    <section className="blog-section">
      <h2 className="section-title">
        Our <span>Blogs</span>
      </h2>

      <div className="blog-container">
        <div className="blog-card">
          <img src={blog1} alt="Organic Vegetables" />
          <h3>Benefits Of Organic Vegetables</h3>
          <p>Organic vegetables support a healthy lifestyle and provide natural nutrition for your family.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog2} alt="Fresh Fruits" />
          <h3>Why Fresh Fruits Are Important</h3>
          <p>Fresh fruits are rich in vitamins, minerals, and fiber that help improve daily health.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src={blog3} alt="Dairy Products" />
          <h3>Healthy Grocery Shopping Tips</h3>
          <p>Choosing fresh groceries and quality products makes everyday cooking easier and healthier.</p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;