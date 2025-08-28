import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import gallery01 from "../../assets/Views/view1.JPG";
import gallery02 from "../../assets/Views/view2.JPG";
import gallery03 from "../../assets/Views/view3.JPG";
import gallery04 from "../../assets/Sliders/slider1.JPG";

const SubHeading = ({ title }) => (
  <div className="mb-4 flex flex-col items-center xl:items-start">
    <p className="text-amber-400 font-bold text-sm md:text-base uppercase tracking-widest">
      {title}
    </p>
  </div>
);

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 250;
    direction === "left"
      ? (scrollRef.current.scrollLeft -= scrollAmount)
      : (scrollRef.current.scrollLeft += scrollAmount);
  };

  const galleryImages = [gallery01, gallery02, gallery03, gallery04];

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12">
        {/* Left Content - 60% */}
        <div className="w-full xl:w-3/5 flex flex-col items-center text-center">
          <SubHeading title="Thumki Resort" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center justify-center font-serif text-blue-900 font-bold">
            Photo Gallery
          </h1>
          <p className="text-gray-500 mt-6 max-w-xl leading-relaxed text-sm sm:text-base">
            Explore our stunning hotel views and cozy spaces. Each picture
            captures the luxury, comfort, and tranquility that our guests
            experience every day.
          </p>
          <button className="mt-8 px-6 sm:px-8 py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition">
            View More
          </button>
        </div>

        {/* Right Gallery Section - 40% */}
        <div className="w-full xl:w-1/2 relative">
            <div
                ref={scrollRef}
                className="flex gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide scroll-smooth h-[100px] sm:h-[100px] md:h-[200px] lg:h-[300px] xl:h-[350px]"
                >
                {galleryImages.map((img, index) => (
                <div
                    key={index}
                    className="relative min-w-[50%] rounded-xl overflow-hidden shadow-lg group"
                    >
                    <img
                        src={img}
                        alt={`gallery-${index}`}
                        className="w-full h-full object-cover transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-40"
                    />
                    <a
                        href="#gallery"
                        className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-3xl text-white opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer"
                    >
                        Explore More
                    </a>
                </div>
                ))}
            </div>



          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 bottom-4 flex justify-between px-2 sm:px-4">
            <BsArrowLeftShort
              className="text-3xl sm:text-4xl text-amber-400 cursor-pointer hover:text-white bg-gray-800/70 rounded-md"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="text-3xl sm:text-4xl text-amber-400 cursor-pointer hover:text-white bg-gray-800/70 rounded-md"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
