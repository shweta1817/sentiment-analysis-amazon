import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBrain, FaChartLine, FaUserShield } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
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

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      bio: "PhD in Natural Language Processing from Stanford. Former Google AI researcher.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "James Rodriguez",
      role: "Data Scientist",
      bio: "Specializes in sentiment analysis and review classification algorithms.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      role: "Product Manager",
      bio: "E-commerce expert with 8 years experience at Amazon and Flipkart.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Features data
  const features = [
    {
      icon: <FaBrain className="text-purple-600 text-3xl mb-4" />,
      title: "Advanced NLP",
      description: "Our models understand context, sarcasm, and nuanced opinions in reviews."
    },
    {
      icon: <FaChartLine className="text-purple-600 text-3xl mb-4" />,
      title: "Trend Analysis",
      description: "Track product sentiment changes over time to spot emerging issues."
    },
    {
      icon: <FaUserShield className="text-purple-600 text-3xl mb-4" />,
      title: "Fake Review Detection",
      description: "Proprietary algorithms identify and filter out suspicious reviews."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-purple-300">ReviewAI</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto">
              Harnessing the power of AI to transform e-commerce decision making
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://img.freepik.com/free-vector/artificial-intelligence-isometric-flowchart_1284-28778.jpg" 
                alt="AI Analysis" 
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <span className="text-purple-600 font-medium uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Decoding Customer Sentiment with <span className="text-purple-600">AI</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We specialize in <strong>Amazon product sentiment analysis</strong>, utilizing cutting-edge NLP to extract valuable insights from customer reviews. Our advanced AI-driven tools analyze feedback at scale, helping both businesses and consumers make informed decisions.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-purple-600">Team</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our AI-powered review analysis platform
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">10M+</h3>
              <p className="text-xl">Reviews Analyzed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">95%</h3>
              <p className="text-xl">Accuracy Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">24/7</h3>
              <p className="text-xl">AI Monitoring</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In <span className="text-purple-600">Touch</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our AI review analysis? We'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-full bg-gray-300 relative">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder={0}
                  title="map"
                  marginHeight={0}
                  marginWidth={0}
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Amazon%20HQ&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="text-purple-600 mr-3" />
                          <span>Amazon AI Research Center, Seattle, WA</span>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="flex items-center mb-3">
                          <FaEnvelope className="text-purple-600 mr-3" />
                          <a href="mailto:contact@nlpinsights.com" className="text-purple-600 hover:underline">
                            contact@nlpinsights.com
                          </a>
                        </div>
                        <div className="flex items-center">
                          <FaPhone className="text-purple-600 mr-3" />
                          <span>+1 800-123-4567</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;