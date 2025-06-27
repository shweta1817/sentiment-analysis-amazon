import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "ReviewBot", path: "/reviewbot" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, url: "https://twitter.com/reviewbot" },
    { icon: <FaFacebook />, url: "https://facebook.com/reviewbot" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/company/reviewbot" },
    { icon: <FaInstagram />, url: "https://instagram.com/reviewbot" },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: "support@reviewbot.com" },
    { icon: <FaPhone />, text: "+1 (123) 456-7890" },
    { icon: <FaMapMarkerAlt />, text: "123 AI Street, Tech City" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gray-100 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-purple-500">About Us</h3>
            <p className="text-gray-600 mb-4">
              We provide AI-powered insights to help you make smarter purchasing decisions by analyzing thousands of Amazon reviews.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">SentimentLens</p>
                <p className="text-sm text-gray-600">Your Shopping Assistant</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-purple-500">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-purple-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-purple-500">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-purple-500">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest product insights and updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-200 focus:border-purple-500 focus:outline-none text-gray-700"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 text-xl transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>&copy; {currentYear} ReviewBot. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <Link to="/privacy" className="hover:text-purple-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-purple-500 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-purple-500 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;