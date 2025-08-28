import React from "react";
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaHotdog,
  FaUtensils,
  FaFire,
  FaRegBuilding,
  FaTree,
  FaGuitar,
  FaShuttleVan,
  FaMusic,
  FaGamepad,
  FaRulerCombined,
} from "react-icons/fa";

const amenities = [
  { name: "Free Wifi", icon: FaWifi },
  { name: "Coffee & Tea", icon: FaCoffee },
  { name: "Luxurious Bath", icon: FaBath },
  { name: "Parking Space", icon: FaParking },
  { name: "BBQ Area", icon: FaFire },
  { name: "Restaurant & Dining", icon: FaUtensils },
  { name: "Meeting Hall", icon: FaRegBuilding },
  { name: "Scenic Views & Gardens", icon: FaTree },
  { name: "Spacious Dance & Singing Area", icon: FaGuitar },
  { name: "Shuttle Service", icon: FaShuttleVan },
  { name: "Live Music & Entertainment", icon: FaMusic },
  { name: "Games & Recreation", icon: FaGamepad },
  { name: "Event Spaces / Banquet", icon: FaRulerCombined },
  { name: "Bonfire / Outdoor Fun", icon: FaFire },
];

const Amenities = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-cyan-50 via-white to-amber-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold text-lg md:text-xl">
            Explore Our
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            Resort Amenities
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            From relaxing moments to joyful gatherings, our resort offers everything you need for a perfect stay.
          </p>
        </div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="text-blue-900 text-4xl mb-4 transition-transform duration-500 group-hover:scale-110">
                  <Icon />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 text-center">
                  {amenity.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
