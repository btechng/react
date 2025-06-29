import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  rating: number;
}

const FootMat6ixStores = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products: Product[] = [
    {
      id: 1,
      name: "Outdoor footmat",
      originalPrice: 12000,
      salePrice: 10000,
      discount: 17,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 2,
      name: "Absorbent bathroom foot mat",
      originalPrice: 6500,
      salePrice: 5500,
      discount: 15,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 3,
      name: "Quality floor mats",
      originalPrice: 6500,
      salePrice: 5500,
      discount: 15,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 4,
      name: "High quality absorbent/bedside mat",
      originalPrice: 7000,
      salePrice: 6500,
      discount: 7,
      image: "/api/placeholder/250/200",
      rating: 0,
    },
    {
      id: 5,
      name: "Coconut fiber foot mat",
      originalPrice: 12000,
      salePrice: 12000,
      discount: 0,
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
              Innobest footmat&more
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
                  <div className="w-full h-48 bg-gray-100 rounded-t-lg flex items-center justify-center p-4">
                    {product.id === 1 && (
                      <div className="w-full h-full bg-gray-800 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                          <div className="grid grid-cols-4 gap-1 p-2">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-3 h-3 border border-white rounded-sm"
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-xs font-bold opacity-60">
                            PATTERN
                          </div>
                        </div>
                      </div>
                    )}
                    {product.id === 2 && (
                      <div className="w-full h-full flex flex-col space-y-2">
                        <div className="flex space-x-2">
                          <div className="w-16 h-12 bg-blue-400 rounded-full relative">
                            <div className="absolute inset-1 bg-blue-300 rounded-full"></div>
                            <div className="absolute top-2 left-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                            <div className="absolute top-1 right-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <div className="w-16 h-12 bg-pink-400 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-6 border-2 border-pink-600 rounded"></div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-16 h-12 bg-green-400 rounded-full relative">
                            <div className="absolute inset-1 bg-green-300 rounded-full"></div>
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-green-600 rounded-t-full"></div>
                          </div>
                          <div className="w-16 h-12 bg-red-400 rounded-full relative">
                            <div className="absolute inset-1 bg-red-300 rounded-full"></div>
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-red-600 rounded-t-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {product.id === 3 && (
                      <div className="w-full h-full bg-gradient-to-r from-gray-600 to-red-600 rounded-lg relative">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-gray-600 flex items-center justify-center">
                            <div className="text-white text-xs font-bold transform -rotate-12">
                              SEMI
                            </div>
                          </div>
                          <div className="w-1/2 bg-red-600 flex items-center justify-center">
                            <div className="text-white text-xs font-bold transform rotate-12">
                              CIRCLE
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {product.id === 4 && (
                      <div className="w-full h-full bg-pink-200 rounded-lg flex items-end justify-center pb-4">
                        <div className="w-16 h-20 bg-pink-300 rounded-lg relative">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-pink-400 rounded-full"></div>
                          <div className="absolute bottom-2 inset-x-2 h-3 bg-pink-500 rounded"></div>
                        </div>
                      </div>
                    )}
                    {product.id === 5 && (
                      <div className="w-full h-full bg-black rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-yellow-400 font-bold text-lg">
                            WELCOME
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 right-4 border-t-2 border-yellow-400"></div>
                        <div className="absolute bottom-4 left-4 right-4 border-b-2 border-yellow-400"></div>
                        <div className="absolute inset-0">
                          <div className="absolute top-6 left-6 w-8 h-1 bg-yellow-400 transform -rotate-45"></div>
                          <div className="absolute top-6 right-6 w-8 h-1 bg-yellow-400 transform rotate-45"></div>
                          <div className="absolute bottom-6 left-6 w-8 h-1 bg-yellow-400 transform rotate-45"></div>
                          <div className="absolute bottom-6 right-6 w-8 h-1 bg-yellow-400 transform -rotate-45"></div>
                        </div>
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
                  <div className="w-full h-36 bg-gray-100 rounded-t-lg flex items-center justify-center p-3">
                    {product.id === 1 && (
                      <div className="w-full h-full bg-gray-800 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                          <div className="grid grid-cols-3 gap-1 p-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 border border-white rounded-sm"
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {product.id === 2 && (
                      <div className="w-full h-full flex flex-col space-y-1">
                        <div className="flex space-x-1">
                          <div className="w-12 h-8 bg-blue-400 rounded-full relative">
                            <div className="absolute inset-1 bg-blue-300 rounded-full"></div>
                            <div className="absolute top-1 left-1 w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <div className="w-12 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
                            <div className="w-6 h-4 border-2 border-pink-600 rounded"></div>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-12 h-8 bg-green-400 rounded-full relative">
                            <div className="absolute inset-1 bg-green-300 rounded-full"></div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-green-600 rounded-t-full"></div>
                          </div>
                          <div className="w-12 h-8 bg-red-400 rounded-full relative">
                            <div className="absolute inset-1 bg-red-300 rounded-full"></div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-red-600 rounded-t-full"></div>
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

export default FootMat6ixStores;
