import React from "react";

const products = [
  {
    id: 1,
    name: "Jockey 1406 Women's High Coverage Super Combed Cotton Mid Waist Hipster",
    category: "Clothing & Accessories",
    price: 582.0,
    rating: 4.2,
    reviews: 38845,
    imgSrc: "https://m.media-amazon.com/images/I/71eUwDk8z+L._SY879_.jpg",
    url: "https://www.amazon.in/dp/B00M0H6Z6C",
  },
  {
    id: 2,
    name: "GoSriKi Women's Rayon Viscose Straight Bandhej Printed Kurta with Pant & Dupatta",
    category: "Clothing & Accessories",
    price: 599.0,
    rating: 4.0,
    reviews: 103399,
    imgSrc: "https://m.media-amazon.com/images/I/61utX8kBDlL._SY695_.jpg",
    url: "https://www.amazon.in/dp/dlspfqB",
  },
  {
    id: 3,
    name: "SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey",
    category: "Home & Kitchen",
    price: 125.0,
    rating: 4.3,
    reviews: 94657,
    imgSrc: "https://m.media-amazon.com/images/I/51zL2PRPHZL._SY879_.jpg",
    url: "https://www.amazon.in/dp/fLPZ3Qj",
  },
  {
    id: 4,
    name: "ATOM Digital Kitchen Food Weighing Scale",
    category: "Home & Kitchen",
    price: 799.0,
    rating: 3.9,
    reviews: 8660,
    imgSrc: "https://m.media-amazon.com/images/I/61YrS69FB9L._SX679_.jpg",
    url: "https://www.amazon.in/dp/aLQjiay",
  },
  {
    id: 5,
    name: "Namyaa Hair Removal Cream for Intimate Skin women 60gm",
    category: "Beauty",
    price: 99.0,
    rating: 4.0,
    reviews: 2240,
    imgSrc: "https://m.media-amazon.com/images/I/71RC7oeEDlL._AC_SX679_.jpg",
    url: "https://www.amazon.in/dp/B07FDJMC9Q",
  },
  {
    id: 6,
    name: "IMPOWER Self Defence Pepper Spray Green Chilli for Woman Safety - 55 ML",
    category: "Personal Safety",
    price: 169.0,
    rating: 4.4,
    reviews: 1567,
    imgSrc: "https://m.media-amazon.com/images/I/61jajLNGq0L._AC_SX679_.jpg",
    url: "https://www.amazon.in/dp/B09DGR1JLS",
  },
  {
    id: 7,
    name: "Amazon Basics Lightweight Super Soft Easy Care Microfiber Sheet Set",
    category: "Home",
    price: 27.14,
    rating: 4.6,
    reviews: 234567,
    imgSrc: "https://m.media-amazon.com/images/I/61uEhEyKORL._AC_SX679_.jpg",
    url: "https://www.amazon.com/dp/B00M0H6Z6C",
  },
  {
    id: 8,
    name: "Nintendo Switch – OLED Model w/ White Joy-Con",
    category: "Gaming",
    price: 349.99,
    rating: 4.9,
    reviews: 76543,
    imgSrc: "https://m.media-amazon.com/images/I/71AwrEwxYaL._AC_SX679_.jpg",
    url: "https://www.amazon.com/dp/B098RL6SBJ",
  },
  {
    id: 9,
    name: "Burt's Bees 100% Natural Moisturizing Lip Balm",
    category: "Beauty",
    price: 4.98,
    rating: 4.8,
    reviews: 87654,
    imgSrc: "https://m.media-amazon.com/images/I/71JQ7O3NtEL._AC_SX679_.jpg",
    url: "https://www.amazon.com/dp/B0014P8L9W",
  },
  {
    id: 10,
    name: "CeraVe Moisturizing Cream | Body and Face Moisturizer",
    category: "Beauty",
    price: 18.24,
    rating: 4.8,
    reviews: 123456,
    imgSrc: "https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_SX679_.jpg",
    url: "https://www.amazon.com/dp/B00TTD9BRC",
  },
  {
    id: 11,
    name: "PlayStation 5 Console (CFI-1215A01X)",
    category: "Gaming",
    price: 499.99,
    rating: 4.8,
    reviews: 98765,
    imgSrc: "https://m.media-amazon.com/images/I/51IBXtnToLL._AC_SX679_.jpg",
    url: "https://www.amazon.com/dp/B0BCNKKZ91",
  },
];

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
  return (
    <div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.category}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ₹{product.price}
                  </p>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="text-yellow-500 font-bold">★ {product.rating}</span>
                    <span className="text-gray-500 text-sm">({product.reviews})</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;