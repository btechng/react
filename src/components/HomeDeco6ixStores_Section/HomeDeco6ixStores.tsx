import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Give me the html and css on the first image dextop and second image mobile with REACT tsx
interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  rating: number;
}
const HomeDeco6ixStores = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products: Product[] = [
    {
      id: 1,
      name: "LG 25L Smart Inverter Microwave",
      originalPrice: 170000,
      salePrice: 165000,
      discount: 3,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 2,
      name: "Industrial waste bin",
      originalPrice: 60000,
      salePrice: 55000,
      discount: 8,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 3,
      name: "Original wall clock in Nigeria",
      originalPrice: 16000,
      salePrice: 15000,
      discount: 6,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 4,
      name: "Quality design wall clock",
      originalPrice: 20000,
      salePrice: 18000,
      discount: 10,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 5,
      name: "Strong wall clock",
      originalPrice: 75000,
      salePrice: 70000,
      discount: 7,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
  ];

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}.00`;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, products.length - 2)) %
        Math.max(1, products.length - 2)
    );
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Home decors
            </h2>
            <div className="w-16 h-1 bg-orange-400 mt-2"></div>
          </div>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-medium transition-colors">
            View More
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="flex space-x-6 overflow-hidden">
            {products.slice(currentIndex, currentIndex + 5).map((product) => (
              <div
                key={product.id}
                className="flex-none w-56 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      OFF {product.discount}%
                    </span>
                  </div>
                  <div className="w-full h-48 bg-gray-100 rounded-t-lg flex items-center justify-center">
                    {product.id === 1 && (
                      <div className="w-32 h-20 bg-black rounded"></div>
                    )}
                    {product.id === 2 && (
                      <div className="w-24 h-32 bg-green-500 rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-xs font-bold text-center">
                            HAPPY
                            <br />
                            FAMILY
                          </div>
                        </div>
                      </div>
                    )}
                    {product.id === 3 && (
                      <div className="w-32 h-32 border-4 border-black bg-white rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-orange-400 font-bold text-lg">
                            12 1
                          </div>
                          <div className="text-orange-400 font-bold text-sm">
                            765
                          </div>
                        </div>
                      </div>
                    )}
                    {product.id === 4 && (
                      <div className="w-32 h-32 bg-gray-200 rounded-full border-8 border-gray-600 flex items-center justify-center relative">
                        <div className="text-black font-bold text-xs">12</div>
                        <div className="absolute w-16 h-0.5 bg-black rotate-45"></div>
                        <div className="absolute w-12 h-0.5 bg-black -rotate-12"></div>
                      </div>
                    )}
                    {product.id === 5 && (
                      <div className="w-32 h-32 relative">
                        <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-xs">
                              6729
                            </span>
                          </div>
                        </div>
                        <div className="absolute inset-0 border-8 border-yellow-300 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-gray-400 text-sm line-through mb-1">
                    {formatPrice(product.originalPrice)}
                  </div>
                  <div className="text-orange-500 text-lg font-bold mb-2">
                    {formatPrice(product.salePrice)}
                  </div>
                  <StarRating rating={product.rating} />
                  <h3 className="text-gray-800 font-medium mt-2 text-sm leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {products.slice(0, 2).map((product) => (
              <div
                key={product.id}
                className="flex-none w-44 bg-white rounded-lg shadow-md"
              >
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      OFF {product.discount}%
                    </span>
                  </div>
                  <div className="w-full h-36 bg-gray-100 rounded-t-lg flex items-center justify-center">
                    {product.id === 1 && (
                      <div className="w-24 h-16 bg-black rounded"></div>
                    )}
                    {product.id === 2 && (
                      <div className="w-20 h-28 bg-green-500 rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-xs font-bold text-center">
                            HAPPY
                            <br />
                            FAMILY
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-gray-400 text-sm line-through mb-1">
                    {formatPrice(product.originalPrice)}
                  </div>
                  <div className="text-orange-500 text-base font-bold mb-2">
                    {formatPrice(product.salePrice)}
                  </div>
                  <StarRating rating={product.rating} />
                  <h3 className="text-gray-800 font-medium mt-2 text-xs leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDeco6ixStores;
