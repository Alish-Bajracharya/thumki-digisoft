import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

import restaurant1 from "../../assets/dining-conference/res.jpg";
import restaurant2 from "../../assets/dining-conference/res2.jpg";
import restaurant3 from "../../assets/dining-conference/res3.jpg";
import restaurant4 from "../../assets/dining-conference/res3.jpg";
import conferenceImg from "../../assets/dining-conference/conf.jpg";
import bg from "../../assets/bg/bg1.jpg";

const DiningConferenceSection = () => {
  const navigate = useNavigate();

  // --- Dining Carousel Logic ---
  const diningImages = [restaurant1, restaurant2, restaurant3, restaurant4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === diningImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 
    return () => clearInterval(interval);
  }, [diningImages.length]);

  return (
    <section
      id="dining-conference"
      className="relative py-20 lg:py-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto space-y-28 px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 drop-shadow-lg">
            Exceptional Dining & Business Facilities
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Indulge in world-class dining or host your events in premium spaces
            designed for comfort, elegance, and productivity.
          </p>
        </motion.div>

        {/* Restaurant with Auto-Sliding Images */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl overflow-hidden bg-white/70 backdrop-blur-md border-r-4 border-orange-400"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Auto Slider */}
          <div className="relative overflow-hidden group">
            {diningImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Dining ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
          </div>

          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="text-amber-600 w-8 h-8" />
              <span className="uppercase tracking-wide text-amber-600 font-semibold text-sm">
                Dining Experience
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Exquisite Dining at Thumki Resort
            </h3>
            <p className="mt-5 text-gray-700 leading-relaxed text-lg">
              Experience warm hospitality with exquisite meals prepared by
              skilled chefs. Enjoy premium dining in a serene environment,
              perfect for both casual and special occasions.
            </p>
            <button
              onClick={() => navigate("/dining")}
              className="mt-6 px-8 py-3 bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 transition tracking-wide w-max"
            >
              Book Dining
            </button>
          </div>
        </motion.div>

        {/* Conference Section (unchanged) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl overflow-hidden bg-white/70 backdrop-blur-md border-l-4 border-orange-400"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="order-2 lg:order-1 p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-amber-600 w-8 h-8" />
              <span className="uppercase tracking-wide text-amber-600 font-semibold text-sm">
                Conferences & Events
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Business Events at Thumki Resort
            </h3>
            <p className="mt-5 text-gray-700 leading-relaxed text-lg">
              Host conferences, meetings, and retreats in sophisticated spaces
              equipped with modern amenities. Personalized service ensures every
              event is executed seamlessly.
            </p>
            <button
              onClick={() => navigate("/conference")}
              className="mt-6 px-8 py-3 bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 transition tracking-wide w-max"
            >
              Book Conference
            </button>
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden group">
            <img
              src={conferenceImg}
              alt="Conference & Meeting Hall"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningConferenceSection;
