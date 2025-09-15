import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import booking from "../assets/logo/booking1.png";
import trip from "../assets/logo/trip.png";
import agoda from "../assets/logo/agoda.png";

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative w-full min-h-[600px] flex flex-col justify-end overflow-hidden">

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-amber-500 via-green-700 to-blue-900 animate-gradient-xy"></div>

            {/* Decorative Orbs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-amber-500/20 blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-blue-500/20 blur-3xl animate-pulse-slow"></div>
            </div>

            {/* Glass Panel Footer */}
            <div className="relative mx-auto w-full lg:w-5/6 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl px-6 sm:px-10 py-12 sm:py-16 flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 text-white">

                {/* Column 1: Resort Name & Quote */}
                <div className="flex-1 flex flex-col items-start space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-amber-500 drop-shadow-lg">
                        Thumki Resort
                    </h1>
                    <p className="italic max-w-full sm:max-w-xs md:max-w-sm text-gray-200 text-sm sm:text-base">
                        "The best way to find yourself is to lose yourself in the service of others."
                    </p>

                    {/* Social Media */}
                    <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-4">
                        <a href="https://www.facebook.com" target='_blank' rel="noreferrer" className='hover:text-[#4267B2] transition'>
                            <FaFacebookF className="text-xl sm:text-2xl"/>
                        </a>
                        <a href="https://twitter.com" target='_blank' rel="noreferrer" className='hover:text-[#1DA1F2] transition'>
                            <FiTwitter className="text-xl sm:text-2xl"/>
                        </a>
                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer" className='hover:text-[#E1306C] transition'>
                            <FaInstagram className="text-xl sm:text-2xl"/>
                        </a>
                    </div>

                    {/* Find Us On */}
                    <div className="mt-4 sm:mt-6">
                        <span className="text-amber-500 font-semibold mb-2 block text-sm sm:text-base">Find Us On:</span>
                        <div className="flex gap-2 sm:gap-4 mt-2">
                            <a href="https://www.booking.com" target="_blank" rel="noreferrer">
                                <img src={booking} alt="Booking.com" className="h-8 sm:h-10 hover:opacity-80 transition" />
                            </a>
                            <a href="https://www.tripadvisor.com" target="_blank" rel="noreferrer">
                                <img src={trip} alt="Tripadvisor" className="h-8 sm:h-10 hover:opacity-80 transition" />
                            </a>
                            <a href="https://www.agoda.com" target="_blank" rel="noreferrer">
                                <img src={agoda} alt="Agoda" className="h-8 sm:h-10 hover:opacity-80 transition" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Column 2: Quick Links & Newsletter */}
                <div className="flex-1 flex flex-col space-y-4 sm:space-y-6">
                    <div>
                        <h5 className='text-amber-500 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6'>Quick Links</h5>
                        <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link to="/rooms" className="hover:text-white transition">Rooms</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                            <li><Link to="/activities" className="hover:text-white transition">Activities</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 3: Working Hours & Testimonial */}
                <div className="flex-1 flex flex-col space-y-4 sm:space-y-6">
                    <div>
                        <h5 className='text-amber-500 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6'>Working Hours</h5>
                        <div className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                            <div>
                                <p className="font-medium">Monday - Friday:</p>
                                <p>08:00 am - 12:00 am</p>
                            </div>
                            <div>
                                <p className="font-medium">Saturday - Sunday:</p>
                                <p>06:00 am - 11:00 pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-2 sm:mt-4 italic text-gray-200 text-sm sm:text-base max-w-full sm:max-w-sm">
                        "An unforgettable stay! Luxurious, peaceful, and the service was impeccable." – <span className="font-semibold text-amber-500">Guest Review</span>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-6 sm:mt-8 py-4 sm:py-5 flex flex-col sm:flex-row justify-between px-6 sm:px-10 text-gray-300 text-xs sm:text-sm">
                <p>&copy; {new Date().getFullYear()} Thumki Resort. All Rights Reserved.</p>
                <p className="mt-2 sm:mt-0">Website by <span className="text-amber-500 font-semibold">Digisoft Developers Pvt. Ltd.</span></p>
            </div>

            {/* Scroll to top */}
            {showScroll && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-amber-500 text-black p-2.5 sm:p-3 rounded-full shadow-2xl hover:bg-yellow-400 transition"
                >
                    <FaArrowUp />
                </button>
            )}

            {/* Tailwind custom animation */}
            <style>
                {`
                    @keyframes gradient-xy {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animate-gradient-xy {
                        background-size: 200% 200%;
                        animation: gradient-xy 15s ease infinite;
                    }
                    .animate-pulse-slow {
                        animation: pulse 8s ease-in-out infinite;
                    }
                `}
            </style>
        </footer>
    )
}

export default Footer;
