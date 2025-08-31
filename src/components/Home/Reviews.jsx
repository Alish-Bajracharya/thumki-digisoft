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
];

// Motion Variants for stagger effect
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger by index
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Review = () => {
  return (
    <div className="relative py-24 bg-gradient-to-b from-[#0d0d0d] via-[#111] to-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-gray-400 font-medium">
            Testimony
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#dcca87] drop-shadow-lg">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-[#dcca87] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                className="relative group bg-[#1a1a1a]/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#333]"
              >
                {/* Quote Icon */}
                <FaQuoteRight className="absolute top-6 right-6 text-[#dcca87] text-3xl opacity-60 group-hover:scale-110 transition-transform" />

                {/* Profile */}
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-20 h-20 object-cover rounded-full border-2 border-[#dcca87] shadow-md"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed italic">
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
