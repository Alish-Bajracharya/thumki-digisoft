import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import logo from "../assets/logo/logo.png";
import booking from "../assets/logo/booking.jpg";
import trip from "../assets/logo/trip.png";
import agoda from "../assets/logo/agoda.png";

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className='relative bg-[#0c0c0c] text-white pt-16 pb-6'>
            <div className="container mx-auto px-6 lg:px-20">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left'>
                    
                    {/* Quick Links */}
                    <div>
                        <h5 className='font-CU text-[24px] text-[#F5EFDB] mb-6'>Quick Links</h5>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-[#aaa] hover:text-white transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-[#aaa] hover:text-white transition">About Us</Link>
                            </li>
                            <li>
                                <Link to="/rooms" className="text-[#aaa] hover:text-white transition">Rooms</Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-[#aaa] hover:text-white transition">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-[#aaa] hover:text-white transition">Contact</Link>
                            </li>
                            <li>
                                <Link to="/activities" className="text-[#aaa] hover:text-white transition">Activities</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo + Quote + Socials */}
                    <div className="flex flex-col items-center">
                        <img 
                            src={logo}
                            alt="Thumki Logo" 
                            className="w-[300px] h-[200px] mb-4 rounded-full shadow-lg"
                        />
                        <p className='text-[#fff] font-OS text-base leading-7 text-center italic'>
                            "The best way to find yourself is to lose yourself in the service of others.”
                        </p>

                        {/* Social Media */}
                        <div className='flex gap-x-4 mt-6 text-lg'>
                            <a href="https://www.facebook.com" target='_blank' rel="noreferrer" className='hover:text-[#4267B2]'>
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target='_blank' rel="noreferrer" className='hover:text-[#1DA1F2]'>
                                <FiTwitter />
                            </a>
                            <a href="https://www.instagram.com" target='_blank' rel="noreferrer" className='hover:text-[#E1306C]'>
                                <FaInstagram />
                            </a>
                        </div>

                        {/* Find Us On */}
                        <div className="flex flex-col items-center mt-6">
                            <span className="text-[#F5EFDB] font-CU text-sm mb-2">Find Us On:</span>
                            <div className="flex gap-4">
                                <a href="https://www.booking.com" target="_blank" rel="noreferrer">
                                    <img src={booking} alt="Booking.com" className="h-10 hover:opacity-80" />
                                </a>
                                <a href="https://www.tripadvisor.com" target="_blank" rel="noreferrer">
                                    <img src={trip} alt="Tripadvisor" className="h-10 ml-5 hover:opacity-80" />
                                </a>
                                <a href="https://www.agoda.com" target="_blank" rel="noreferrer">
                                    <img src={agoda} alt="Agoda" className="h-10 hover:opacity-80" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className='ml-0 md:ml-28'>
                        <h5 className='font-CU text-[24px] text-[#F5EFDB]  mb-6'>Working Hours</h5>
                        <div className='text-[#aaa] mb-4'>
                            <p>Monday-Friday:</p>
                            <p>08:00 am - 12:00 am</p>
                        </div>
                        <div className='text-[#aaa]'>
                            <p>Saturday-Sunday:</p>
                            <p>06:00 am - 11:00 pm</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-12 pt-6">
                    <p className='text-[#aaa] text-sm mb-4 md:mb-0'>
                        © 2025 Thumki. All Rights Reserved.
                    </p>
                    <p className="text-[#aaa] text-sm">
                        Website by <span className="text-[#F5EFDB]">Digisoft Developers Pvt. Ltd.</span>
                    </p>
                </div>
            </div>

            {/* Scroll to top button */}
            {showScroll && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-[#F5EFDB] text-black p-3 rounded-full shadow-lg hover:bg-white transition"
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    )
}

export default Footer;
