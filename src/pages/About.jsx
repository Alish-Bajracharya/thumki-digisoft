import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutLanding from "../components/About/AboutLanding";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutLanding />

      <Footer/> 
    </>
  );
};

export default Home;
