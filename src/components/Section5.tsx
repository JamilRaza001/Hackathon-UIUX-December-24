"use client";
import Image from "next/image";
import { useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Breakfast");

  const menuCategories: string[] = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Soups",
  ];

  const menuItems: MenuCategory[] = [
    {
      category: "Breakfast",
      items: [
        {
          name: "Lettuce Leaf",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/images/section5_1.png",
        },
        {
          name: "Fresh Breakfast",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "14.5$",
          image: "/images/section5_2.png",
        },
        {
          name: "Mild Butter",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/images/section5_3.png",
        },
        {
          name: "Fresh Bread",
          description: "Lacus nisi, et ac dapibus velit in consequat.",
          price: "12.5$",
          image: "/images/section5_4.png",
        },
      ],
    },
  ];

  const filteredItems = menuItems.find(
    (menu) => menu.category === activeCategory
  )?.items;

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#FF9F0D] text-lg font-bold text-center">
          Choose & Pick
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mt-2">
          From Our Menu
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "text-[#FF9F0D] border-b-2 border-[#FF9F0D]"
                  : "text-gray-400 hover:text-[#FF9F0D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Featured Image */}
          <div className="flex justify-center lg:mt-20">
            <Image
              src="/images/section5_m.png"
              alt="Featured Dish"
              width={400}
              height={400}
              className="rounded-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-cover"
            />
          </div>

          {/* Right: Menu Items */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Column 1 */}
            <div className="space-y-6 flex-1">
              {filteredItems?.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center gap-4 border-b border-gray-700 pb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg w-[80px] h-[80px] object-cover"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-[#FF9F0D] text-sm sm:text-lg font-bold ml-auto">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-6 flex-1">
              {filteredItems?.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center gap-4 border-b border-gray-700 pb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg w-[80px] h-[80px]  object-cover"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-[#FF9F0D] text-sm sm:text-lg font-bold ml-auto">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
