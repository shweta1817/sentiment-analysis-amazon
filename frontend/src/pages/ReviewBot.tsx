import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar, FaHistory, FaSpinner } from "react-icons/fa";
import Products from "../components/ProductItems";

type Product = {
  id?: string;
  description: string;
  imageUrl: string;
  rating: number;
  positiveReview: string;
  price: string;
  name: string;
  recommendation: string;
  productUrl: string;
  timestamp?: number;
};

const ReviewBot: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");
  const [imageError, setImageError] = useState<boolean>(false);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const [showFullTitle, setShowFullTitle] = useState<boolean>(false);
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  // Load recent products from localStorage on component mount
  useEffect(() => {
    const storedProducts = localStorage.getItem("recentProducts");
    if (storedProducts) {
      setRecentProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Function to add affiliate tag to the URL
  const addAffiliateTag = (url: string) => {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set("tag", "honestbotai-21");
      return urlObj.toString();
    } catch (error) {
      console.error("Invalid URL:", error);
      return url;
    }
  };

  // Save product to recent products in localStorage
  const saveToRecentProducts = (product: Product) => {
    const productWithId = {
      ...product,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: Date.now()
    };

    const updatedRecentProducts = [
      productWithId,
      ...recentProducts.filter(p => p.name !== product.name).slice(0, 9)
    ];

    localStorage.setItem("recentProducts", JSON.stringify(updatedRecentProducts));
    setRecentProducts(updatedRecentProducts);
  };

  // Fetch product details
  const fetchProduct = () => {
    if (!url.trim()) {
      setError("Please enter a product URL");
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`http://127.0.0.1:5000/productURL?url=${encodeURIComponent(url)}`)
      .then((response) => {
        const data = response.data;
        const formattedProduct: Product = {
          description: data["Description"],
          imageUrl: data["Image URL"],
          rating: data["Overall Rating"],
          positiveReview: data["Positive Review Percentage"],
          price: data["Price"],
          name: data["Product Name"],
          recommendation: data["Recommendation"],
          productUrl: addAffiliateTag(url),
        };

        setProduct(formattedProduct);
        saveToRecentProducts(formattedProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError("Failed to fetch product data. Please check the URL and try again.");
        setLoading(false);
      });
  };

  const handleImageError = () => setImageError(true);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      fetchProduct();
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-12 sm:py-16 pt-4">
      <div className="container mx-auto px-4 mt-24">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Honest <span className="text-purple-600">Product</span> Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confused about which product to buy? Let us help you make the right choice with honest reviews and clear insights.
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Paste Amazon product link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              onClick={fetchProduct}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                "Get Product Details"
              )}
            </button>
          </div>
          {error && !loading && (
            <p className="mt-2 text-red-500 text-sm">{error}</p>
          )}
        </div>

        {/* Product Details Section */}
        {product && (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16 transition-all duration-300 hover:shadow-lg">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-100">
                {!imageError ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-contain rounded-lg"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    <span>Image Not Available</span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {showFullTitle ? product.name : `${product.name.substring(0, 75)}${product.name.length > 75 ? "..." : ""}`}
                    </h2>
                    {product.name.length > 75 && (
                      <button
                        onClick={() => setShowFullTitle(!showFullTitle)}
                        className="text-purple-600 text-sm font-medium hover:underline"
                      >
                        {showFullTitle ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {product.recommendation}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-gray-700 mb-4">
                    {showFullDescription ? product.description : `${product.description.substring(0, 180)}${product.description.length > 180 ? "..." : ""}`}
                    {product.description.length > 180 && (
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-purple-600 text-sm font-medium ml-2 hover:underline"
                      >
                        {showFullDescription ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-6">
                      <div className="flex items-center mr-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-${i < Math.floor(product.rating) ? "yellow-400" : "gray-300"} text-lg`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-900 font-medium ml-1">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-gray-600">
                      {product.positiveReview} positive reviews
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                      ₹{product.price}
                    </span>
                    <a
                      href={product.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Products Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="flex items-center mb-8">
            <FaHistory className="text-purple-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Recently Viewed Products
            </h2>
          </div>
          
          {recentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProducts.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Image+Not+Available";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-bold">₹{item.price}</span>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span>{item.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <a
                      href={item.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block w-full text-center bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium py-2 px-4 rounded transition-colors duration-200"
                    >
                      View Again
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No recently viewed products yet. Analyze a product to see it here!</p>
            </div>
          )}
        </div>

        {/* Featured Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Featured <span className="text-purple-600">Products</span>
          </h2>
          <Products />
        </div>
      </div>
    </section>
  );
};

export default ReviewBot;