import React, { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import gallery01 from "../../assets/Views/view1.JPG";
import gallery02 from "../../assets/Views/view2.JPG";
import gallery03 from "../../assets/Views/view3.JPG";
import gallery04 from "../../assets/Sliders/slider1.JPG";

const SubHeading = ({ title }) => (
  <div className="mb-3 flex flex-col items-center xl:items-start">
    <p className="text-amber-500 font-semibold text-sm md:text-base uppercase tracking-[0.2em]">
      {title}
    </p>
  </div>
);

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 350;
    direction === "left"
      ? (scrollRef.current.scrollLeft -= scrollAmount)
      : (scrollRef.current.scrollLeft += scrollAmount);
  };

  const galleryImages = [gallery01, gallery02, gallery03, gallery04];

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-6 sm:px-12 lg:px-20">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-14">
        {/* Left Content */}
        <div className="w-full xl:w-2/5 text-center xl:text-left">
          <SubHeading title="Thumki Resort" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-blue-900 font-bold leading-tight">
            Explore Our Photo Gallery
          </h1>
          <p className="text-gray-600 mt-6 max-w-md mx-auto xl:mx-0 leading-relaxed text-sm sm:text-base">
            Discover the essence of tranquility and luxury through our curated
            gallery. Every corner of Thumki Resort tells a story of elegance,
            comfort, and unforgettable moments.
          </p>
          <button className="mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-semibold shadow-lg hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition duration-300">
            View Full Gallery
          </button>
        </div>

        {/* Right Gallery */}
        <div className="w-full xl:w-3/5 relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]"
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative min-w-[75%] md:min-w-[45%] snap-center rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <p className="text-white text-lg font-semibold tracking-wide">
                    Scenic View {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center px-3">
            <BsArrowLeftShort
              className="text-4xl text-white bg-amber-500 rounded-full shadow-md p-1 cursor-pointer hover:bg-amber-600 transition"
              onClick={() => scroll("left")}
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <BsArrowRightShort
              className="text-4xl text-white bg-amber-500 rounded-full shadow-md p-1 cursor-pointer hover:bg-amber-600 transition"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
