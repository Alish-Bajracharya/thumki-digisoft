import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Dumbbell,
  Martini,
  Waves,
  Flower2,
  Utensils,
  WashingMachine,
  BrickWallFireIcon,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bbq from '../../assets/facilites/bbq.jpg'
import bar from '../../assets/facilites/bar.jpg'


const Amenities = () => {
  const facilities = [
    {
      title: "THE BBQ",
      img: bbq,
      icon: <BrickWallFireIcon className="w-6 h-6" />,
    },
    {
      title: "THE BAR",
      img: bar,
      icon: <Martini className="w-6 h-6" />,
    },
    {
      title: "THE YOGA",
      img: "https://media.istockphoto.com/id/2182805348/photo/unrecognizable-black-woman-meditating-in-lotus-position-at-yoga-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=LgRv-LSZWT_WekA0leXqgSjIKjnRpa7VlLbuNSKuYgY=",
      icon: <Flower2 className="w-6 h-6" />,
    },
    {
      title: "SWIMMING POOL",
      img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1170&q=80",
      icon: <Waves className="w-6 h-6" />,
    },
    {
      title: "RESTAURANT",
      img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1170&q=80",
      icon: <Utensils className="w-6 h-6" />,
    },
    {
      title: "LAUNDRY",
      img: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1170&q=80",
      icon: <WashingMachine className="w-6 h-6" />,
    },
  ];

  return (
    <div className="px-6 py-10 md:py-16 bg-[#F5EFDB]" >
      <h1 className="lg:text-4xl text-orange-400 text-center text-3xl font-bold">THUMKI</h1>
      <h2 className="text-3xl  font-bold text-center mb-4">Resort Facilities</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
        We want your stay at our thumki resort to be truly unforgettable. That is
        why we give special attention to all of your needs so we can ensure an
        experience quite unique.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3},
        }}
        className="pb-10"
      >
        {facilities.map((facility, index) => (
          <SwiperSlide key={index}>
            <div className="relative  overflow-hidden shadow-lg group">
              <img
                src={facility.img}
                alt={facility.title}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  {facility.icon}
                  <span>{facility.title}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Amenities;
