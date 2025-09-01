import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import activity1 from "../../assets/Activities/campfire.jpg";
import activity2 from "../../assets/Activities/narayanthan-hiking.jpeg";
import activity3 from "../../assets/Activities/lateshwor.jpeg";
import activity4 from "../../assets/Activities/fateshwor.jpeg";
import activity5 from "../../assets/Activities/namobuddha.jpeg";
import activity6 from "../../assets/Activities/sightseeing.jpg";

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

  const activities = [
    {
      img: activity1,
      title: "Campfire",
      description: "Cozy evenings under the stars with warm BBQ experiences.",
    },
    {
      img: activity2,
      title: "Narayanthan Hiking",
      description:
        "Scenic trek through lush landscapes and vibrant villages with Himalayan views.",
    },
    {
      img: activity3,
      title: "Lateshwor Hiking",
      description:
        "Adventure trekking through serene forests and hidden trails for nature lovers.",
    },
    {
      img: activity4,
      title: "Fateshwor Hiking",
      description:
        "Explore panoramic viewpoints and experience local culture along the hike.",
    },
    {
      img: activity5,
      title: "Namobuddha Hiking",
      description:
        "Trek to one of Nepal’s most revered Buddhist sites surrounded by breathtaking scenery.",
    },
    {
      img: activity6,
      title: "Sightseeing of Panauti",
      description:
        "Discover cultural landmarks, temples, and heritage sites around Panauti.",
    },
  ];

  return (
    <section id="activities" className="py-20 lg:py-32 bg-gradient-to-b from-white via-blue-50 to-white px-6">
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
        <h1 className="lg:text-5xl text-3xl font-bold text-gray-900 font-serif leading-tight">
          Activities & Adventures at Thumki Resort
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          At Thumki Resort, we go beyond comfort by offering memorable experiences in the heart of nature. 
          Our friendly and experienced guides lead you to breathtaking viewpoints, serene treks, and cultural landmarks. 
          Whether you seek peaceful moments or exciting adventures, your stay is filled with beauty, warmth, and unforgettable memories.
        </p>
      </motion.div>

      {/* Activity Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="group relative overflow-hidden shadow-lg bg-white/70 backdrop-blur-lg border border-gray-200 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500 cursor-pointer"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={act.img}
                alt={act.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <p className="text-white text-lg font-semibold tracking-wide">
                  {act.title}
                </p>
              </div>
            </div>
            <div className="p-6 text-center space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">{act.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{act.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        className="text-center mt-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.button
          onClick={() => navigate("/activities")}
          className="px-10 py-3 bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 transition tracking-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More Activities
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Activities;
