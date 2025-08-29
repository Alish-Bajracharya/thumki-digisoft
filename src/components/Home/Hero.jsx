import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import gsap from "gsap";

import slider1 from "../../assets/Sliders/slider1.JPG";
import slider2 from "../../assets/Sliders/slider7.JPG";
import slider3 from "../../assets/Sliders/slider5.JPG";

const slides = [
  { title: "Your Luxury Hotel for Vacation", bg: slider1, btnText: "Room & Suites" },
  { title: "Relax, Unwind & Enjoy", bg: slider2, btnText: "Explore Rooms" },
  { title: "Experience Unmatched Comfort", bg: slider3, btnText: "Book Now" },
];

const Hero = () => {
  const slideRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex % slides.length;
    const el = slideRefs.current[activeIndex];

    if (el) {
      const timeline = gsap.timeline();
      timeline.fromTo(
        el.querySelector(".hero-subtitle"),
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
      timeline.fromTo(
        el.querySelector(".hero-title"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
        "<0.2"
      );
      timeline.fromTo(
        el.querySelector(".hero-btn"),
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
        "<0.1"
      );
    }
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[860px]">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative h-full w-full bg-center bg-cover brightness-90"
            ref={(el) => (slideRefs.current[index] = el)}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Dark Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 lg:px-20">
              <div className="hero-subtitle uppercase tracking-[8px] text-sm md:text-base text-white mb-10 font-semibold">
                Just Enjoy and Relax
              </div>
              <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-elegant bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white leading-tight mb-6">
                {slide.title}
              </h1>
              <button className="hero-btn mt-2 px-6 py-3 text-lg md:text-xl bg-amber-500 text-white shadow-lg hover:scale-105 transition-transform duration-300">
                {slide.btnText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
