import Image from "next/image";

interface MenuShop {
  img: string;
  name: string;
  dsp: string;
  ogp: string;
}

const menu: MenuShop[] = [
  {
    name: "Fresh Lime",
    dsp: "$38.00",
    ogp: "$45.00",
    img: "/images/bigshop1.png",
  },
  {
    name: "Chocolate Muffin",
    dsp: "$28.00",
    ogp: "$35.00",
    img: "/images/bigshop1.png",
  },
  { name: "Burger", dsp: "$21.00", ogp: "$45.00", img: "/images/bigshop1.png" },
  {
    name: "Country Burger",
    dsp: "$38.00",
    ogp: "$45.00",
    img: "/images/bigshop1.png",
  },
  { name: "Drink", dsp: "$38.00", ogp: "$45.00", img: "/images/bigshop1.png" },
  { name: "Pizza", dsp: "$38.00", ogp: "$45.00", img: "/images/bigshop1.png" },
  // ... additional items
];

import React from "react";

function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-4">
      {menu.map((menu, index) => (
        <div key={index} className=" overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <Image
            src={menu.img}
            alt={menu.name}
            width={500}
            height={500}
            className="w-full h-64 md:h-72 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{menu.name}</h3>
            <div className="flex gap-2 mt-2">
              <p className="text-[#FF9F0D] text-sm">{menu.dsp}</p>
              <p className="text-gray-400 text-sm line-through">{menu.ogp}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
