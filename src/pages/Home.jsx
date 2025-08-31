import About from "../components/Home/About";
import Amenities from "../components/Home/Amenities";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import Room from "../components/Home/Rooms";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Home/Contact";
import Review from "../components/Home/Reviews";
import Activities from "../components/Home/Activities";
import DiningAndConference from "../components/Home/DiningConferenceSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Room />
      <Amenities />
      <DiningAndConference />
      <Activities />
      <Review />
      <Gallery/>
      <Contact />
      <Footer/> 
    </>
  );
};

export default Home;
