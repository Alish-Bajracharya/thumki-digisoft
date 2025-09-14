import React, { useState, useEffect } from "react";
import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/logo/thumki-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Accommodation", href: "/Rooms" },
    { name: "About Us", href: "#about" },
    { name: "Joyful Meets", href: "#meets" },
    { name: "Activities", href: "#activities" },
    { name: "Blogs", href: "#blog" },
    { name: "Gallery", href: "#gallery" },
  ];

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
        <div className="flex items-center justify-between px-6 lg:px-14 h-[90px] lg:h-[90px] bg-white/60 backdrop-blur-sm">
          {/* Logo left */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Thumki Resort Logo"
              className="w-28 h-16 object-cover"
            />
          </a>

          {/* Menu button right */}
          <button
            className="relative w-10 h-8 flex flex-col justify-between group z-50"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block h-1 w-full bg-blue-900  transition-all duration-300 group-hover:bg-amber-400"></span>
            <span className="block h-1 w-3/4 bg-blue-800  transition-all duration-300 group-hover:w-full group-hover:bg-amber-400"></span>
            <span className="block h-1 w-1/2 bg-blue-900  transition-all duration-300 group-hover:w-full group-hover:bg-amber-400"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:flex-row transform transition-transform duration-700 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Left: Nav Links */}
        <div
          className="relative w-full md:w-1/2 flex flex-col justify-center p-12 text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1602080755398-2dbf1152a01d?auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
          <nav className="relative z-50 flex flex-col justify-center h-full space-y-8 text-3xl font-semibold tracking-wide">
            {navLinks.map((link, i) => {
              // For internal routes use <Link>, for section scroll keep <a>
              const isInternalRoute = link.href.startsWith("/");
              return isInternalRoute ? (
                <Link
                  key={i}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${i * 0.15 + 0.3}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <span className="relative group">
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${i * 0.15 + 0.3}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <span className="relative group">
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right: Resort Info */}
        <div
          className="hidden md:flex relative w-1/2 flex-col justify-center items-center text-white p-16"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute text-center inset-0 bg-gradient-to-b from-black/80 via-black/70 to-transparent backdrop-blur-sm"></div>
          <div className="relative text-center z-50 flex flex-col space-y-6 max-w-lg">
            <img
              src={Logo}
              alt="Thumki Resort Logo"
              className="w-32 h-20 object-cover rounded-md shadow-lg mx-auto"
            />
            <h1
              className="text-5xl font-extrabold text-orange-400 drop-shadow-lg tracking-wide opacity-0 animate-fadeInDown"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              Thumki Resort
            </h1>

            <a
              href="https://maps.app.goo.gl/Pndh65WvBprfAAeg8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-xl text-gray-200 py-5 hover:text-amber-500 opacity-0 animate-fadeInDown"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <FaMapMarkerAlt className="text-amber-500" />
              Balthali 11, Panauti Municipality, Kavre, Nepal
            </a>
            <a
              href="tel:+977-9851078863"
              className="flex items-center justify-center gap-3 text-lg text-gray-300 py-5 hover:text-amber-500 opacity-0 animate-fadeInDown"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <FaPhone className="text-amber-500" /> +977-9851078863
            </a>
            <a
              href="mailto:thumkiresort69@gmail.com"
              className="flex items-center justify-center gap-3 text-lg text-gray-300 py-5 hover:text-amber-500 opacity-0 animate-fadeInDown"
              style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
            >
              <FaEnvelope className="text-amber-500" /> thumkiresort69@gmail.com
            </a>
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease forwards; }
      `}</style>
    </>
  );
};

export default Navbar;
