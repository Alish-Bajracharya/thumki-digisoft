import React, { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Accommodation", href: "#rooms" },
    { name: "About Us", href: "#about" },
    { name: "Joyful Meets", href: "#meets" },
    { name: "Activities", href: "#activities" },
    { name: "Blogs", href: "#blog" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Header background */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1602080755398-2dbf1152a01d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Logo + Hamburger */}
        <div className="relative flex items-center justify-between px-6 lg:px-14 py-4">
          <a
            href="/"
            className="flex items-center justify-center shadow-lg p-2 bg-white border-4 border-amber-500 hover:scale-110 transition-transform duration-500"
          >
            <img
              src={Logo}
              alt="Thumki Resort Logo"
              className="w-36 h-16 md:w-40 md:h-20 object-cover"
            />
          </a>

          {/* Hamburger */}
          <button
            className="text-white text-3xl lg:text-4xl z-50"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Fullscreen Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Navigation */}
          <nav className="flex flex-col items-center space-y-8 text-white text-3xl md:text-4xl font-bold">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#book"
              className="mt-6 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 px-8 py-3 font-semibold shadow-lg hover:scale-105 transition"
              onClick={() => setMenuOpen(false)}
            >
              BOOK STAY
            </a>

            {/* Optional contact info */}
            <div className="flex flex-col items-center mt-8 space-y-2 text-lg text-gray-300">
              <span className="flex items-center gap-2">
                <FaPhone /> +977-9814143738
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope /> info@thumkiresort.com
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
