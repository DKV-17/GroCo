import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/images/about.png";
import "../css/home.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        <h2>About Us</h2>

        <img src={aboutImage} alt="About GroCo" />

        <div className="about-content">
          <p>
            GroCo is a modern grocery shopping platform focused on providing
            fresh, healthy, and high-quality products for every home.
          </p>

          <p>
            We offer fresh vegetables, fruits, dairy products, and daily
            essentials at affordable prices with a simple and convenient
            shopping experience.
          </p>

          <p>
            Our goal is to make grocery shopping easy by delivering trusted
            products directly to customers with care and timely service.
          </p>

           <p>
    Our main focus is quality, affordable pricing, safe packaging, and quick
    delivery. Every product is carefully checked before it reaches your doorstep.
  </p>

<p>
    GroCo helps customers save time by allowing them to shop groceries from home
    without standing in long queues or visiting crowded stores.
  </p>

   <p>
    We believe healthy food should be easy to access. That is why we bring fresh
    and organic products closer to families with a smooth online shopping
    experience.
  </p>

          <p>
            Thank you for choosing GroCo. We are committed to making your
            everyday shopping fresh, safe, and reliable.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;