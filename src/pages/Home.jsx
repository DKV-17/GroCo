import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Products from "../components/Products";
import CategoriesSection from "../components/CategoriesSection";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <CategoriesSection/>
      <Reviews/>
      <Blog />
      <Footer />
    </>
  );
}

export default Home;