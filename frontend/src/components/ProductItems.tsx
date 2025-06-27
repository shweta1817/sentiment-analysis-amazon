import React from "react";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  imgSrc: string;
  url: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    // ... (your existing products array)
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Carefully curated selection of top-rated items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-full h-64 object-contain bg-gray-100 p-4"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/300?text=Image+Not+Available";
                    }}
                  />
                </a>
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                    <FaHeart className="text-gray-400 hover:text-red-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                    <FiShare2 className="text-gray-400 hover:text-blue-500" />
                  </button>
                </div>
                {product.price < 200 && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Budget Pick
                  </div>
                )}
                {product.rating >= 4.5 && (
                  <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Top Rated
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-1"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                        {product.name}
                      </h3>
                    </a>
                  </div>
                </div>

                <div className="mt-3 flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } text-sm`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.price > 500 && (
                      <span className="ml-2 text-sm text-green-600">
                        Free Shipping
                      </span>
                    )}
                  </div>
                  <button className="flex items-center justify-center p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors duration-200">
                    <FaShoppingCart className="text-sm" />
                  </button>
                </div>

                <button className="mt-4 w-full py-2 px-4 border border-purple-600 rounded-lg text-purple-600 font-medium hover:bg-purple-50 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;