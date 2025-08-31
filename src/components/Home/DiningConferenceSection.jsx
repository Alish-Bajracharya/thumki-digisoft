import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Briefcase } from "lucide-react";
import restaurantImg from "../../assets/dining&conference/res.jpg";
import conferenceImg from "../../assets/dining&conference/conf.jpg";
import bg from "../../assets/bg/bg1.jpg";

const DiningConferenceSection = () => {
  return (
    <section
      id="dining-conference"
      className="relative py-20 lg:py-32"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto space-y-28 px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-orange-200 drop-shadow-lg">
            Exceptional Dining & Business Facilities
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Indulge in world-class dining or host your events in premium spaces designed for both comfort and productivity.
          </p>
        </motion.div>

        {/* Restaurant */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden bg-white/95 backdrop-blur-md"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden group">
            <img
              src={restaurantImg}
              alt="Restaurant"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="text-amber-600 w-8 h-8" />
              <span className="uppercase tracking-wide text-amber-600 font-semibold text-sm">
                Dining Experience
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Restaurant at Thumki Resort
            </h3>
            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              A taste of warm hospitality with a dining experience like no other.
              Our staff ensures exceptional service, crafted meals, and a homely
              atmosphere amidst the serene beauty of Balthali.
            </p>
          </div>
        </motion.div>

        {/* Conference */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden bg-white/95 backdrop-blur-md"
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
            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              A perfect venue for conferences, meetings, and retreats with
              state-of-the-art facilities, personalized catering, and a serene
              atmosphere to inspire productivity and collaboration.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden group">
            <img
              src={conferenceImg}
              alt="Conference & Meeting Hall"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningConferenceSection;
