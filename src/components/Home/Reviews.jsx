import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

import r1 from "../../assets/Views/view0.JPG";
import r2 from "../../assets/Views/view1.JPG";
import r3 from "../../assets/Views/view2.JPG";
import r4 from "../../assets/Views/view3.JPG";

const testimonials = [
  {
    img: r1,
    name: "Pooonam Lama",
    role: "Traveller",
    text: "Every moment here felt magical. The staff was warm, the food was perfect, and the views were breathtaking. A true home away from home!",
  },
  {
    img: r2,
    name: "Buddhi Dangol",
    role: "Managing Director",
    text: "The perfect blend of luxury and comfort. Thumki Resort goes beyond expectations — ideal for relaxation and corporate retreats alike.",
  },
  {
    img: r3,
    name: "Alish Bajracharya",
    role: "Developer",
    text: "A premium experience with personalized service. From the rooms to the dining, every detail was thoughtfully curated. Highly recommended!",
  },
  {
    img: r4,
    name: "Aryan Shrestha",
    role: "Food Vlogger",
    text: "The food is divine! Every dish feels like it’s made with love. Dining here is as much an experience as staying at the resort.",
  },
  {
    img: r4,
    name: "Dipson Rayamajhi",
    role: "Tourist",
    text: "The food is divine! Every dish feels like it’s made with love. Dining here is as much an experience as staying at the resort.",
  },
    {
    img: r3,
    name: "Pujan Maharjan",
    role: "Videographer",
    text: "A premium experience with personalized service. From the rooms to the dining, every detail was thoughtfully curated. Highly recommended!",
  },
];

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Review = () => {
  return (
    <div className="relative py-10 md:py-16 bg-gradient-to-b from-[#f8f8f8] via-[#eeeeee] to-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-amber-900 text-sm">
            Testimony
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f8b92f]">
            What Our Guests Say
          </h2>
          <div className="w-28 h-[2px] bg-[#f8b92f] mx-auto mt-5"></div>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                className="relative group bg-[#eeeeee]/95 border border-[#2a2a2a] p-10 text-left shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Big Quote Background */}
                <FaQuoteRight className="absolute text-[#3d90f0]/10 text-[120px] top-6 right-6 pointer-events-none" />

                {/* Profile */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 overflow-hidden border-2 border-[#e9ad53]">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black">
                      {review.name}
                    </h4>
                    <p className="text-sm text-orange-900 uppercase tracking-wide">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed text-justify text-lg relative z-10">
                  “{review.text}”
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
