import React, { useEffect, useState } from 'react';
import { FaStar, FaHistory, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  imageUrl: string;
  productUrl: string;
  timestamp?: number;
}

const Products = () => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Popular products data
  const popularProducts = [
    {
      id: '1',
      name: "Jockey Women's Cotton Hipster",
      price: "582",
      rating: 4.2,
      imageUrl: "https://m.media-amazon.com/images/I/71eUwDk8z+L._SY879_.jpg",
      productUrl: "https://www.amazon.in/dp/B00M0H6Z6C"
    },
    {
      id: '2',
      name: "GoSriKi Women's Printed Kurta with Pant & Dupatta",
      price: "599",
      rating: 4.0,
      imageUrl: "https://m.media-amazon.com/images/I/61utX8kBDlL._SY695_.jpg",
      productUrl: "https://www.amazon.in/dp/dlspfqB"
    },
    {
      id: '3',
      name: "SOFTSPUN Microfiber Cloth - 4 pcs",
      price: "125",
      rating: 4.3,
      imageUrl: "https://m.media-amazon.com/images/I/51zL2PRPHZL._SY879_.jpg",
      productUrl: "https://www.amazon.in/dp/fLPZ3Qj"
    },
    {
      id: '4',
      name: "ATOM Digital Kitchen Food Weighing Scale",
      price: "799",
      rating: 3.9,
      imageUrl: "https://m.media-amazon.com/images/I/61YrS69FB9L._SX679_.jpg",
      productUrl: "https://www.amazon.in/dp/aLQjiay"
    },
  ];

  // Load recent products from localStorage
  useEffect(() => {
    const storedProducts = localStorage.getItem('recentProducts');
    if (storedProducts) {
      try {
        const parsedProducts = JSON.parse(storedProducts);
        // Sort by most recent first (based on timestamp)
        const sortedProducts = parsedProducts
          .sort((a: Product, b: Product) => (b.timestamp || 0) - (a.timestamp || 0))
          .slice(0, 4); // Show only 4 most recent
        setRecentProducts(sortedProducts);
      } catch (error) {
        console.error('Error parsing recent products:', error);
      }
    }
    setLoading(false);
  }, []);

  const renderProductCard = (product: Product) => (
    <motion.div
      key={product.id}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Product+Image';
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 line-clamp-2 h-12">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-purple-600">₹{product.price}</span>
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
            <FaShoppingCart /> Buy Now
          </button>
        </div>
      </a>
    </motion.div>
  );

  return (
    <div className="bg-gray-50">
      {/* Popular Products Section */}
      <div className="py-12 sm:py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Popular <span className="text-purple-600">Products</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map(renderProductCard)}
        </div>
      </div>

      {/* Recently Viewed Section */}
      <div className="py-12 sm:py-16 px-6 max-w-7xl mx-auto bg-[#f9f9f9]">
        <div className="flex items-center mb-8">
          <FaHistory className="text-purple-600 text-2xl mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Recently Viewed
          </h2>
        </div>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : recentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProducts.map(renderProductCard)}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 text-lg">
              No recently viewed products yet. Start browsing to see them here!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;