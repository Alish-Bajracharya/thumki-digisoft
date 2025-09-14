import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RoomCard } from "../components/Room/RoomCard";
import room1 from "../assets/Rooms/room1.jpg";
import room2 from "../assets/Rooms/room2.jpg";
import room3 from "../assets/Rooms/room3.jpg";
import room4 from "../assets/Rooms/room4.jpg";
import room5 from "../assets/Rooms/room1.jpg";
import room6 from "../assets/Rooms/room2.jpg";

export const Rooms = () => {
  const deluxeRooms = [
    { id: 1, name: "Deluxe Mountain View", image_url: room1, availability: true, cost_per_night: 120, description: "Spacious deluxe room with breathtaking mountain views.", amenities: ["wifi", "tv", "breakfast", "ac"] },
    { id: 2, name: "Deluxe Garden View", image_url: room2, availability: false, cost_per_night: 110, description: "Relax in comfort with serene garden views.", amenities: ["wifi", "tv", "ac"] },
    { id: 5, name: "Deluxe Poolside", image_url: room5, availability: true, cost_per_night: 130, description: "Relax by the pool in your luxurious deluxe room.", amenities: ["wifi", "tv", "ac", "balcony"] },
  ];

  const twinRooms = [
    { id: 3, name: "Twin Room Lake Side", image_url: room3, availability: true, cost_per_night: 95, description: "Perfect for friends, overlooking the peaceful lake.", amenities: ["wifi", "breakfast", "balcony"] },
    { id: 4, name: "Twin Room Courtyard", image_url: room4, availability: true, cost_per_night: 90, description: "Cozy and elegant, facing the resort courtyard with balcony.", amenities: ["wifi", "tv", "ac"] },
    { id: 6, name: "Twin Room Garden View", image_url: room6, availability: true, cost_per_night: 92, description: "Comfortable twin room with garden view.", amenities: ["wifi", "tv", "ac", "breakfast"] },
  ];

  // detect screen size for visible count
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // small screen
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // medium screen
      } else {
        setVisibleCount(3); // large screen
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const [deluxeIndex, setDeluxeIndex] = useState(0);
  const [twinIndex, setTwinIndex] = useState(0);

  const prevSlide = (type) => {
    if (type === "deluxe") {
      setDeluxeIndex((prev) => (prev - 1 + deluxeRooms.length) % deluxeRooms.length);
    } else {
      setTwinIndex((prev) => (prev - 1 + twinRooms.length) % twinRooms.length);
    }
  };

  const nextSlide = (type) => {
    if (type === "deluxe") {
      setDeluxeIndex((prev) => (prev + 1) % deluxeRooms.length);
    } else {
      setTwinIndex((prev) => (prev + 1) % twinRooms.length);
    }
  };

  const getVisibleRooms = (rooms, startIndex) => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(rooms[(startIndex + i) % rooms.length]);
    }
    return result;
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen overflow-hidden relative">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <img src={room1} alt="Hero" className="absolute w-full h-full object-cover mix-blend-overlay opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-orange-400/30 to-white"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-7xl font-extrabold text-orange-400 tracking-widest animate-heroGlow">
              Accommodations
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-100 animate-fadeUp">
              Experience ultimate luxury at Thumki Resort – rooms designed for comfort, elegance, and breathtaking views.
            </p>
          </div>
        </section>

        {/* Deluxe Rooms */}
        <section className="relative py-24 px-6">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">Deluxe Rooms</h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <button onClick={() => prevSlide("deluxe")} className="bg-blue-900 text-white px-4 py-2">Prev</button>
            <button onClick={() => nextSlide("deluxe")} className="bg-orange-400 text-white px-4 py-2">Next</button>
          </div>
          <div className="flex overflow-hidden gap-6">
            {getVisibleRooms(deluxeRooms, deluxeIndex).map((room) => (
              <div key={room.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </section>

        {/* Twin Rooms */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
          <h2 className="text-4xl font-extrabold text-orange-400 mb-6 text-center">Twin Rooms</h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <button onClick={() => prevSlide("twin")} className="bg-blue-900 text-white px-4 py-2">Prev</button>
            <button onClick={() => nextSlide("twin")} className="bg-orange-400 text-white px-4 py-2">Next</button>
          </div>
          <div className="flex overflow-hidden gap-6">
            {getVisibleRooms(twinRooms, twinIndex).map((room) => (
              <div key={room.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />

      <style>{`
        @keyframes fadeUp { from {opacity:0; transform: translateY(40px);} to {opacity:1; transform: translateY(0);} }
        @keyframes heroGlow { 0%,100% {text-shadow: 0 0 10px #FFA500, 0 0 20px #FFA500;} 50% {text-shadow: 0 0 20px #FF7F50, 0 0 40px #FF7F50;} }
        .animate-fadeUp { animation: fadeUp 1.2s ease forwards; }
        .animate-heroGlow { animation: heroGlow 3s ease-in-out infinite alternate; }
      `}</style>
    </>
  );
};
