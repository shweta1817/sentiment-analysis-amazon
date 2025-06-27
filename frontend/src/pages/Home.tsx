import React from 'react';
import Hero from '../components/Hero';
import { FaQuoteLeft, FaCheckCircle, FaRegStar, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
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

  // Testimonials data
  const testimonials = [
    {
      quote: "This tool saved me hours of reading reviews. The insights were spot-on and helped me choose the perfect product!",
      name: "John Doe",
      role: "Verified User",
      rating: 5
    },
    {
      quote: "I avoided buying a low-quality product thanks to this tool. The AI analysis was incredibly accurate and detailed.",
      name: "Jane Smith",
      role: "Verified User",
      rating: 4
    },
    {
      quote: "As someone who reads dozens of reviews before buying, this service is a game-changer. It summarizes everything perfectly.",
      name: "Alex Johnson",
      role: "Verified User",
      rating: 5
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How does the AI analyze reviews?",
      answer: "Our advanced NLP algorithms analyze sentiment, extract key themes, and identify common pros/cons from thousands of reviews in seconds. We also detect fake reviews and weigh verified purchases more heavily."
    },
    {
      question: "Is this tool free to use?",
      answer: "Yes! Our basic product analysis is completely free. We also offer premium features like historical price tracking and competitor comparisons for power users."
    },
    {
      question: "Can I trust the insights?",
      answer: "Absolutely. Our AI is trained on millions of verified reviews and constantly updated to provide the most accurate, unbiased insights possible. We don't accept payments from manufacturers."
    },
    {
      question: "Which marketplaces do you support?",
      answer: "Currently we support Amazon globally, with plans to expand to Walmart, Best Buy, and other major retailers soon."
    }
  ];

  // Popular products data
  const popularProducts = [
    {
      name: "Bluetooth Headphones",
      rating: 3.9,
      reviews: 190,
      image: "https://m.media-amazon.com/images/I/711l4y8aNlL._SX679_.jpg",
      url: "https://amzn.in/d/8X8hDR0",
      price: "₹1,299",
      keyFeatures: ["Noise Cancellation", "30hr Battery", "Comfort Fit"]
    },
    {
      name: "Noise Pulse 2 Max",
      rating: 4.2,
      reviews: 15500,
      image: "https://m.media-amazon.com/images/I/61bm7UEdGAL._SX679_.jpg",
      url: "https://amzn.in/d/9cxAbeb",
      price: "₹2,499",
      keyFeatures: ["1.85\" Display", "BT Calling", "10 Days Battery"]
    },
    {
      name: "Cookwell Mixer Grinder",
      rating: 4.2,
      reviews: 20000,
      image: "https://m.media-amazon.com/images/I/81yobRRV8nL._SX679_.jpg",
      url: "https://amzn.in/d/d0WriN8",
      price: "₹1,899",
      keyFeatures: ["750W Motor", "3 Jars", "2yr Warranty"]
    }
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-purple-600">Works</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get honest product insights in just three simple steps
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Paste Product Link</h3>
              <p className="text-gray-600 text-center">
                Copy any Amazon product URL and paste it into our analyzer. We support all Amazon marketplaces worldwide.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">AI Analysis</h3>
              <p className="text-gray-600 text-center">
                Our advanced NLP processes thousands of reviews in seconds, identifying key patterns and filtering out fake reviews.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Get Insights</h3>
              <p className="text-gray-600 text-center">
                Receive a comprehensive report with pros, cons, quality assessment, and personalized recommendations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-purple-600">Thousands</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < testimonial.rating ? (
                        <FaStar className="text-yellow-400" />
                      ) : (
                        <FaRegStar className="text-gray-300" />
                      )}
                    </span>
                  ))}
                </div>
                <FaQuoteLeft className="text-purple-200 text-2xl mb-4" />
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center text-purple-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-purple-600">Product Reviews</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our AI has discovered about these best-selling products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300?text=Product+Image';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(product.rating) ? (
                            <FaStar className="text-yellow-400 text-sm" />
                          ) : (
                            <FaRegStar className="text-gray-300 text-sm" />
                          )}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {product.rating.toFixed(1)} ({product.reviews.toLocaleString()}+)
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    View Analysis
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stop Wasting Time on Fake Reviews
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Get instant, AI-powered insights on any Amazon product. Make smarter purchases in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/review-bot"
                className="bg-white text-purple-600 rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
              >
                Analyze a Product Now
              </a>
              <a
                href="/products"
                className="bg-transparent border-2 border-white text-white rounded-lg px-8 py-4 text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse Popular Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our product analysis service
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <details className="group">
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-purple-600 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 -mt-3 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;