import About from "../components/Home/About";
import Amenities from "../components/Home/Amenities";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import Room from "../components/Home/Rooms";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Room />
      <Amenities />
      <Gallery/>
      <Contact />
      <Footer/> 
    </>
  );
};

export default Home;
