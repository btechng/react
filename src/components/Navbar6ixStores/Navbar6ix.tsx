import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Home,
  List,
  ShoppingBag,
  Bell,
  User,
  MessageCircle,
  X,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
}
const Navbar6ix = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const categories = [
    { name: "Beauty and fashion", icon: "👗" },
    { name: "Supermarket", icon: "🛒" },
    { name: "Home decors", icon: "🏠" },
    { name: "kitchenware appliances", icon: "🍴" },
    { name: "Electrical home appliances", icon: "⚡" },
    { name: "Laptops & Accessories", icon: "💻" },
    { name: "Phones And Accessories", icon: "📱" },
    { name: "Shoes", icon: "👟" },
    { name: "Clothes", icon: "👕" },
    { name: "Sport Items", icon: "⚽" },
    { name: "Children Toys", icon: "🧸" },
  ];
  const navItems = [
    "Home",
    "Phones And Accessories",
    "electrical home appliances",
    "Kitchen Equipments",
    "Clothes",
    "Shoes",
    "Picnod Cars",
    "All categories",
  ];
  const productImages = [
    { id: 1, name: "Home Products", image: "/api/placeholder/100/100" },
    { id: 2, name: "Kitchen Items", image: "/api/placeholder/100/100" },
    { id: 3, name: "Electronics", image: "/api/placeholder/100/100" },
    { id: 4, name: "Laptops", image: "/api/placeholder/100/100" },
    { id: 5, name: "Phones", image: "/api/placeholder/100/100" },
    { id: 6, name: "Sports", image: "/api/placeholder/100/100" },
    { id: 7, name: "Clothes", image: "/api/placeholder/100/100" },
    { id: 8, name: "Sports Equipment", image: "/api/placeholder/100/100" },
    { id: 9, name: "Cars", image: "/api/placeholder/100/100" },
    { id: 10, name: "Books", image: "/api/placeholder/100/100" },
    // { id: 11, name: "Interior", image: "/api/placeholder/100/100" },
    // { id: 12, name: "Shoes", image: "/api/placeholder/100/100" },
    // { id: 13, name: "Fashion", image: "/api/placeholder/100/100" },
  ];
  const todaysDeals = [
    {
      id: 1,
      name: "Dish Rack",
      price: 25000,
      originalPrice: 27000,
      image: "/api/placeholder/150/150",
    },
    {
      id: 2,
      name: "Kitchen Scale",
      price: 23000,
      originalPrice: 25000,
      image: "/api/placeholder/150/150",
    },
    {
      id: 3,
      name: "Car Jack",
      price: 15000,
      originalPrice: 18000,
      image: "/api/placeholder/150/150",
    },
  ];
  const mobileCategories = [
    { name: "Home decors", image: "/api/placeholder/120/80" },
    { name: "kitchenware appliances", image: "/api/placeholder/120/80" },
    { name: "electrical home appliances", image: "/api/placeholder/120/80" },
    { name: "Laptops & Accessories", image: "/api/placeholder/120/80" },
    { name: "Phones And Accessories", image: "/api/placeholder/120/80" },
    { name: "Sport Items", image: "/api/placeholder/120/80" },
  ];
  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}.00`;
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Top Bar */}
          <div className="hidden lg:block">
            <div className="bg-white border-b">
              <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                {/* Helpline */}
                <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h10a1 1 0 001-1v-1a1 1 0 00-1-1H9.42l.93-1.68L18 6H5.21"
                    />
                  </svg>
                  <span>
                    Help line{" "}
                    <a
                      href="tel:+2349119225365"
                      className="text-blue-600 hover:underline"
                    >
                      +234 9119225365
                    </a>
                  </span>
                </div>

                {/* Login / Registration Buttons */}
                <div className="flex space-x-3 text-sm">
                  <a href="/Signin">
                    <button className="px-4 py-1 rounded-full font-semibold text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-700 hover:scale-105 transition transform duration-200">
                      SignIn
                    </button>
                  </a>
                  <a href="/Signup">
                    <button className="px-4 py-1 rounded-full font-semibold text-gray-700 border border-gray-300 hover:bg-blue-50 hover:text-blue-700 hover:scale-105 transition transform duration-200">
                      SignUp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <span className="ml-2 text-xl font-bold">6ixStores</span>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl mx-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="I am shopping for..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button className="absolute right-0 top-0 h-full px-6 bg-orange-400 text-white rounded-r-lg hover:bg-orange-500">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Icons */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <RotateCcw className="w-5 h-5" />
                    <span className="text-sm">Compare</span>
                    <span className="bg-orange-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">Wishlist</span>
                    <span className="bg-orange-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="text-sm">Cart</span>
                    <span className="bg-orange-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex space-x-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className="px-4 py-3 font-semibold text-gray-700 hover:text-orange-600 border-b-2 border-transparent hover:border-orange-500 rounded-full transition-all duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-8">
              {/* Sidebar */}
              <div className="w-80">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <button className="text-orange-500 text-sm">
                      See All{" "}
                    </button>
                  </div>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 py-2 hover:bg-gray-50 rounded cursor-pointer"
                      >
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1">
                {/* Hero Banner */}
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 flex items-center justify-between p-8 text-white">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <span className="text-yellow-400 text-2xl mr-2">
                          ⭐
                        </span>
                        <h2 className="text-4xl font-bold italic">
                          Black Friday Flash Sale!
                        </h2>
                        <span className="text-yellow-400 text-2xl ml-2">
                          ⭐
                        </span>
                      </div>
                      <div className="bg-orange-500 text-white px-4 py-1 rounded text-sm inline-block mb-4">
                        6iXSTORES ONLINE SHOPPING
                      </div>
                      <div className="mb-4">
                        <p className="text-lg">Place your Order Now*</p>
                        <p className="text-sm opacity-90">Pay on delivery</p>
                      </div>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                          Rechargeable clipper
                        </h3>
                        <p className="text-lg">Ox standing fan</p>
                        <p className="text-lg">
                          Kenwood industrial blender 6000W 2L jar
                        </p>
                      </div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center">
                        Order Now
                        <span className="ml-2">→</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32 bg-purple-700 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold">25%</div>
                          <div className="text-lg">OFF</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-8 bottom-8">
                    <ChevronLeft className="w-8 h-8 text-white cursor-pointer" />
                  </div>
                  <div className="absolute right-8 bottom-8">
                    <ChevronRight className="w-8 h-8 text-white cursor-pointer" />
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-10 gap-4 mb-8">
                  {productImages.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="w-full h-16 bg-gray-100 rounded mb-2"></div>
                      <p className="text-xs text-center text-gray-600">
                        {product.name.substring(0, 3)}...
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Deal Sidebar */}
              <div className="w-64">
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Todays Deal</h3>
                    <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded">
                      Hot
                    </span>
                  </div>
                  <div className="space-y-4">
                    {todaysDeals.map((deal) => (
                      <div
                        key={deal.id}
                        className="border border-orange-200 rounded-lg p-3"
                      >
                        <div className="w-full h-20 bg-gray-100 rounded mb-2"></div>
                        <div className="text-orange-500 font-bold">
                          {formatPrice(deal.price)}
                        </div>
                        <div className="text-gray-400 text-sm line-through">
                          {formatPrice(deal.originalPrice!)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Header */}
          <div className="bg-white shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">6S</span>
              </div>
              <Search className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="bg-white border-b overflow-x-auto">
            <div className="flex space-x-6 px-4 py-3 whitespace-nowrap">
              <span className="text-gray-700">Home</span>
              <span className="text-gray-700">Phones And Accessories</span>
              <span className="text-gray-700">Electrical Home appliances</span>
              <span className="text-gray-700">Laptops And Accessories</span>
              <span className="text-gray-700">Clothes</span>
              <span className="text-gray-700">Books</span>
              <span className="text-gray-700">Sports Equipment</span>
            </div>
          </div>

          {/* Mobile Banner */}
          <div className="relative bg-red-600 mx-4 my-4 rounded-lg overflow-hidden">
            <div className="p-6 text-white">
              <h2 className="text-xl font-bold mb-2">
                SUPER DISCOUNT UP TO 5% OFF
              </h2>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold text-sm">
                SHOP NOW
              </button>
              <div className="text-sm mt-2">Www.6ixstores.com</div>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-16 h-24 bg-black rounded"></div>
            </div>
          </div>

          {/* Mobile Categories Grid */}
          <div className="px-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              {mobileCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="h-20 bg-gray-100 relative">
                    {index === 1 && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        FLASH SALE
                      </div>
                    )}
                    {index === 2 && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-black text-lg font-bold px-2 py-1 rounded">
                        5%
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-800">
                      {category.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Navigation */}
          {/* Mobile Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="flex justify-around py-2">
              {/* Home */}
              <button className="flex flex-col items-center py-1 hover:scale-105 transition ${isActive ? 'text-blue-600' : 'text-gray-700">
                <Home className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-700 font-medium mt-0.5">
                  Home
                </span>
              </button>

              {/* Categories */}
              <button className="flex flex-col items-center py-1 hover:scale-105 transition ${isActive ? 'text-blue-600' : 'text-gray-700">
                <List className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-700 font-medium mt-0.5">
                  Categories
                </span>
              </button>

              {/* Cart */}
              <button className="flex flex-col items-center py-1 hover:scale-105 transition ${isActive ? 'text-blue-600' : 'text-gray-700">
                <div className="relative">
                  <ShoppingBag className="w-6 h-6 text-orange-500" />
                  <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="text-xs text-orange-500 font-medium mt-0.5">
                  Cart
                </span>
              </button>

              {/* Notifications */}
              <button className="flex flex-col items-center py-1 hover:scale-105 transition ${isActive ? 'text-blue-600' : 'text-gray-700">
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-700 font-medium mt-0.5">
                  Notifications
                </span>
              </button>

              {/* Account */}
              <button className="flex flex-col items-center py-1 hover:scale-105 transition ${isActive ? 'text-blue-600' : 'text-gray-700">
                <User className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-700 font-medium mt-0.5">
                  Account
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-24 lg:bottom-8 right-4 z-50">
          <button
            onClick={() => setShowWhatsApp(!showWhatsApp)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
          {showWhatsApp && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">WhatsApp us</span>
                <button onClick={() => setShowWhatsApp(false)}>
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                How can we help you today?
              </p>
              <button className="w-full bg-green-500 text-white py-2 rounded font-medium">
                Start Chat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar6ix;
