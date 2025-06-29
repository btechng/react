import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
interface Product {
  id: number;
  name: string;
  originalPrice?: string;
  salePrice: string;
  discount?: string;
  image: string;
  rating: number;
}

const Clothes6ixStores = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products: Product[] = [
    {
      id: 1,
      name: "Travel steam iron",
      salePrice: "₦15,000.00",
      image: "/api/placeholder/280/220",
      rating: 0,
    },
    {
      id: 2,
      name: "Quality adult hangers",
      originalPrice: "₦4,000.00",
      salePrice: "₦3,500.00",
      discount: "13%",
      image: "/api/placeholder/280/220",
      rating: 0,
    },
    {
      id: 3,
      name: "NBA sports sleeveless",
      originalPrice: "₦9,000.00",
      salePrice: "₦8,000.00",
      discount: "11%",
      image: "/api/placeholder/280/220",
      rating: 0,
    },
    {
      id: 4,
      name: "Baggie jean",
      salePrice: "₦25,000.00",
      image: "/api/placeholder/280/220",
      rating: 0,
    },
    {
      id: 5,
      name: "T-shirt",
      originalPrice: "₦10,000.00",
      salePrice: "₦9,000.00",
      discount: "10%",
      image: "/api/placeholder/280/220",
      rating: 0,
    },
  ];
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };
  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className={
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }
          />
        ))}
      </div>
    );
  };
  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 md:h-52 object-cover"
        />
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            OFF {product.discount}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2">
          {product.originalPrice && (
            <div className="text-sm text-gray-400 line-through mb-1">
              {product.originalPrice}
            </div>
          )}
          <div className="text-xl font-bold text-orange-500">
            {product.salePrice}
          </div>
        </div>
        <StarRating rating={product.rating} />
        <h3 className="text-sm text-gray-800 font-medium leading-tight">
          {product.name}
        </h3>
      </div>
    </div>
  );
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Clothes
            </h2>
            <div className="w-16 md:w-20 h-1 bg-orange-400 mt-2"></div>
          </div>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition-colors">
            View More
          </button>
        </div>

        {/* Desktop Layout - Shows all 5 products */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 z-10 border"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 z-10 border"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Layout - Shows 2 products at a time */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-1/2 flex-shrink-0 px-2">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10 border"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10 border"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: products.length - 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-orange-400" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes6ixStores;
