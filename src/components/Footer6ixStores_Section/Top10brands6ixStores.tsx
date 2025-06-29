import React from "react";
import { ChevronRight } from "lucide-react";
import img1 from "../../Images/home deco.jpg";
import img2 from "../../Images/kitchen wares.png";
import img3 from "../../Images/electrical home.png";
import img4 from "../../Images/laptops and acces.jpg";
import img5 from "../../Images/Phone and accessoreis.jpg";
import img6 from "../../Images/shoes.jpg";
import img7 from "../../Images/clothes.png";
import img8 from "../../Images/sport items.jpg";
import img9 from "../../Images/chiildren toys.jpg";
import img11 from "../../Images/kenwood.png";
import img12 from "../../Images/scanfrost.png";
import img13 from "../../Images/hisense.png";
import img14 from "../../Images/century.png";
import img15 from "../../Images/binatone.png";
import img16 from "../../Images/nexus.png";
import img17 from "../../Images/thermocool.png";
import img18 from "../../Images/lontor.png";
import img19 from "../../Images/phillip.png";
import img20 from "../../Images/polystar.png";

interface Category {
  id: number;
  name: string;
  image: string;
}
interface Brand {
  id: number;
  name: string;
  logo: string;
}
const categories: Category[] = [
  {
    id: 1,
    name: "Home decor",
    image: img1,
  },
  {
    id: 2,
    name: "kitchenware appliances",
    image: img2,
  },
  {
    id: 3,
    name: "electrical home appliances",
    image: img3,
  },
  {
    id: 4,
    name: "Laptops & Accessories",
    image: img4,
  },
  {
    id: 5,
    name: "Phones And Accessories",
    image: img5,
  },
  {
    id: 6,
    name: "Shoes",
    image: img6,
  },
  {
    id: 7,
    name: "Clothes",
    image: img7,
  },
  {
    id: 8,
    name: "Sport items",
    image: img8,
  },
  {
    id: 9,
    name: "Children Toys",
    image: img9,
  },
  {
    id: 10,
    name: "Supermarket",
    image: "/api/placeholder/60/60",
  },
];

const brands: Brand[] = [
  {
    id: 1,
    name: "Kenwood",
    logo: img11,
  },
  {
    id: 2,
    name: "Scanfrost",
    logo: img12,
  },
  {
    id: 3,
    name: "Hisense",
    logo: img13,
  },
  {
    id: 4,
    name: "Century",
    logo: img14,
  },
  {
    id: 5,
    name: "Binatone",
    logo: img15,
  },
  {
    id: 6,
    name: "Nexus",
    logo: img16,
  },
  {
    id: 7,
    name: "Thermocool",
    logo: img17,
  },
  {
    id: 8,
    name: "Lontor",
    logo: img18,
  },
  {
    id: 9,
    name: "Philip",
    logo: img19,
  },
  {
    id: 10,
    name: "Polystar",
    logo: img20,
  },
];
const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={category.image}
          alt={category.name}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <span className="text-gray-800 font-medium text-sm md:text-base">
          {category.name}
        </span>
      </div>
      <ChevronRight
        size={20}
        className="text-gray-400 group-hover:text-gray-600 transition-colors"
      />
    </div>
  </div>
);

const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className="text-gray-800 font-medium text-sm md:text-base">
          {brand.name}
        </span>
      </div>
      <ChevronRight
        size={20}
        className="text-gray-400 group-hover:text-gray-600 transition-colors"
      />
    </div>
  </div>
);

const Top10brands6ixStores = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
        {/* Desktop Layout - Two columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Categories Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Top 10 Categories
                </h2>
                <div className="w-32 h-1 bg-orange-400 mt-2"></div>
              </div>
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition-colors">
                View All Categories
              </button>
            </div>

            <div className="space-y-3">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>

          {/* Brands Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Top 10 Brands
                </h2>
                <div className="w-28 h-1 bg-orange-400 mt-2"></div>
              </div>
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition-colors">
                View All Brands
              </button>
            </div>

            <div className="space-y-3">
              {brands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single column (Categories only) */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Top 10 Categories
              </h2>
              <div className="w-28 h-1 bg-orange-400 mt-2"></div>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-2 rounded-md font-medium text-sm transition-colors">
              View All Categories
            </button>
          </div>

          <div className="space-y-3">
            {categories.slice(0, 4).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Show more indicator for mobile */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-1 text-orange-500 font-medium">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top10brands6ixStores;
