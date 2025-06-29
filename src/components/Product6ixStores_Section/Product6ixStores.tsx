import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Product6ixStores = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    {
      id: 1,
      name: "LG 25L Smart Inverter Microwave",
      originalPrice: "₦170,000.00",
      salePrice: "₦165,000.00",
      discount: "3%",
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 2,
      name: "Single electric cooker",
      originalPrice: "₦30,000.00",
      salePrice: "₦29,000.00",
      discount: "3%",
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 3,
      name: "Sokany slow juicer 300 watts",
      originalPrice: "₦120,000.00",
      salePrice: "₦115,000.00",
      discount: "4%",
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 4,
      name: "Wireless charging Power bank",
      originalPrice: "₦22,000.00",
      salePrice: "₦20,000.00",
      discount: "9%",
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 5,
      name: "Fast charge power bank 20000MAH",
      originalPrice: "₦20,000.00",
      salePrice: "₦17,000.00",
      discount: "15%",
      image: "/api/placeholder/250/200",
      rating: 0,
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, products.length - 1));
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, products.length - 1)) %
        Math.max(1, products.length - 1)
    );
  };
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 py-8">
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              New Products
            </h2>
            <div className="w-20 h-1 bg-orange-400"></div>
          </div>

          {/* Products Grid */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Products Container */}
            <div className="overflow-hidden mx-8">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 20}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-1/5 flex-shrink-0 px-2">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        {/* Discount Badge */}
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            OFF
                          </span>
                          <span className="bg-red-500 text-white text-xs font-bold px-1 py-1 rounded-r">
                            {product.discount}
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        {/* Prices */}
                        <div className="mb-2">
                          <p className="text-gray-500 line-through text-sm">
                            {product.originalPrice}
                          </p>
                          <p className="text-orange-500 font-bold text-lg">
                            {product.salePrice}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="mb-3">
                          <StarRating rating={product.rating} />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-gray-900 font-medium text-sm leading-tight">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden px-4 py-6">
          {/* Section Header */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              New Products
            </h2>
            <div className="w-16 h-1 bg-orange-400"></div>
          </div>

          {/* Mobile Products Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>

            {/* Products Slider */}
            <div className="overflow-hidden mx-6">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 50}%)` }}
              >
                {products.slice(0, 2).map((product) => (
                  <div key={product.id} className="w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-32 object-cover"
                        />
                        {/* Discount Badge */}
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                            OFF
                          </span>
                          <span className="bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-r">
                            {product.discount}
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-3">
                        {/* Prices */}
                        <div className="mb-2">
                          <p className="text-gray-500 line-through text-xs">
                            {product.originalPrice}
                          </p>
                          <p className="text-orange-500 font-bold text-sm">
                            {product.salePrice}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="mb-2">
                          <StarRating rating={product.rating} />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-gray-900 font-medium text-xs leading-tight">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product6ixStores;
