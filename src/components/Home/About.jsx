import React from "react";
import { motion } from "framer-motion"; // 👈 Import Framer Motion
import view1 from "../../assets/Views/view1.JPG";
import view2 from "../../assets/Views/view0.JPG";
import view3 from "../../assets/Views/view3.JPG";
import bg from "../../assets/bg/bg4.jpg";

const About = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-10 md:py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Container */}
      <div className="relative container mx-auto px-6 md:px-12">
        {/* Top Heading Section */}
        <motion.div
          className="text-center text-amber-900 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm md:text-base font-semibold">
            Welcome to{" "}
            <span className="font-extrabold text-green-900">Thumki</span> Resort
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-blue-900 font-bold mt-3">
            We're gonna make this place your home
          </h1>
          <p className="text-white mt-4 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
            At Thumki Resort, we take pride in our attentive and friendly staff,
            dedicated to ensuring your complete satisfaction from the moment you
            arrive.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
          {/* Left Image Collage */}
          <motion.div
            className="flex-1 relative flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main Large Image */}
            <img
              src={view2}
              alt="Main Resort"
              loading="lazy"
              className="w-[90%] md:w-[600px] lg:w-[650px] h-[280px] md:h-[420px] lg:h-[480px] shadow-lg object-cover border-4 border-amber-500"
            />

            {/* Top Left Small Image */}
            <img
              src={view1}
              alt="Side View"
              loading="lazy"
              className="w-28 h-20 sm:w-36 sm:h-28 md:w-52 md:h-36 lg:w-60 lg:h-44 object-cover shadow-lg absolute -top-8 -left-4 md:-top-10 md:-left-10 border-4 border-amber-500"
            />

            {/* Bottom Right Small Image */}
            <img
              src={view3}
              alt="Wildlife"
              loading="lazy"
              className="w-28 h-32 sm:w-40 sm:h-44 md:w-48 md:h-60 lg:w-56 lg:h-72 object-cover shadow-lg absolute -bottom-8 right-4 md:-bottom-28 md:-right-8 border-4 border-amber-500"
            />
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="flex-1 bg-white/30 backdrop-blur-sm shadow-lg p-6 md:p-10 space-y-6 border-l-4 border-l-amber-400"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
              The Peak of{" "}
              <span className="italic text-green-800">Luxury</span> in Bagmati
              Province
            </h1>
            <p className="text-gray-700 text-base md:text-base leading-relaxed">
              Relax and enjoy the serene beauty of Balthali, Kavre, knowing that
              our goal is to provide seamless service so you can unwind, savor
              exceptional food, and create lasting memories in a peaceful
              setting.
            </p>

            <div>
              <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-4">
                Resort Highlights
              </h3>
              <ul className="space-y-3 text-gray-800 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span> Bespoke
                  luxury amidst Kavrepalanchok’s natural splendor
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span> Spacious
                  rooms and suites with direct access to nature
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span>{" "}
                  Wellness-focused amenities — yoga, pool, & nature walks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span> A culinary
                  journey inspired by flame, forest, garden and farm
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span> Exclusive
                  unforgettable experiences with access to BBQ, Tent-House, and
                  BAR
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-amber-500 text-white px-6 py-3  font-semibold shadow-md transition duration-300"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
