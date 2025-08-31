import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CheckCircle2, Info } from "lucide-react";

import room1 from "../../assets/Rooms/room1.JPG";
import room2 from "../../assets/Rooms/room2.JPG";
import room3 from "../../assets/Rooms/room3.JPG";
import room4 from "../../assets/Rooms/room4.JPG";

const Rooms = () => {
  const categories = ["Deluxe", "Twin"];
  const [activeCategory, setActiveCategory] = useState("Deluxe");
  const [direction, setDirection] = useState(0); // 1 for next/right, -1 for prev/left

  const roomCategories = {
    Deluxe: {
      price: "2500",
      description: "Elegant room with premium interiors and stunning views.",
      amenities: [
        "LED TV With Channel",
        "Electric Kitley for Coffee/Tea",
        "Hair Dryer",
        "WI-FI",
        "Push to D&D",
        "Mini Bar",
        "Iron & Iron Board",
        "Bathroom Amenities",
        "Safe Shield Bathroom Fixture",
      ],
      images: [room1, room2],
    },
    Twin: {
      price: "2200",
      description: "Spacious twin room ideal for friends or family stay.",
      amenities: [
        "Two Twin Beds",
        "Work Desk",
        "Air Conditioning",
        "Smart TV",
        "Wi-Fi",
        "Mini Fridge",
        "Hair Dryer",
        "Bathroom Amenities",
      ],
      images: [room3, room4],
    },
  };

  const { price, description, amenities, images } = roomCategories[activeCategory];

  const handleCategoryClick = (category) => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = categories.indexOf(category);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveCategory(category);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="rooms" className="py-16 lg:py-24 bg-gray-50">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h6 className="uppercase text-amber-500 font-bold text-sm tracking-wide">
          Thumki Resorts
        </h6>
        <h1 className="lg:text-4xl text-3xl font-bold">Luxury Rooms</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Select from our curated room categories designed for comfort, elegance, and memorable stays.
        </p>
      </motion.div>

      {/* Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left - Category List */}
        <motion.div
          className="space-y-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {Object.keys(roomCategories).map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`p-6 rounded-l-2xl cursor-pointer transition shadow-sm ${
                activeCategory === category
                  ? "bg-amber-50 border-l-4 border-amber-500 shadow-md"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-800">{category} Room</h2>
              <p className="text-gray-600 mt-2">{roomCategories[category].description}</p>

              {/* Price + More Info */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-lg font-semibold text-amber-600">
                  Rs. {roomCategories[category].price}.00 / night
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`More info about ${category} Room coming soon!`);
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-amber-600 border border-amber-500 px-4 py-2 rounded-lg hover:bg-amber-500 hover:text-white transition"
                >
                  <Info className="w-4 h-4" /> More Info
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right - Image Slider with Horizontal Slide Animation */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeCategory}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="shadow-lg rounded-r-2xl overflow-hidden"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              className="rounded-r-2xl"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={activeCategory}
                    loading="lazy"
                    className="w-full h-[380px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Amenities Section */}
      <motion.div
        key={activeCategory + "-amenities"}
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-16 max-w-6xl mx-auto px-4"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Amenities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-700 bg-white p-4 rounded-lg shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Rooms;
