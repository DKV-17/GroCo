import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <h2>Contact Us</h2>

        <div className="contact-box">
          <h3>Contact Us</h3>
          <p>Let's get in touch!</p>

          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Contact"></textarea>

            <label className="newsletter-check">
              <input type="checkbox" />
              I would like to receive newsletter
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;