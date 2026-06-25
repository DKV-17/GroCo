import review1 from "../assets/images/review1.jpg";
import review2 from "../assets/images/review2.jpg";
import review3 from "../assets/images/review3.jpg";
import "../css/home.css";

function Reviews() {
  return (
    <section className="reviews-section">
      <h2 className="section-title">
        Customer's <span>Review</span>
      </h2>

      <div className="review-container">

        <div className="review-card">
          <img src={review1} alt="Rahul Sharma" />
          <p>
            Fresh vegetables and fruits were delivered on time. Quality was excellent.
          </p>
          <h4>Rahul Sharma</h4>
          <div>⭐⭐⭐⭐⭐</div>
        </div>

        <div className="review-card">
           <img src={review2} alt="Priya Nair" />
          <p>
            Easy ordering process and good packaging. Highly recommended.
          </p>
          <h4>Priya Nair</h4>
          <div>⭐⭐⭐⭐⭐</div>
        </div>

        <div className="review-card">
         <img src={review3} alt="joy Alex" />
          <p>
            Fresh dairy products and quick delivery. Great shopping experience.
          </p>
          <h4>Joy Alex</h4>
          <div>⭐⭐⭐⭐⭐</div>
        </div>

      </div>
    </section>
  );
}

export default Reviews;