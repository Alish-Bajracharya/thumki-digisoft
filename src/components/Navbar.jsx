import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/logo/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Accommodation", href: "#rooms" },
    { name: "About Us", href: "#about" },
    { name: "Joyful Meets", href: "#meets" },
    { name: "Activities", href: "#activities" },
    { name: "Blogs", href: "#blog" },
    { name: "Gallery", href: "#gallery" },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide top nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopNav(false);
        setShowBottomNav(false);
      } else {
        setShowTopNav(true);
        setShowBottomNav(true);
      }

      // Add background to top nav after scroll
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showTopNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 md:px-14 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-black/70 backdrop-blur-md shadow-lg"
              : "bg-gradient-to-b from-black/80 to-transparent"
          }`}
        >
          {/* Left Contact */}
          <div className="hidden md:flex items-center space-x-6 text-white/80 text-sm">
            <span className="flex items-center space-x-2">
              <FaPhone />
              <a href="tel:+9779814143738">+977-9814143738</a>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="mailto:info@thumkiresort.com">info@thumkiresort.com</a>
            </span>
          </div>

          {/* Center Logo */}
          <div className="absolute mt-12 left-1/2 transform -translate-x-1/2">
            <a
              href="/"
              className="bg-white rounded-full shadow-lg border-4 border-amber-500 p-2 flex items-center justify-center hover:scale-110 transition-transform duration-500"
            >
              <img
                src={Logo}
                alt="Thumki Resort Logo"
                className="w-36 h-16 md:w-40 md:h-20 rounded-full object-cover"
              />
            </a>
          </div>

          {/* Right Book Stay */}
          <div className="hidden md:flex">
            <a
              href="#book"
              className="bg-gradient-to-r from-blue-900 to-amber-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              BOOK STAY
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Bottom Navbar */}
        <div
          className={`hidden md:flex justify-center transition-all duration-500 ${
            showBottomNav
              ? "opacity-100 translate-y-0 mt-14"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <div
            className={`flex space-x-10 px-8 py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-black/70 backdrop-blur-lg shadow-lg"
                : "bg-white/10 backdrop-blur-md border border-white/20"
            }`}
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-white font-medium hover:text-sky-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-gradient-to-b from-black via-gray-900 to-sky-900 z-50 transform transition-transform duration-500 rounded-l-3xl shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col items-center mt-10 space-y-8 text-white text-lg">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-sky-400 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#book"
            className="mt-6 bg-gradient-to-r from-sky-400 to-sky-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
            onClick={() => setMenuOpen(false)}
          >
            BOOK STAY
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
