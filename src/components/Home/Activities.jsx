import React from "react";
import { motion } from "framer-motion";
import activity1 from "../../assets/Activities/campfire.jpg";
import activity2 from "../../assets/Activities/narayanthan-hiking.jpeg";
import activity3 from "../../assets/Activities/sightseeing.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Activities = () => {
  const activities = [
    { img: activity1, title: "Campfire", description: "Cozy evenings under the stars." },
    { img: activity2, title: "Narayanthan Hiking", description: "Scenic hike through serene villages." },
    { img: activity3, title: "Sightseeing Panauti", description: "Explore cultural landmarks and heritage." },
  ];

  return (
    <section id="activities" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h6 className="uppercase text-amber-500 font-bold text-sm tracking-[4px] mb-2">
          Experiences
        </h6>
        <h1 className="lg:text-5xl text-3xl font-bold text-gray-900 font-serif">
          Activities & Adventures
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Curated experiences designed to create lasting memories for every traveler.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-lg border border-gray-200 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={act.img}
                alt={act.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
            <div className="p-6 text-center space-y-3">
              <h3 className="text-2xl font-bold text-gray-800">{act.title}</h3>
              <p className="text-gray-600">{act.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="text-center mt-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.button
          className="px-10 py-3 bg-amber-500 text-white rounded-full font-semibold shadow-lg hover:bg-amber-600 transition tracking-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More Activities
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Activities;
