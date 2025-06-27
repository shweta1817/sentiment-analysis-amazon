import React from 'react';
import { 
  LuMapPin, 
  LuPhone, 
  LuMail, 
  LuSend, 
  LuClock,
  LuMessageSquare,
  LuUser,
  LuCircle
} from 'react-icons/lu';
import { motion } from 'framer-motion';

const ContactUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Contact <span className="text-purple-300">Us</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants} 
              className="text-xl max-w-3xl mx-auto"
            >
              Get in touch with our AI review analysis team
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <LuMapPin className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Location</h3>
              <p className="text-gray-600">123 AI Street, Tech Valley</p>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <LuPhone className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
              <p className="text-gray-600">support@reviewai.com</p>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <LuClock className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat-Sun: Closed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 sm:p-12">
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                >
                  Send us a message
                </motion.h2>
                
                <form className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center">
                        <LuUser className="mr-2 text-purple-600" /> Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} transition={{ delay: 0.1 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center">
                        <LuMail className="mr-2 text-purple-600" /> Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center">
                        <LuCircle className="mr-2 text-purple-600" /> Subject
                      </span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} transition={{ delay: 0.3 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center">
                        <LuMessageSquare className="mr-2 text-purple-600" /> Message
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your message here..."
                    ></textarea>
                  </motion.div>

                  <motion.div variants={itemVariants} transition={{ delay: 0.4 }}>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      <LuSend /> Send Message
                    </button>
                  </motion.div>
                </form>
              </div>

              {/* Map Section */}
              <div className="bg-gray-200 hidden lg:block">
                <iframe
                  width="100%"
                  height="100%"
                  className="h-full"
                  frameBorder="0"
                  title="map"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Tech%20Valley&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;