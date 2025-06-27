import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.svg';
import contactIcon from '../assets/contact-us.svg';
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "ReviewBot", path: "/review-bot" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <motion.section 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-2xl border-b border-gray-200 bg-white/80 py-3 shadow-sm backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between container mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <div className="flex shrink-0">
            <Link 
              aria-current="page" 
              className="flex items-center" 
              to="/"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="h-8 w-auto"
                src={logo}
                alt="Website Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">SentimentLens</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-500"
                }`}
                to={link.path}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-purple-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contact-us" 
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-500 transition-colors duration-200"
            >
              <img
                className="h-5 w-auto"
                src={contactIcon}
                alt="Contact us"
              />
              <span>Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "bg-purple-50 text-purple-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
            <Link
              className="flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              to="/contact-us"
            >
              <img
                className="h-5 w-auto"
                src={contactIcon}
                alt="Contact us"
              />
              <span>Contact Us</span>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Navbar;