import React, { useState, useEffect } from "react";
import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/logo/thumki-logo.png";
import NavImage from "../assets/nav.JPG";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          visible && !menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-14 h-[90px] bg-white/0 backdrop-blur-sm">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Thumki Resort Logo"
              className="w-32 h-20 object-cover"
            />
          </a>

          {/* Right section */}
          <div className="flex items-center gap-6">
            {/* Book Button */}
            <a
              href="/booking"
              className="px-3 py-3 bg-blue-900 text-white text-xs tracking-wide uppercase hover:bg-amber-500 transition-all duration-300"
            >
              Book Your Stay
            </a>

            {/* Menu button */}
            <button
              className="relative w-10 h-8 flex flex-col justify-between group z-50"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block h-1 w-full bg-blue-900 transition-all duration-300 group-hover:bg-amber-400"></span>
              <span className="block h-1 w-3/4 bg-blue-800 transition-all duration-300 group-hover:w-full group-hover:bg-amber-400"></span>
              <span className="block h-1 w-1/2 bg-blue-900 transition-all duration-300 group-hover:w-full group-hover:bg-amber-400"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:flex-row transform transition-transform duration-700 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Left: Background Image */}
        <div
          className="hidden md:block w-1/2"
          style={{
            backgroundImage: `url(${NavImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Right: Blue Background with Nav & Info */}
        <div className="relative w-full md:w-1/2 bg-blue-950 text-white flex flex-col justify-center p-10 lg:p-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 w-full">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-8 font-['Playfair_Display']">
              {/* Accommodation + Sub Links */}
              <div className="opacity-0 animate-slideUp" style={{ animationDelay: "0.2s" }}>
                <Link
                  to="/Rooms"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-gray-400 font-normal tracking-wide pointer-events-none transition"
                >
                  Accommodations
                </Link>
                <div className="flex flex-col mt-4 ml-4 space-y-2">
                  <Link
                    to="/Rooms/Deluxe"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-medium hover:text-amber-400 transition"
                  >
                    DELUXE ROOMs
                  </Link>
                  <Link
                    to="/Rooms/Twin"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-medium hover:text-amber-400 transition"
                  >
                    TWIN ROOMs
                  </Link>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-gray-500 my-6 w-full opacity-0 animate-fadeIn" style={{ animationDelay: "0.4s" }} />

              {/* Other Nav Links */}
              <div className="flex flex-col space-y-4 text-3xl font-medium">
                {[
                  { name: "About Us", href: "/About" },
                  { name: "Joyful Meets", href: "#meets" },
                  { name: "Activities", href: "#activities" },
                  { name: "Blogs", href: "#blog" },
                  { name: "Gallery", href: "#gallery" },
                  { name: "Contact", href: "#contact" },
                ].map((link, i) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={i}
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-amber-400 opacity-0 animate-slideUp"
                      style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={i}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-amber-400 opacity-0 animate-slideUp"
                      style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col space-y-6 text-sm font-['Inter'] opacity-0 animate-fadeIn" style={{ animationDelay: "1.2s" }}>
              <a
                href="https://maps.app.goo.gl/Pndh65WvBprfAAeg8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-400"
              >
                <FaMapMarkerAlt className="text-gray-400" />
                Balthali 11, Panauti Municipality,<br />
                Kavre, Nepal
              </a>
              <a href="tel:+977-9851078863" className="flex items-center gap-3 hover:text-amber-400">
                <FaPhone className="text-gray-500" /> +977-9851078863
              </a>
              <a
                href="mailto:thumkiresort69@gmail.com"
                className="flex items-center gap-3 hover:text-amber-500"
              >
                <FaEnvelope className="text-gray-500" /> thumkiresort69@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-4xl z-50 hover:scale-110 transition"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
