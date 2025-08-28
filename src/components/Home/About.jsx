import React from "react";
import view1 from "../../assets/Views/view2.JPG";
import view2 from "../../assets/Views/view1.JPG";
import view3 from "../../assets/Views/view3.JPG";

const About = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-6 md:px-12">
        
        {/* Left side images */}
        <div className="flex flex-row gap-4 justify-center md:justify-start flex-1">
          <img
            src={view1}
            alt="view-one"
            className="rounded-xl w-[30%] h-[325px] mt-24 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
          />
          <img
            src={view2}
            alt="view-two"
            className="rounded-xl w-[30%] h-[325px] object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
          />
          <img
            src={view3}
            alt="view-three"
            className="rounded-xl w-[30%] h-[325px] mt-24 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
          />
        </div>

        {/* Right side text */}
        <div className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">
          <p className="text-blue-900 font-semibold text-lg md:text-xl">
            Welcome to <span className="text-amber-500 font-bold">Thumki</span> Resort
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Relaxing Pleasure in Every Stay
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Experience luxury and comfort like never before. Our resort offers
            the perfect escape with breathtaking views, exquisite amenities,
            and personalized service to make your stay unforgettable.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 text-white px-8 py-3 md:px-6 text-lg md:text-xl font-medium rounded-full w-fit mx-auto md:mx-0 transition-transform duration-300 hover:scale-105">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
