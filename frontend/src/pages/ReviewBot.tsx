import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import Products from "../components/ProductItems";

type Product = {
  description: string;
  imageUrl: string;
  rating: number;
  positiveReview: string;
  price: string;
  name: string;
  recommendation: string;
  productUrl: string;
};

const ReviewBot: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");
  const [imageError, setImageError] = useState<boolean>(false);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const [showFullTitle, setShowFullTitle] = useState<boolean>(false);

  // Function to add affiliate tag to the URL
  const addAffiliateTag = (url: string) => {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set("tag", "honestbotai-21"); // Replace with your actual affiliate tag
      return urlObj.toString();
    } catch (error) {
      console.error("Invalid URL:", error);
      return url;
    }
  };

  // Fetch product details
  const fetchProduct = () => {
    setLoading(true);
    setError(null);
    console.log("Fetching product data for URL:", url);

    axios
      .get(`http://127.0.0.1:5000/productURL?url=${encodeURIComponent(url)}`)
      .then((response) => {
        console.log("API Response:", response.data);

        // Map API response to the Product type
        const data = response.data;
        const formattedProduct: Product = {
          description: data["Description"],
          imageUrl: data["Image URL"],
          rating: data["Overall Rating"],
          positiveReview: data["Positive Review Percentage"],
          price: data["Price"],
          name: data["Product Name"],
          recommendation: data["Recommendation"],
          productUrl: addAffiliateTag(url), // Add affiliate tag to the original URL
        };

        setProduct(formattedProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError("Failed to fetch product data");
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("Updated product state:", product);
  }, [product]);

  const handleImageError = () => setImageError(true);

  return (
    <section className=" bg-gray-100 py-12 sm:py-24">
      <div className="mx-auto max-w-screen-xl pt-15 flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight text-gray-800 ">
            Get Honest
            <span className="text-violet-800"> Product</span> Insights
          </h1>
          <p className="mt-5 text-gray-600  text-xl font-normal">
            Confused about which product to buy? Let us help you make the right choice with honest reviews and clear insights.
          </p>
        </div>

        {/* Input Section */}
        <div className="flex w-11/12 sm:w-8/12 lg:w-6/12">
          <div className="flex rounded-md w-full">
            <input
              type="text"
              className="w-full p-3 rounded-md rounded-r-none border-2 border-gray-300 placeholder-current "
              placeholder="Paste Amazon product link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={fetchProduct}
              className="inline-flex items-center bg-violet-700 text-white text-lg font-semibold py-1 px-2 rounded-r-md"
            >
              <span>Get Product Details</span>
            </button>
          </div>
        </div>

        {/* Loading and Error Messages */}
        {loading && <div className="text-center p-4 text-xl">Loading...</div>}
        {error && <div className="text-center p-4 text-red-500 text-xl">{error}</div>}

        {/* Product Details Section */}
        {product && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-11/13 sm:w-8/12 lg:w-8/12">
            <div className="flex flex-col sm:flex-row">
              {/* Product Image */}
              <div className="sm:w-1/3">
                {!imageError ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="rounded-md w-full"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-700">
                    Image Not Available
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="sm:w-2/3 sm:pl-4 flex flex-col">
                {/* Product Name (30 chars limit) */}
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  {showFullTitle
                    ? product.name
                    : product.name.length > 75
                    ? `${product.name.substring(0, 75)}...`
                    : product.name}
                </h2>
                {product.name.length > 75 && (
                  <button
                    onClick={() => setShowFullTitle(!showFullTitle)}
                    className="text-violet-700 text-sm underline cursor-pointer inline-flex text-center"
                  >
                    {showFullTitle ? "Show Less" : "Read More"}
                  </button>
                )}

                {/* Description (50 chars limit) */}
                <p className="text-gray-600 mt-2 flex items-center">
                  {showFullDescription
                    ? product.description
                    : product.description.length > 180
                    ? `${product.description.substring(0, 180)}...`
                    : product.description}
                </p>
                {product.description.length > 180 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-violet-600 text-sm underline cursor-pointer inline-flex"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </button>
                )}

                {/* Price */}
                <p className="text-lg font-semibold text-violet-700 mt-4">
                  Price: ₹{product.price}
                </p>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <span className="text-lg font-semibold text-gray-800">
                    Rating: {product.rating}
                  </span>
                  <div className="ml-2 flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} className={`text-${i < Math.round(product.rating) ? "yellow-400" : "gray-300"}`} />
                    ))}
                  </div>
                </div>

                {/* Positive Review Percentage */}
                <p className="text-gray-600 mt-2">
                  Positive Reviews: {product.positiveReview}
                </p>

                {/* Recommendation */}
                <p className="text-green-600 font-semibold mt-2">
                  {product.recommendation}
                </p>

                {/* View Product Button */}
                <a
                  href={product.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-violet-700 text-white font-semibold py-2 px-4 text-center rounded-md hover:bg-violet-800"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* recent project */}
      <div className="bg-[#72777711] py-12 sm:py-24 mt-24">
        <div className="pl-12 pb-4 text-3xl sm:text-4xl font-black leading-tight text-gray-800">Recent<span className="text-purple-600"> Products</span></div>
        <Products />
      </div>
    </section>
  );
};

export default ReviewBot;