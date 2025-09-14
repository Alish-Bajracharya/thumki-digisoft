import React from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaTv, FaSnowflake, FaCoffee } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";

const amenityIcons = {
  wifi: <FaWifi className="text-orange-400" />,
  tv: <FaTv className="text-orange-400" />,
  ac: <FaSnowflake className="text-orange-400" />,
  breakfast: <FaCoffee className="text-orange-400" />,
  balcony: <MdBalcony className="text-orange-400" />,
};

export const RoomCard = ({ room, index }) => {
  const { id, name, image_url, availability, cost_per_night, description, amenities } = room;

  return (
    <div className={`room-card group relative overflow-hidden shadow-2xl transition-transform duration-700 hover:shadow-4xl hover:-translate-y-4 cursor-pointer ${index % 2 === 0 ? "md:-translate-y-6" : "md:translate-y-6"}`}>
      
      {/* Room Image */}
      <figure className="h-[360px] overflow-hidden relative">
        <img src={image_url} alt={name} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-80 group-hover:opacity-60 transition duration-700"></div>
      </figure>

      {/* Info */}
      <div className="p-6 bg-white border-t-4 border-b-4 border-blue-900 relative">
        <h2 className="text-2xl font-bold text-blue-900 flex justify-between items-center">
          {name}
          <span className={`ml-2 text-xs font-semibold px-2 py-1 ${availability ? "bg-green-500 text-white" : "bg-gray-400 text-white"}`}>
            {availability ? "Available" : "Booked"}
          </span>
        </h2>

        <p className="text-gray-700 mt-3">{description}</p>

        {/* Amenities */}
        <div className="flex gap-3 mt-4">
          {amenities?.map((item, i) => (
            <div key={i} className="flex items-center justify-center w-10 h-10 bg-blue-900/10 hover:bg-orange-400/30 transition duration-300 rounded-md">
              {amenityIcons[item]}
            </div>
          ))}
        </div>

        {/* Price & Link */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-semibold text-orange-400">${cost_per_night}/night</span>
          <Link to={`/roomDetails/${id}`} className="uppercase text-sm tracking-widest text-white bg-orange-400 hover:bg-blue-900 px-5 py-2 transition duration-300">
            More Info
          </Link>
        </div>
      </div>

      {/* Floating diagonal accents */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-orange-400/20 rotate-45 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-900/20 rotate-[30deg] pointer-events-none"></div>
    </div>
  );
};
