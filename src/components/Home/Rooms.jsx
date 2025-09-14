import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import room1 from "../../assets/Rooms/room1.JPG";
import room2 from "../../assets/Rooms/room2.JPG";
import room3 from "../../assets/Rooms/room3.JPG";
import room4 from "../../assets/Rooms/room4.JPG";

import {
  Info,
  Tv,
  Coffee,
  Wind,
  Wifi,
  Lock,
  Bath,
  Wine,
  Shirt,
  ShieldCheck,
  BedDouble,
  Briefcase,
  Thermometer,
  Package,
  CheckCircle2,
} from "lucide-react";


// Map amenities to icons
const amenityIcons = {
  "LED TV With Channel": <Tv className="w-8 h-8 text-amber-500" />,
  "Electric Kettle for Coffee/Tea": <Coffee className="w-8 h-8 text-amber-500" />,
  "Hair Dryer": <Wind className="w-8 h-8 text-amber-500" />,
  "High-Speed Wi-Fi": <Wifi className="w-8 h-8 text-amber-500" />,
  "Do Not Disturb System": <Lock className="w-8 h-8 text-amber-500" />,
  "Mini Bar": <Wine className="w-8 h-8 text-amber-500" />,
  "Iron & Iron Board": <Shirt className="w-8 h-8 text-amber-500" />,
  "Luxury Bathroom Amenities": <Bath className="w-8 h-8 text-amber-500" />,
  "Safe Shield Bathroom Fixture": <ShieldCheck className="w-8 h-8 text-amber-500" />,
  "Two Twin Beds": <BedDouble className="w-8 h-8 text-amber-500" />,
  "Work Desk": <Briefcase className="w-8 h-8 text-amber-500" />,
  "Air Conditioning": <Thermometer className="w-8 h-8 text-amber-500" />,
  "Smart TV": <Tv className="w-8 h-8 text-amber-500" />,
  "Mini Fridge": <Package className="w-8 h-8 text-amber-500" />,
};


const Rooms = () => {
  const categories = ["Deluxe", "Twin"];
  const [activeCategory, setActiveCategory] = useState("Deluxe");
  const [direction, setDirection] = useState(0);

  // Preload images for smooth switch
  useEffect(() => {
    Object.values(roomCategories).forEach((room) => {
      room.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  const roomCategories = {
    Deluxe: {
      price: "2500",
      description: "Elegant room with premium interiors and stunning views.",
      amenities: [
        "LED TV With Channel",
        "Electric Kettle for Coffee/Tea",
        "Hair Dryer",
        "High-Speed Wi-Fi",
        "Do Not Disturb System",
        "Mini Bar",
        "Iron & Iron Board",
        "Luxury Bathroom Amenities",
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
        "High-Speed Wi-Fi",
        "Mini Fridge",
        "Hair Dryer",
        "Luxury Bathroom Amenities",
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
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
<motion.section id="rooms" className="py-16 bg-gray-50">
  {/* Header */}
  <motion.div
    className="text-center mb-12 px-4"
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <h6 className="uppercase text-amber-500 font-bold text-sm tracking-wide">
      Thumki Resorts
    </h6>
    <h1 className="lg:text-5xl text-3xl font-bold">
      Luxury Accommodation's
    </h1>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
      Select from our curated room categories designed for comfort, elegance,
      and memorable stays.
    </p>
  </motion.div>

  {/* Layout */}
  <div className="relative grid grid-cols-1 lg:grid-cols-5 w-full gap-8 lg:gap-0">
    {/* Left - Categories + Amenities */}
    <div className="col-span-2 space-y-10 px-4 sm:px-6 lg:px-8 z-10">
      {/* Categories */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        {Object.keys(roomCategories).map((category) => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`p-5 sm:p-6 cursor-pointer shadow-md  transition border-l-4 ${
              activeCategory === category
                ? "bg-orange-100 border-amber-500"
                : "bg-white border-transparent hover:bg-gray-50"
            }`}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {category} Room
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {roomCategories[category].description}
            </p>

            {/* Price + More Info */}
            <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
              <p className="text-base sm:text-lg font-semibold text-amber-600">
                Rs. {roomCategories[category].price}.00 / night
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`More info about ${category} Room coming soon!`);
                }}
                className="flex items-center gap-2 text-sm font-medium text-amber-600 border border-amber-500 px-3 py-2 sm:px-4 sm:py-2  hover:bg-amber-500 hover:text-white transition"
              >
                <Info className="w-4 h-4" /> More Info
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Amenities */}
      <motion.div
        key={activeCategory + "-amenities"}
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-12"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
          Amenities
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-white p-3 sm:p-4 shadow  hover:shadow-lg transition"
            >
              <div className="text-amber-500">
                {amenityIcons[item] || <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />}
              </div>
              <p className="mt-3 text-xs sm:text-sm font-medium text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Right - Responsive Slider */}
    <AnimatePresence custom={direction} mode="wait">
      <motion.div
        key={activeCategory}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="col-span-3 shadow-xl overflow-hidden relative "
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={activeCategory}
                loading="lazy"
                className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[1000px] object-cover"
              />
              {/* Overlay gradient for luxury look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </AnimatePresence>
  </div>
</motion.section>
  );
};

export default Rooms;
