import React from "react";
import mainImage from "../../assets/Views/view0.JPG"; // replace with your main image
import sideImage from "../../assets/Views/view1.JPG"; // replace with your secondary image

const AboutLanding = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-16 bg-white">
      {/* Left Images */}
      <div className="flex justify-center lg:justify-start lg:w-1/2 gap-4 mb-10 lg:mb-0">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <img
            src={mainImage}
            alt="About Main"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <img
            src={mainImage}
            alt="About Secondary"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Text */}
      <div className="lg:w-1/2 flex flex-col items-start text-left">
        <h2 className="text-4xl lg:text-5xl font-serif mb-6">
          Exceptional Team, <br /> Tailored Experiences <br /> For Our Guests
        </h2>
        <p className="text-gray-600 mb-6">
          At [Your Company Name], we believe in crafting unforgettable experiences. 
          Our team combines elegance, comfort, and personalized services to ensure 
          every guest feels at home. Explore our story and discover how we bring 
          luxury and hospitality together.
        </p>

        {/* Signature */}
        <div className="flex flex-col items-start mt-4">
          <span className="text-amber-600 font-script text-2xl">Ricard Morgan</span>
          <span className="text-gray-500">General Manager</span>
        </div>
      </div>

      {/* Right Tilted Image */}
      <div className="hidden lg:block absolute right-16 top-1/4 w-60 h-72 transform rotate-6 shadow-xl overflow-hidden">
        <img
          src={sideImage}
          alt="Tilted"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutLanding;
