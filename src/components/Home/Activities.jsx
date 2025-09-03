import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import activity1 from "../../assets/Activities/campfire.jpg";
import activity2 from "../../assets/Activities/narayanthan-hiking.jpeg";
import activity3 from "../../assets/Activities/luxury-room.jpg";
import activity4 from "../../assets/Activities/sightseeing.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const Activities = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      img: activity1,
      title: "Campfire",
      description:
        "Cozy evenings under the stars with warm BBQ and soulful conversations.",
    },
    {
      img: activity3,
      title: "Luxury Accommodations",
      description:
        "Relax in premium suites designed with elegance, comfort, and tranquility.",
    },
    {
      img: activity2,
      title: "Narayanthan Hiking",
      description:
        "Scenic trails leading to breathtaking Himalayan views and serene forests.",
    },

    {
      img: activity4,
      title: "Sightseeing",
      description:
        "Discover cultural landmarks, heritage temples, and hidden gems around Panauti.",
    },
  ];

  return (
    <section
      id="activities"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/40 to-white px-6"
    >
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h6 className="uppercase text-amber-500 font-bold text-sm tracking-[4px] mb-2">
          Experiences
        </h6>
        <h1 className="lg:text-4xl text-3xl font-bold text-gray-900 leading-tight">
          Activities & Premium Experiences
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          At Thumki Resort, every moment is curated with comfort and adventure.
          From cozy nights by the fire to scenic treks and luxurious stays,
          immerse yourself in unforgettable experiences surrounded by nature’s
          beauty.
        </p>
      </motion.div>

      {/* Activity Cards */}
      <div className="bg-[#FAF7F2] py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden shadow-lg"
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src={exp.img} 
                alt={exp.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-sm mt-1 text-gray-200 max-w-sm">
                  {exp.description}
                </p>
                <button
                  onClick={() => navigate("/activities")}
                  className="inline-flex items-center mt-3 text-sm text-[#D4A762] font-medium "
                >
                  Discover More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="px-6 py-3 border border-[#D4A762] text-[#D4A762] font-medium  hover:bg-[#D4A762] hover:text-white transition"
          >
            View All Wilderness Experiences →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
